import { useEffect, useRef, useState } from 'react';

import Window from './Window';

const colors = ['skyblue', 'rgb(113, 165, 185)', 'rgb(92, 188, 226)'];

const LoadingPage2 = () => {
  const [color, setColor] = useState(colors[0]);
  const colorRef = useRef();
  colorRef.current = color;

  useEffect(() => {
    const handleChangeColor = () => {
      let newIndex = colors.indexOf(colorRef.current) + 1;
      if (!colors[newIndex]) newIndex = 0;
      setColor(colors[newIndex]);
    };
    const interval = setInterval(handleChangeColor, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loadingPage">
      <Window />
      <style jsx>
        {`
          .loadingPage {
            position: absolute;
            width: 100vw;
            height: 100%;
            background-color: ${color};
            transition: 0.7s;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default LoadingPage2;
