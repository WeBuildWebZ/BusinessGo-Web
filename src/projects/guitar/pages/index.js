import { useEffect, useRef, useState } from 'react';

const keyboardControls = {
  Q: 'green',
  W: 'red',
  E: 'yellow',
  R: 'blue',
  T: 'orange'
};

const guitarControls = {
  5: 'green',
  1: 'red',
  0: 'yellow',
  2: 'blue',
  3: 'orange'
};

const Guitar = () => {
  const [selectedButtons, setSelectedButtons] = useState({});
  const selectedButtonsRef = useRef();
  selectedButtonsRef.current = selectedButtons;
  const selectedClasses = {
    green: selectedButtons.green ? ' selected' : '',
    red: selectedButtons.red ? ' selected' : '',
    yellow: selectedButtons.yellow ? ' selected' : '',
    blue: selectedButtons.blue ? ' selected' : '',
    orange: selectedButtons.orange ? ' selected' : ''
  };

  useEffect(() => {
    const handleKeyDown = event => {
      const control = keyboardControls[event.key.toUpperCase()];
      if (!control) return;
      setSelectedButtons({
        ...selectedButtonsRef.current,
        [control]: true
      });
    };
    const handleKeyUp = event => {
      const control = keyboardControls[event.key.toUpperCase()];
      if (!control) return;
      setSelectedButtons({
        ...selectedButtonsRef.current,
        [control]: false
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const readValues = () => {
      const gamepads = navigator.getGamepads();
      Object.keys(gamepads).forEach(index => {
        const gamepad = gamepads[index];

        if (!gamepad) return;

        const { buttons } = gamepad;
        buttons.forEach((button, buttonIndex) => {
          const control = guitarControls[buttonIndex];
          if (button.pressed) console.log('pressed', buttonIndex, control);
          if (!control) return;
          if (button.pressed && !selectedButtonsRef.current[control]) {
            setSelectedButtons({
              ...selectedButtonsRef.current,
              [control]: true
            });
          } else if (!button.pressed && selectedButtonsRef.current[control]) {
            setSelectedButtons({
              ...selectedButtonsRef.current,
              [control]: false
            });
          }
        });
      });
      window.requestAnimationFrame(readValues);
    };
    readValues();
  }, []);

  return (
    <div className="page">
      <div className="lines">
        <div className={`line${selectedClasses.green}`} />
        <div className={`line${selectedClasses.red}`} />
        <div className={`line${selectedClasses.yellow}`} />
        <div className={`line${selectedClasses.blue}`} />
        <div className={`line${selectedClasses.orange}`} />
      </div>
      <div className="track">
        <div className={`button green${selectedClasses.green}`}>Q</div>
        <div className={`button red${selectedClasses.red}`}>W</div>
        <div className={`button yellow${selectedClasses.yellow}`}>E</div>
        <div className={`button blue${selectedClasses.blue}`}>R</div>
        <div className={`button orange${selectedClasses.orange}`}>T</div>
      </div>
      <style jsx>
        {`
          .page {
            position: relative;
            width: 100%;
            height: 100%;
            background-image: url(/images/background.jpeg);
            background-size: cover;
            color: whitesmoke;
          }
          .track {
            position: absolute;
            transform: translate(-50%, -100%);
            left: 50%;
            top: 100%;
            width: fit-content;
            height: fit-content;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            overflow: visible;
          }
          .lines {
            position: absolute;
            transform: translate(-50%);
            left: 50%;
            top: 0;
            width: 450px;
            height: calc(100% - 50px);
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .line {
            background-color: rgba(245, 245, 245, 0.66);
            width: 10px;
            height: 100%;
            border-radius: 7px;
            transition: 0.1s;
          }
          .line.selected {
            background-color: whitesmoke;
            box-shadow: 0 2px 2px whitesmoke;
          }
          .button {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 70px;
            height: 40px;
            margin: 10px;
            border-radius: 50px;
            border-style: solid;
            transition: 0.1s;
            text-align: center;
            font-size: 18px;
          }
          .button.selected {
            transform: scale(1.15);
            font-size: 26px;
            text-shadow: 0 0 2px whitesmoke;
          }
          .button.green {
            background-color: rgba(102, 201, 22, 0.5);
            border-color: rgba(102, 201, 22, 0.5);
          }
          .button.green.selected {
            background-color: rgb(102, 201, 22);
            border-color: rgb(102, 201, 22);
            box-shadow: 0 0 2px 2px rgb(102, 201, 22);
          }
          .button.red {
            background-color: rgba(201, 22, 22, 0.5);
            border-color: rgba(201, 22, 22, 0.5);
          }
          .button.red.selected {
            background-color: rgb(201, 22, 22);
            border-color: rgb(201, 22, 22);
            box-shadow: 0 0 2px 2px rgb(201, 22, 22);
          }
          .button.yellow {
            background-color: rgba(201, 171, 22, 0.5);
            border-color: rgba(201, 171, 22, 0.5);
          }
          .button.yellow.selected {
            background-color: rgb(201, 171, 22);
            border-color: rgb(201, 171, 22);
            box-shadow: 0 0 2px 2px rgb(201, 171, 22);
          }
          .button.blue {
            background-color: rgba(22, 70, 201, 0.5);
            border-color: rgba(22, 70, 201, 0.5);
          }
          .button.blue.selected {
            background-color: rgb(22, 70, 201);
            border-color: rgb(22, 70, 201);
            box-shadow: 0 0 2px 2px rgb(22, 70, 201);
          }
          .button.orange {
            background-color: rgba(201, 120, 22, 0.5);
            border-color: rgba(201, 120, 22, 0.5);
          }
          .button.orange.selected {
            background-color: rgb(201, 120, 22);
            border-color: rgb(201, 120, 22);
            box-shadow: 0 0 2px 2px rgb(201, 120, 22);
          }
        `}
      </style>
    </div>
  );
};

export default Guitar;
