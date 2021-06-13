const Slider = () => (
  <div className="slider">
    <img className="dots" src={globalThis.getAssetUrl('images/slider/dots.png')} />
    <img className="rightPhone" src={globalThis.getAssetUrl('images/slider/right_phone.png')} />
    <img className="leftPhone" src={globalThis.getAssetUrl('images/slider/left_phone.png')} />
    <img src={globalThis.getAssetUrl('images/slider/center_phone.png')} />
    <img src={globalThis.getAssetUrl('images/slider/character.png')} />
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
      `}
    </style>
  </div>
);

export default Slider;
