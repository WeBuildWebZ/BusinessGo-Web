import React from 'react';

const priceStyle = { color: 'green' };

export const getBasePrice = lang => (unique, monthly, currency) => (
  <div>
    {lang.basePrice}
    &nbsp;:
    <b style={priceStyle}>
      &nbsp;$&nbsp;
      {unique}
      &nbsp;
      {currency}
    </b>
    &nbsp;
    {lang.unique}
    &nbsp;,
    <b style={priceStyle}>
      &nbsp;$&nbsp;
      {monthly}
      &nbsp;
      {currency}
    </b>
    &nbsp;
    {lang.monthly}
  </div>
);

const Component = () => <></>;

export default Component;
