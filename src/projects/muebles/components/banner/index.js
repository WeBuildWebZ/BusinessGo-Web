import { useSelector } from 'react-redux';

import Spinner from '../../../../components/Spinner';

export const Banner = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="banner">
      <style jsx>
        {`
          .banner {
            width: 100vw;
            height: 100vh;
            background-attachment: fixed;
            background-image: url(/images/banner.jpg);
            background-position: 0;
            background-repeat: no-repeat;
            background-size: cover;
          }
        `}
      </style>
    </div>
  );
};
