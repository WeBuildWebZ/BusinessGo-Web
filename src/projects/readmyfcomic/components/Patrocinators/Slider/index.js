import { useState } from 'react';

import Options from './Options';

const Patrocinators = () => {
  const [option, setOption] = useState(0);

  return (
    <div className="sliderContainer">
      <div className="slider" />
      <Options length={10} option={option} onChange={setOption} />
      <style jsx>
        {`
          .sliderContainer {
          }
          .slider {
            width: 100%;
            height: 220px;
            border-radius: 7px;
            border-style: solid;
            border-width: 2px;
            background-color: #dcb3e1;
          }
          @media only screen and (max-width: 768px) {
            .sliderContainer {
              width: 75%;
              margin-left: 10%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Patrocinators;
