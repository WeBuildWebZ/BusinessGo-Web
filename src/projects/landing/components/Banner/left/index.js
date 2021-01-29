import PropTypes from 'prop-types';

const Left = props => (
  <div className="left">
    <span className="top" />
    <span className="down">
      <h5 className="title">{props.banner.title}</h5>
      <span>
        <button className="seeButton" onClick={props.onClickSee}>
          {props.banner.button}
        </button>
        <h6>{props.banner.description}</h6>
      </span>
    </span>

    <style jsx>
      {`
        .left {
          flex: 3;
          width: 100%;
          height: 100%;
          display: flex;
          flex-flow: column;
        }
        .top,
        .down {
          flex: 1;
          width: 100%;
          height: 100%;
        }
        .top {
          background-image: linear-gradient(to top, hsla(0, 0%, 100%, 1), hsla(0, 0%, 100%, 0.1)),
            url(${props.banner.image});
          background-size: cover;
          background-position: 0 0;
          background-repeat: no-repeat;
          border-radius: 1em;
        }
        // ================================
        .down {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
        }
        .title {
          font-size: 2.5em;
          flex: 1;
          margin-top: 1.3em;
          overflow-y: hidden;
        }
        .down span {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .seeButton {
          padding: 0.3em 3.5em;
          margin-right: 1em;
          outline: none;
          border: none;
          background: #1c1c1c;
          color: white;
          border-radius: 0.3em;
          transition: all 0.2s ease-in-out;
        }
        .seeButton:hover {
          transform: scale(1.1);
          border-radius: 0;
        }
        h6 {
          padding-top: 7px;
        }
      `}
    </style>
  </div>
);

Left.propTypes = {
  banner: PropTypes.object.isRequired,
  onClickSee: PropTypes.func
};

Left.defaultProps = {
  onClickSee: () => {}
};

export default Left;
