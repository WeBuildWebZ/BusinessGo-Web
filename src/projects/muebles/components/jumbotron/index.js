import Jumbotron from 'react-bootstrap/Jumbotron';
import { useSelector } from 'react-redux';

import Spinner from '../../../../components/Spinner';

export const Jumbo = () => {
  const project = useSelector(store => store.project);

  return (
    <div>
      <Jumbotron className="light">
        {!project && <Spinner />}
        {project && (
          <>
            <h1>{project.configuration.basic_info.title}</h1>
            <p>{project.configuration.basic_info.description}</p>
          </>
        )}
      </Jumbotron>
    </div>
  );
};
