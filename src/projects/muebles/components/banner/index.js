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

          @media (max-width: 729px) {
            .banner {
              width: 100vw;
              background-position: center;
            }
          }
          @media (max-width: 661px) {
            .banner {
              background-attachment: unset;
              background-position: -100px 0;
            }
          }
          @media (max-width: 600px) {
            .banner {
              background-position: -200px 0;
            }
          }
        `}
      </style>
    </div>
  );
};
