import PropTypes from 'prop-types';

const Left = props => (
  <div className="left">
    <span>
      {props.children}
      <br />
      {props.service.title && <h3>{props.service.title}</h3>}
      {props.service.sections?.map((section, i) => (
        <div key={i}>
          {section.subtitle && <h4>{section.subtitle}</h4>}
          {section.description && <p>{section.description}</p>}
        </div>
      ))}
      {props.service.view_button && <button>Ver</button>}
    </span>

    <style jsx>
      {`
        .left {
          min-width: 600px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        span {
          width: 600px;
        }

        span h4 {
          margin: 1em 0;
          font-style: italic;
        }
        h4,
        p {
          margin: 0;
          color: #1c1c1c;
        }
        h3 {
          width: 70%;
          font-size: 2em;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);
        }
        p {
          width: 70%;
        }
        h5 {
          color: grey;
        }

        // ===================================================================
        @media (max-width: 1199px) {
          .left {
            display: flex;
            justify-content: flex-start;
            padding: 0 1em;
          }
          span {
            width: 100vw;
            padding: 0 1em;
          }
        }
        @media (max-width: 620px) {
          .left {
            min-width: 100vw;
          }
          span {
            width: 100vw;
          }
          h3 {
            width: 100vw;
          }
        }
        @media (max-width: 440px) {
          .left {
            min-width: unset;
            width: 100%;
            padding-left: 0;
          }
          span {
            min-width: unset;
            width: 100%;
            padding: 0;
          }
          h3 {
            min-width: unset;
            width: 100%;
          }
          p {
            width: 100%;
          }
        }
        @media (max-width: 334px) {
          h3 {
            width: 100%;
          }
        }
      `}
    </style>
  </div>
);

Left.propTypes = {
  service: PropTypes.object.isRequired,
  children: PropTypes.any
};

Left.defaultProps = {
  children: ''
};

export default Left;
