import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { LinearProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./style";
import getLanguage from "./lang";

const getRandomInt = (maxValue) => Math.floor(Math.random() * maxValue);

const getRandomStyle = () => {
  const size = getRandomInt(100);
  return {
    position: "absolute",
    left: `${getRandomInt(60)}%`,
    top: `${getRandomInt(60)}%`,
    width: size,
    height: size,
    backgroundColor: `rgb(${getRandomInt(255)}, ${getRandomInt(
      255
    )}, ${getRandomInt(255)})`,
  };
};

const getRandomStyles = (n) =>
  Array(n)
    .fill(null)
    .map(() => getRandomStyle());

export default function LoadingPage() {
  const classes = useStyles();
  const language = getLanguage(useSelector((store) => store)().language);
  const [spinnerStyles, setSpinnerStyles] = useState(getRandomStyles(10));

  const changeStyle = () => setSpinnerStyles(getRandomStyles(10));

  return (
    <div className={classes.background}>
      <LinearProgress className={classes.spinner} />

      {spinnerStyles.map((spinnerStyle, i) => (
        <Spinner
          key={i}
          animation="grow"
          style={spinnerStyle}
          onAnimationIteration={i === 0 ? changeStyle : undefined}
        />
      ))}
      <h1>{language.message}</h1>
    </div>
  );
}
