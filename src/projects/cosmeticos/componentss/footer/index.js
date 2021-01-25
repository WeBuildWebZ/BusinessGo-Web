import { useSelector } from 'react-redux';

import Spinner from '../../../../components/Spinner';

const Footer = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="social">
      {!project && <Spinner />}
      {project &&
        project.configuration.footer.sections.map((section, i) => (
          <span className="menu" key={i}>
            <h3>{section.title}</h3>
            {section.options.map((option, ii) => (
              <a href={option.link} target="_blank" key={ii}>
                <h5>{option.text}</h5>
              </a>
            ))}
          </span>
        ))}
      <style jsx>
        {`
          .social {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 50vh;
            background-image: linear-gradient(to left, hsla(0, 0%, 0%, 0.897), hsla(0, 0%, 0%, 0.897)),
              url(/images/featured-2.jpg);
            background-position: 0;
            background-size: cover;
            background-repeat: no-repeat;
            color: white;
          }
          .menu {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
          }
          .h3 {
            flex: 1;
            padding: 0.5em;
          }
          // ========================================
          @media (max-width: 430px) {
            .social {
              height: 100vh;
              flex-flow: column;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
