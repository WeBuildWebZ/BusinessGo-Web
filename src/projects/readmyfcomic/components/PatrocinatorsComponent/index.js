import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Pagination from '../Pagination';
import { getClientDocuments } from '../../../../services/api/clientDocument';

const PatrocinatorsComponent = () => {
  const project = useSelector(store => store.project);
  const [patrocinators, setPatrocinators] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    if (!project) return;
    // getClientDocuments('book', project, 4, 1).then(({ data: givenPatrocinators }) => {
    //   setPatrocinators(givenPatrocinators);
    // });
  }, [project]);

  return (
    <div className="patrocinators">
      <div className="paginationContainer">
        <Pagination
          pagination={{ count: 15, pageSize: 3, maxPages: 3, pageNumber }}
          onPageChanged={setPageNumber}
        />
      </div>
      <style jsx>
        {`
          .patrocinators {
            display: flex;
            flex-wrap: wrap;
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
