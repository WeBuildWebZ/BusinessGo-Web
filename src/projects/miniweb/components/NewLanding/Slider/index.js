const Slider = () => (
  <div className="slider">
    <img className="dots" src={globalThis.getAssetUrl('images/slider/dots.png')} />
    <img className="rightPhone" src={globalThis.getAssetUrl('images/slider/right_phone.png')} />
    <img className="leftPhone" src={globalThis.getAssetUrl('images/slider/left_phone.png')} />
    <img src={globalThis.getAssetUrl('images/slider/center_phone.png')} />
    <img src={globalThis.getAssetUrl('images/slider/character.png')} />
    <img className="icons" src={globalThis.getAssetUrl('images/slider/icons.png')} />
    <img className="icons" src={globalThis.getAssetUrl('images/slider/icons2.png')} />
    <img className="button" src={globalThis.getAssetUrl('images/slider/button.png')} />
    <style jsx>
      {`
        .slider {
          margin-top: 50px;
        }
        img {
          position: absolute;
          transform: translate(-50%);
        }
        .dots {
          width: 90%;
          transform: translate(calc(-50% - 10px), -10px);
          animation: dotsMovement infinite 4s;
        }
        .icons {
          transform: translate(calc(-50% + 10px), 10px);
          animation: iconsMovement infinite 3.5s;
        }
        .rightPhone {
          transform: translate(0);
        }
        .leftPhone {
          transform: translate(-100%);
        }
        .button {
          transform: translate(calc(-50% - 28px), 430px);
          width: 258px;
        }

        @keyframes dotsMovement {
          0% {
            transform: translate(calc(-50% - 10px), -10px);
          }
          50% {
            transform: translate(calc(-50% + 10px), 10px);
          }
        }

        @keyframes iconsMovement {
          0% {
            transform: translate(calc(-50% + 10px), 10px);
          }
          50% {
            transform: translate(calc(-50% - 10px), -10px);
          }
        }
      `}
    </style>
  </div>
);

export default Slider;
