import { useEffect } from 'react';

import useScrollTop from '../../../../../shared/hooks/useScrollTop';

const Right = () => {
  const scrollTop = useScrollTop(process.browser ? document.body : null);

  return (
    <div className="right">
      <div className="image" />
      <style jsx>
        {`
          .right {
            width: 100%;
            flex: 1;
            display: flex;
            align-items: center;
          }
          .image {
            width: calc(450px - ${scrollTop * 0.8}px);
            filter: blur(${scrollTop * 0.02}px);
            transform: rotate(${scrollTop * 0.1}deg);
            min-height: 600px;
            background-image: url(/images/banner.jpg);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          }
          // ============================================
          @media (max-width: 889px) {
            .right {
              justify-content: center;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Right;
