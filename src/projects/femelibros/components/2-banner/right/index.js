import { useSelector } from 'react-redux';

const Right = () => {
  const project = useSelector(store => store.project);
  console.log('project?.configuration.body.cover_photo', project?.configuration.body.cover_photo);

  return (
    <div className="right" data-aos="fade-right">
      <style jsx>
        {`
          .right {
            width: 600px;
            min-height: 100vh;
            background-image: url(${project?.configuration.body.cover_photo});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            margin-top: 80px;
            // display: flex;
            // justify-content: center;
            // align-items: center;
            // flex-flow: column;
          }
          @media only screen and (max-width: 768px) {
            .right {
              border-top-right-radius: unset;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Right;
