import { useSelector } from 'react-redux';

export const Logo = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="logo">
      <img src="/favicon.png" width={50} />
      <h4>{project?.configuration.basic_info.title}</h4>
      <style jsx>
        {`
          .logo {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .fa-dolly {
            width: 50px;
            height: 150px;
          }
        `}
      </style>
    </div>
  );
};
