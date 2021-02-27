import { useEffect, useRef, useState } from 'react';

import useScrollTop from '../../../../../shared/hooks/useScrollTop';

const Right = () => {
  const scrollTop = useScrollTop(process.browser ? document.body : null);
  const [imageTop, setImageTop] = useState(0);
  const offsetTop = scrollTop - imageTop < 0 ? 0 : scrollTop - imageTop;
  const imageRef = useRef();

  useEffect(() => {
    setImageTop(imageRef.current.offsetTop);
  }, [imageRef.current?.offsetTop]);

  return (
    <div className="right">
      <div className="image" ref={imageRef} />
      <style jsx>
        {`
          .right {
            width: 100%;
            flex: 1;
            display: flex;
            align-items: center;
          }
          .image {
            width: calc(450px - ${offsetTop * 0.8}px);
            filter: blur(${offsetTop * 0.02}px);
            transform: rotate(${offsetTop * 0.1}deg);
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
