import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { scrolledToBottom } from '../../../utils/html';
import SearchInput from '../components/SearchInput';
import FilterButton from '../components/FilterButton';
import FilterView from '../components/FilterView';
import FilterInput from '../components/FilterInput';
import Professionals from '../components/Professionals';
import ProfessionalDetail from '../components/ProfessionalDetail';
import { getProfessionalFilters, getProfessionals } from '../services/professional';
import { setOptions } from '../actions/options';

const App = () => {
  const dispatch = useDispatch();
  const project = useSelector(state => state.project);
  const projectRef = useRef();
  projectRef.current = project;

  const selectedOptions = useSelector(state => state.selectedOptions);
  const [filterViewOpen, setFilterViewOpen] = useState(false);
  const [professionals, setProfessionals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [canChangePage, setCanChangePage] = useState(true);
  const [loadingOptions, setLoadingOptions] = useState(true);
  const [textSearch, setTextSearch] = useState('');

  useEffect(() => {
    getProfessionalFilters().then(filters => {
      setLoadingOptions(false);
      dispatch(
        setOptions({
          workAreas: filters['value.work_area']
        })
      );
    });
  }, []);

  useEffect(() => {
    if (!projectRef.current) return;
    dispatch(
      setOptions({
        regions: projectRef.current.configuration.basic_info.chile_regions.map(region => region.value)
      })
    );
  }, [project]);

  const handleSelectProfessional = professional => {
    setSelectedProfessional(professional);
  };

  const handleDiselectProfessional = () => {
    setSelectedProfessional(null);
  };

  const handleGetProfessionals = () => {
    const filters = {};

    if (selectedOptions.regions.length) filters['value.region'] = selectedOptions.regions;
    if (selectedOptions.cities.length) filters['value.city'] = selectedOptions.cities;
    if (selectedOptions.workAreas.length) filters['value.work_area'] = selectedOptions.workAreas;

    getProfessionals(pageNumber, filters, textSearch).then(newProfessioanals => {
      setLoading(false);
      setCanChangePage(!!newProfessioanals.length);
      if (pageNumber === 1) setProfessionals(newProfessioanals);
      else setProfessionals([...professionals, ...newProfessioanals]);
    });
  };

  useEffect(() => {
    setCanChangePage(false);
    setLoading(true);
    handleGetProfessionals();
  }, [pageNumber, selectedOptions, textSearch]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrolledToBottom() || !canChangePage) return;
      setPageNumber(pageNumber + 1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pageNumber, canChangePage]);

  const handleTextSearch = text => {
    setPageNumber(1);
    setTextSearch(text);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-container">
          {filterViewOpen && <FilterView onClose={() => setFilterViewOpen(false)} />}
          <img className="logo" src="logo.png" alt="logo" />
          <h3 className="App-title">Encuentra al profesional más cercano</h3>
          <div className="App-searchInputContainer">
            <SearchInput onChange={handleTextSearch} />
            <FilterButton onOpenFilterView={() => setFilterViewOpen(true)} />
            <div className="App-filterInputContainer">
              <FilterInput label="Región" option="regions" loading={loadingOptions} />
              <FilterInput label="Ciudad" option="cities" loading={loadingOptions} />
              <FilterInput label="Área de trabajo" option="workAreas" loading={loadingOptions} />
            </div>
          </div>
          <Professionals onClick={handleSelectProfessional} professionals={professionals} loading={loading} />
          {selectedProfessional && (
            <ProfessionalDetail professional={selectedProfessional} onClose={handleDiselectProfessional} />
          )}
        </div>
      </header>
      <style jsx>
        {`
          .App {
            text-align: center;
            width: 100%;
          }

          .logo {
            float: left;
            width: 80px;
            border-radius: 10px;
            margin-top: 10px;
            cursor: pointer;
            transition: 0.2s;
          }

          .logo:hover {
            box-shadow: 0 0 1px 1px #ffffff;
          }

          .App-header {
            background: linear-gradient(to right, #202221, #32363d);
            min-height: 100vh;
            display: flex;
            font-size: calc(10px + 2vmin);
            color: white;
          }

          .App-container {
            width: calc(100% - 35px);
            margin-left: 35px;
          }

          .App-title {
            width: 100%;
            text-align: left;
            float: left;
            margin: 35px 0 35px 0;
          }

          .App-searchInputContainer {
            display: flex;
            flex-direction: row;
            align-items: center;
            position: relative;
            float: left;
            width: '100%';
          }

          .App-filterInputContainer {
            position: relative;
            display: inline-block;
            margin-left: 8px;
          }

          @media only screen and (max-width: 768px) {
            .App-container {
              width: calc(100% - 15px);
              margin-left: 15px;
            }

            .App-title {
              margin: 15px 0 30px 0;
            }

            .App-searchInputContainer {
              width: 100%;
            }

            .App-filterInputContainer {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;
