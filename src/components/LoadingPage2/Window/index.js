import useDimensions from '../../../shared/hooks/useDimensions';

import Navbar from './Navbar';
import Circles from './Circles';
import LoadingText from './LoadingText';

const Window = () => {
  const dimensions = useDimensions();
  const size = Math.min(dimensions.width, dimensions.height) * 0.7;
  const diagonalSize = (size ** 2 * 2) ** 0.5;

  return (
    <>
      <div className="shadow" />
      <div className="window">
        <Navbar />
        <Circles />
        <LoadingText />
      </div>
      <style jsx>
        {`
          .window {
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
            width: ${size}px;
            height: ${size}px;
            border-radius: 10px;
            background-color: whitesmoke;
            animation: linear 0.5s windowAppear;
            transition: 0.7s;
          }
          .window:hover {
            transform: translate(-50%, -50%) scale(1.1);
            box-shadow: 0 0 2px 2px whitesmoke;
          }
          .window:active {
            transition: 0.4s;
            transform: translate(-50%, -50%) scale(1.15) rotate(2deg);
            box-shadow: 0 0 3px 3px whitesmoke;
          }
          .shadow {
            position: absolute;
            left: calc(50% - ${size / 2}px);
            top: calc(50% + ${size / 2}px);
            transform: rotate(-45deg) translate(4px);
            transform-origin: 0 0;
            background-color: rgba(128, 128, 128, 0.3);
            box-shadow: 0 0 5px 5px rgba(128, 128, 128, 0.3);
            width: ${diagonalSize - 9}px;
            height: 500%;
            animation: linear 5s shadowAppear;
          }
          @keyframes windowAppear {
            0% {
              width: 0;
              height: 0;
              border-radius: 50px;
            }
            85% {
              width: ${size * 0.8}px;
              height: ${size * 0.8}px;
            }
          }
          @keyframes shadowAppear {
            0% {
              height: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default Window;
