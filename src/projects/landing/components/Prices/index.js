import { useSelector } from 'react-redux';
import { useState } from 'react';
import Link from 'next/link';

import Layout from '../../layout';
import YouChoose from '../you-choose';
import Checkbox from '../Checkbox';
import { goToLink } from '../../../../utils/html';

import Clarifications from './Clarifications';
import * as constants from './constants';
import { getLanguage } from './lang';

const fades = ['fade-left', 'fade-down', 'fade-right'];
const socialNetworks = [
  {
    link: 'https://api.whatsapp.com/send?phone=5491130696440',
    text: 'WhatsApp',
    image: '/images/whatsapp.png',
    className: 'whatsapp'
  },
  {
    link: 'https://www.facebook.com/LEFCOTT',
    text: 'Facebook',
    image: '/icon/facebook.png',
    className: 'facebook'
  }
];

const Prices = () => {
  const language = getLanguage(useSelector(store => store.language));
  const [checkboxes, setCheckboxes] = useState(constants.checkboxes);
  const [initialPrice, setInitialprice] = useState(
    checkboxes.filter(checkbox => checkbox.defaultChecked).reduce((a, b) => a + b.initialPrice || 0, 0)
  );
  const [monthlyPrice, setMonthlyPrice] = useState(
    checkboxes.filter(checkbox => checkbox.defaultChecked).reduce((a, b) => a + b.monthlyPrice || 0, 0)
  );
  const [checkedCheckboxes, setCheckedCheckboxes] = useState(
    checkboxes.filter(checkbox => checkbox.defaultChecked).map((_, i) => i)
  );

  const handleChangePrice = (index, checked) => {
    const checkbox = checkboxes[index];
    const newInitialPrice = initialPrice + (checked ? checkbox.initialPrice : -checkbox.initialPrice);
    const newMonthlyPrice = monthlyPrice + (checked ? checkbox.monthlyPrice : -checkbox.monthlyPrice);
    setInitialprice(newInitialPrice);
    setMonthlyPrice(newMonthlyPrice);
    setCheckedCheckboxes(
      checked ? [...checkedCheckboxes, index] : checkedCheckboxes.filter(_index => _index !== index)
    );
  };

  return (
    <div className="prices">
      {checkboxes.map((checkbox, i) => {
        const checked = checkedCheckboxes.includes(i);

        return (
          <div key={i}>
            <Checkbox
              key={i}
              text={`${language[checkbox.key]}: ${checkbox.initialPrice} USD${
                checkbox.monthlyPrice ? ` + ${checkbox.monthlyPrice} USD ${language.perMonth}` : ''
              }`}
              blocked={checkbox.blocked}
              defaultChecked={checkbox.defaultChecked}
              onChange={_checked => handleChangePrice(i, _checked)}
            />
            {checked && <p className="description">{language.descriptions[checkbox.key]}</p>}
          </div>
        );
      })}
      <h2 className="totalPrice">
        {language.totalPrice}: {initialPrice} USD
        {monthlyPrice ? ` + ${monthlyPrice} USD ${language.perMonth}` : ''}
      </h2>

      <Clarifications />
      <h3 className="letsTalk">{language.letsTalk}</h3>
      {socialNetworks.map((socialNetwork, i) => (
        <div
          key={i}
          className={`socialNetworkContainer ${socialNetwork.className}`}
          onClick={() => goToLink(socialNetwork.link, 'blank')}
        >
          <img className="socialNetworkImage" src={socialNetwork.image} />
          {socialNetwork.text}
        </div>
      ))}
      <style jsx>
        {`
          .prices {
            margin: 14px;
          }
          .description {
            max-width: 500px;
            margin: 21px;
          }
          .socialNetworkContainer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: fit-content;
            margin: 21px;
            padding: 14px;
            border-radius: 21px;
            cursor: pointer;
            user-select: none;
            transition: 0.7s;
            color: whitesmoke;
          }
          .socialNetworkContainer:hover {
            transform: scale(1.05);
          }

          .socialNetworkContainer:active {
            transform: scale(1.15);
            transition: 0.1s;
          }
          .socialNetworkContainer.whatsapp {
            background-color: #30b404;
          }
          .socialNetworkContainer.facebook {
            background-color: #405c9c;
          }
          .socialNetworkImage {
            width: 22px;
          }
          .link {
            width: fit-content;
          }
        `}
      </style>
    </div>
  );
};

export default Prices;
