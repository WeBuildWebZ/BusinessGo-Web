import { useSelector } from 'react-redux';

import Logo from '../../assets/icons/logo';
import Spinner from '../../../../components/Spinner';

const Footer = () => {
  const project = useSelector(store => store.project);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo /> <span>Blanquería</span>-Wow
            </h6>
            {!project && <Spinner />}
            {project && <p>{project.configuration.basic_info.description}</p>}
            <ul className="site-footer__social-networks">
              <li>
                {!project && <Spinner />}
                {project && (
                  <a href={project.configuration.basic_info.facebook_url} target="blank">
                    <i className="icon-facebook" />
                  </a>
                )}
              </li>
              <li>
                {!project && <Spinner />}
                {project && (
                  <a href={project.configuration.basic_info.twitter_url} target="blank">
                    <i className="icon-twitter" />
                  </a>
                )}
              </li>
              <li>
                {!project && <Spinner />}
                {project && (
                  <a href={project.configuration.basic_info.linkedin_url} target="blank">
                    <i className="icon-linkedin" />
                  </a>
                )}
              </li>
              <li>
                {!project && <Spinner />}
                {project && (
                  <a href={project.configuration.basic_info.instagram_url} target="blank">
                    <i className="icon-instagram" />
                  </a>
                )}
              </li>
              <li>
                {!project && <Spinner />}
                {project && (
                  <a href={project.configuration.basic_info.youtube_url} target="blank">
                    <i className="icon-youtube-play" />
                  </a>
                )}
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            {!project && <Spinner />}
            {project &&
              project.configuration.footer.sections.map((section, i) => (
                <ul key={i}>
                  <li>{section.title}</li>
                  {section.options.map((option, ii) => (
                    <li key={ii}>
                      <a href={option.link} target="_blank">
                        {option.text}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>Diseñado por WeBuildWebZ - © 2021 todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
