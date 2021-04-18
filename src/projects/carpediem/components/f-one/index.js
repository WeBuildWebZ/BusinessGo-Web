import Image from 'next/image';
import { useSelector } from 'react-redux';

const One = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="one">
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
