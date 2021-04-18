import Image from 'next/image';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

import useScrollTop from '../../../../shared/hooks/useScrollTop';

const One = () => {
  const scrollTop = useScrollTop(typeof document === 'object' ? document.body : null);
  const project = useSelector(store => store.project);
  const elementRef = useRef();
  let elementScroll = elementRef.current ? scrollTop + 550 - elementRef.current.offsetTop : 0;
  elementScroll = elementScroll <= 0 ? 0 : elementScroll;

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
            clip-path: circle(${elementScroll}px at center);
          }
        `}
      </style>
    </div>
  );
};

export default One;
