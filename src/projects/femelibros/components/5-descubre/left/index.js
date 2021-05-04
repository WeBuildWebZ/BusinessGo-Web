import Image from 'next/image';
import { useSelector } from 'react-redux';

const Left = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="left" data-aos="fade-left">
      {project?.configuration.body?.photo1 && (
        <Image
          src={project?.configuration.body?.photo1}
          alt="Picture of the author"
          width={600}
          height={700}
        />
      )}
      <style jsx>
        {`
          .left {
            width: 600px;
          }
        `}
      </style>
    </div>
  );
};

export default Left;
