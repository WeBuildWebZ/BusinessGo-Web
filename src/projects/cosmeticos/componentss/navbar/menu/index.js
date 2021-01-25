import { useSelector } from 'react-redux';

import Spinner from '../../../../../components/Spinner';

const Menu = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="menu">
      <a href="/productos">
        <h5>Productos</h5>
      </a>
      <a href="/carrito">
        <h5>Carrito</h5>
      </a>
      {!project && <Spinner />}
      {project && (
        <a href={project.configuration.basic_info.facebook_url} target="_blank">
          <h5>Contacto</h5>
        </a>
      )}

      <style jsx>
        {`
          .menu {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0 2em 0 0;
          }
          h5 {
            margin: 0 0.5em;
            cursor: pointer;
          }
          h5:hover {
            border-bottom: 3px solid #ffa51d;
            color: #ffa51d;
          }
        `}
      </style>
    </div>
  );
};

export default Menu;
