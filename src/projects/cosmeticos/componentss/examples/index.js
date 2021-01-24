import Link from 'next/link';
import { useSelector } from 'react-redux';

import Spinner from '../../../../components/Spinner';

const Examples = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="examples">
      <div className="box1" data-aos="fade-right" />
      <div className="box2">
        {!project && <Spinner />}
        {project && (
          <Link href="/productos">
            <button className="btn btn--rounded">{project.configuration.basic_info.go_to_products}</button>
          </Link>
        )}
      </div>
      <div className="box3" />
      <style jsx>
        {`
          .examples {
            display: flex;
            width: 100vw;
            height: 70vh;
            margin: 5em 0;
          }
          .box1,
          .box2,
          .box3 {
            flex: 1;
            width: 100%;
            height: 100%;
          }
          .box1 {
            background-image: url(/images/featured-1.jpg);
            background-position: 0 -110px;
            background-size: cover;
            background-repeat: no-repeat;
          }
          .box2 {
            background-image: url(/images/featured-2.jpg);
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            display: flex;
            justify-content: center;
            align-items: flex-end;
          }
          .box3 {
            background-image: url(/images/featured-3.jpg);
            background-position: 0 -50px;
            background-size: cover;
            background-repeat: no-repeat;
          }

          button {
            background: hsla(0, 0%, 100%, 0.6);
            border-radius: 1em;
            border: 2px solid black;
            padding: 0.5em 2em;
          }
          button:hover {
            background: hsla(0, 0%, 0%, 0.7);
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default Examples;
