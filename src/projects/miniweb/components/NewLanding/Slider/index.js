const Slider = () => (
  <div className="slider">
    <img className="rightPhone" src={globalThis.getAssetUrl('images/slider/right_phone.png')} />
    <img className="leftPhone" src={globalThis.getAssetUrl('images/slider/left_phone.png')} />
    <img src={globalThis.getAssetUrl('images/slider/center_phone.png')} />
    <img src={globalThis.getAssetUrl('images/slider/character.png')} />
    <img src={globalThis.getAssetUrl('images/slider/button.png')} />
    <style jsx>
      {`
        .slider {
          margin-top: 50px;
        }
        img {
          position: absolute;
          transform: translate(-50%);
        }
        .rightPhone {
          transform: translate(0);
        }
        .leftPhone {
          transform: translate(-100%);
        }
      `}
    </style>
  </div>
);

export default Slider;
