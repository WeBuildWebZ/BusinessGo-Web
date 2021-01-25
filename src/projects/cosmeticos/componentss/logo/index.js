import { useSelector } from 'react-redux';

const Logo = () => {
  const project = useSelector(store => store.project);

  return (
    <a className="logo" href="/">
      <img src="/favicon.png" width={24} height={24} />
      <h4>{project?.configuration.basic_info.page_name}</h4>
      <style jsx>
        {`
          .logo {
            border: 3px solid #2e31be;
            border-radius: 1em;
            display: flex;
            margin: 0 5px;
            color: #2e31be;
            padding: 0.5em;
            cursor: pointer;
            transition: 0.7s;
            animation: arrive 1s linear;
          }
          .logo:hover {
            border-radius: 2em;
          }
          .fa-bacon {
            font-size: 2em;
            width: 30px;
            height: 30px;
          }

          @keyframes arrive {
            0% {
              opacity: 0;
              -ms-transform: rotate(180deg) translate(-200%);
              -moz-transform: rotate(180deg) translate(-200%);
              -webkit-transform: rotate(180deg) translate(-200%);
              -o-transform: rotate(180deg) translate(-200%);
              transform: rotate(180deg) translate(-200%);
            }
            100% {
              opacity: 1;
              margin-right: 0;
              -ms-transform: translate(0, 0);
              -moz-transform: translate(0, 0);
              -webkit-transform: translate(0, 0);
              -o-transform: translate(0, 0);
              transform: translate(0, 0);
            }
          }
        `}
      </style>
    </a>
  );
};

export default Logo;
