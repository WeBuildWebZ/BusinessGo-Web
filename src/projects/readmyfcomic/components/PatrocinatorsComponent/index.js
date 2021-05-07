import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Pagination from '../Pagination';
import { getClientDocuments } from '../../../../services/api/clientDocument';

import Patrocinator from './Patrocinator';

const pageSize = 4;

const PatrocinatorsComponent = () => {
  const project = useSelector(store => store.project);
  const [patrocinators, setPatrocinators] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [count, setCount] = useState(null);

  useEffect(() => {
    if (!project) return;
    getClientDocuments('user', project, pageSize, pageNumber, { 'sponsorship.is_patrocinator': true }).then(
      ({ data: givenPatrocinators }) => {
        setPatrocinators(givenPatrocinators);
        console.log('givenPatrocinators', givenPatrocinators);
      }
    );
  }, [project, pageNumber]);

  useEffect(() => {
    if (!project) return;
    getClientDocuments(
      'user',
      project,
      pageSize,
      pageNumber,
      { 'sponsorship.is_patrocinator': true },
      '',
      [],
      true
    ).then(({ data: response }) => {
      setCount(response.count);
    });
  }, [project]);

  return (
    <div className="patrocinators">
      {patrocinators.map((patrocinator, i) => (
        <Patrocinator key={i} patrocinator={patrocinator} />
      ))}
      {count && (
        <div className="paginationContainer">
          <Pagination
            pagination={{ count, pageSize, maxPages: 3, pageNumber }}
            onPageChanged={setPageNumber}
          />
        </div>
      )}
      <style jsx>
        {`
          .patrocinators {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin-top: 21px;
          }
          .paginationContainer {
            display: flex;
            justify-content: center;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default PatrocinatorsComponent;
