import React, { useEffect, useState } from 'react';

import './App.css';
import { scrolledToBottom } from '../../../utils/html';
import SearchInput from '../components/SearchInput';
import FilterInput from '../components/FilterInput';
import Professionals from '../components/Professionals';
import ProfessionalDetail from '../components/ProfessionalDetail';
import { getProfessionalFilters, getProfessionals } from '../services/professional';

const App = () => {
  const [professionals, setProfessionals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [canChangePage, setCanChangePage] = useState(true);
  const [loadingOptions, setLoadingOptions] = useState(true);
  const [regionOptions, setRegionOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [workAreaOptions, setWorkAreaOptions] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedWorkareas, setSelectedWorkAreas] = useState([]);
  const [textSearch, setTextSearch] = useState('');

  useEffect(() => {
    getProfessionalFilters().then(filters => {
      setLoadingOptions(false);
      setRegionOptions(filters['value.region']);
      setCityOptions(filters['value.city']);
      setWorkAreaOptions(filters['value.work_area']);
    });
  }, []);

  const handleSelectProfessional = professional => {
    setSelectedProfessional(professional);
  };

  const handleDiselectProfessional = () => {
    setSelectedProfessional(null);
  };

  const handleGetProfessionals = () => {
    const filters = {};

    if (selectedRegions.length) filters['value.region'] = selectedRegions;
    if (selectedCities.length) filters['value.city'] = selectedCities;
    if (selectedWorkareas.length) filters['value.work_area'] = selectedWorkareas;

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
  }, [pageNumber, selectedRegions, selectedCities, selectedWorkareas, textSearch]);

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
          <h3 className="App-title">Encuentra al profesional más cercano</h3>
          <div className="App-searchInputContainer">
            <SearchInput onChange={handleTextSearch} />
            <div className="App-filterInputContainer">
              <FilterInput
                label="Región"
                options={regionOptions}
                loading={loadingOptions}
                onChange={_selectedRegions => {
                  setSelectedRegions(_selectedRegions);
                  setPageNumber(1);
                }}
              />
              <FilterInput
                label="Ciudad"
                options={cityOptions}
                loading={loadingOptions}
                onChange={_selectedCities => {
                  setSelectedCities(_selectedCities);
                  setPageNumber(1);
                }}
              />
              <FilterInput
                label="Área de trabajo"
                options={workAreaOptions}
                loading={loadingOptions}
                onChange={_selectedWorkAreas => {
                  setSelectedWorkAreas(_selectedWorkAreas);
                  setPageNumber(1);
                }}
              />
            </div>
          </div>
          <Professionals onClick={handleSelectProfessional} professionals={professionals} loading={loading} />
          {selectedProfessional && (
            <ProfessionalDetail professional={selectedProfessional} onClose={handleDiselectProfessional} />
          )}
        </div>
      </header>
    </div>
  );
};

export default App;
