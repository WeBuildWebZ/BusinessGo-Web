import PropTypes from 'prop-types';

const Left = props => (
  <div className="left">
    <span className="top" />
    <span className="down">
      <h5 className="title">Somos una empresa genial, y nos dedicamos a hacer cosas geniales.</h5>
      <span>
        <button className="seeButton" onClick={props.onClickSee}>
          ver
        </button>
        <h6>Somos una empresa genial, y nos dedicamos a hacer cosas geniales.</h6>
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
            url(/images/left-top.jpg);
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
          border: 1px solid #ebebeb;
          font-size: 2.5em;
          line-height: 40px;
          overflow-y: hidden;
          height: 100%;
        }
        .down span {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .seeButton {
          transform-style: preserve-3d;
          padding: 0.3em 3.5em;
          margin-right: 1em;
          outline: none;
          border: none;
          background: #1c1c1c;
          color: white;
          border-radius: 0.3em;
        }
        .seeButton:hover {
          transform: perspective(100px) rotateX(5deg) rotateY(-15deg);
        }
        h6 {
          padding-top: 7px;
        }
      `}
    </style>
  </div>
);

Left.propTypes = {
  onClickSee: PropTypes.func
};

Left.defaultProps = {
  onClickSee: () => {}
};

export default Left;
