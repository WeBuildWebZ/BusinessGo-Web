import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import useScrollTop from '../../../../shared/hooks/useScrollTop';

const One = () => {
  const project = useSelector(store => store.project);
  const elementRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      let elementScroll = scrollY + 550 - elementRef.current.offsetTop;
      elementScroll = elementScroll <= 0 ? 0 : elementScroll;

      elementRef.current.style.clipPath = `circle(${elementScroll}px at center)`;
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="one" ref={elementRef}>
      {project?.configuration.body.image && (
        <Image src={project?.configuration.body.image} alt="Carpediem" width={1200} height={1000} />
      )}
      <style jsx>
        {`
          .one {
            width: 100vw;
            min-height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export default One;
