import Link from 'next/link';
import { useSelector } from 'react-redux';

import Spinner from '../../../../components/Spinner';

const Footer = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="footer" id="contacto">
      <div className="bottom">
        {!project && <Spinner />}
        {project?.configuration.footer.sections.map((section, i) => {
          const title = section.link ? (
            <h3>
              <Link href={section.link}>
                <a className="pointer">{section.title}</a>
              </Link>
            </h3>
          ) : (
            <h3>{section.title}</h3>
          );

          return (
            <span key={i} className="column">
              {title}
              <p>{section.description}</p>
            </span>
          );
        })}

        {project && (
          <span className="column">
            <h3>{project.configuration.footer.contact_info_title}</h3>
            {project.configuration.footer.location && (
              <span className="row">
                <img src="/icons/house.png" alt="house icon" />
                <p> {project.configuration.footer.location}</p>
                <br />
              </span>
            )}
            {project.configuration.footer.phone && (
              <span className="row">
                <img src="/icons/phone.png" alt="phone icon" />
                <p>
                  <a href={`tel:${project.configuration.footer.phone}`} target="blank">
                    {project.configuration.footer.phone}
                  </a>
                </p>
              </span>
            )}
            {project.configuration.footer.email && (
              <span className="row">
                <img src="/icons/contact.png" alt="contact icon" />
                <p>
                  <a href={`mailto:${project.configuration.footer.email}`} target="blank">
                    {project.configuration.footer.email}
                  </a>
                </p>
              </span>
            )}
          </span>
        )}
      </div>

      <style jsx>
        {`
          .footer {
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #0f0f0f;
          }

          .bottom {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            width: 100%;
            height: 100%;
          }

          .column {
            width: 400px;
            height: 100%;
            padding: 1em;
            border-radius: 1em;
          }
          .row {
            width: 100%;
            display: flex;
            padding: 0.5em 0 0 0.5em;
          }
          h3 {
            margin-top: 1em;
            color: white;
          }
          img {
            width: 25px;
            height: 25px;
          }
          p {
            color: grey;
            margin: 0;
            padding: 0 0 0 0.5em;
          }
          .pointer {
            cursor: pointer;
            color: white;
          }

          a {
            color: grey;
          }

          @media (max-width: 840px) {
            .bottom {
              flex-flow: column;
            }
            .column {
              width: 100%;
              padding: 1em;
              border-radius: 0;
              display: flex;
              justify-content: center;
              flex-flow: column;
            }
            .row {
              padding: 0 0 1em 1em;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
