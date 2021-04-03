import { useSelector } from 'react-redux';
import { useState } from 'react';

import Layout from '../../layout';
import YouChoose from '../../components/you-choose';
import Checkbox from '../../components/Checkbox';

import { getLanguage } from './lang';

const fades = ['fade-left', 'fade-down', 'fade-right'];

const CardsPrices = () => {
  const language = getLanguage(useSelector(store => store.language));
  const [checkboxes, setCheckboxes] = useState([
    {
      text: language.webDevelopment,
      defaultChecked: true,
      blocked: true,
      initialPrice: 100,
      monthlyPrice: 0
    },
    {
      text: language.loginRegister,
      description: language.descriptions.loginRegister,
      defaultChecked: false,
      blocked: false,
      initialPrice: 40,
      monthlyPrice: 3
    },
    {
      text: language.animations,
      defaultChecked: false,
      blocked: false,
      initialPrice: 10,
      monthlyPrice: 0
    },
    {
      text: language.chatbot,
      defaultChecked: false,
      blocked: false,
      initialPrice: 3,
      monthlyPrice: 5
    },
    {
      text: language.contentManager,
      defaultChecked: false,
      blocked: false,
      initialPrice: 3,
      monthlyPrice: 4
    },
    {
      text: language.emailSending,
      defaultChecked: false,
      blocked: false,
      initialPrice: 1,
      monthlyPrice: 1
    },
    {
      text: language.domainName,
      defaultChecked: false,
      blocked: false,
      initialPrice: 10,
      monthlyPrice: 1
    },
    {
      text: language.hosting,
      defaultChecked: false,
      blocked: false,
      initialPrice: 1,
      monthlyPrice: 1
    },
    {
      text: language.seo,
      defaultChecked: false,
      blocked: false,
      initialPrice: 10,
      monthlyPrice: 0
    },
    {
      text: language.payments,
      description: language.descriptions.payments,
      defaultChecked: false,
      blocked: false,
      initialPrice: 45,
      monthlyPrice: 3
    }
  ]);
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
    <Layout>
      <YouChoose />
      {checkboxes.map((checkbox, i) => {
        const checked = checkedCheckboxes.includes(i);

        return (
          <div key={i}>
            <Checkbox
              key={i}
              text={`${checkbox.text}: ${checkbox.initialPrice} USD${
                checkbox.monthlyPrice ? ` + ${checkbox.monthlyPrice} USD ${language.perMonth}` : ''
              }`}
              blocked={checkbox.blocked}
              defaultChecked={checkbox.defaultChecked}
              onChange={_checked => handleChangePrice(i, _checked)}
            />
            {checked && <p className="description">{checkbox.description}</p>}
          </div>
        );
      })}
      <h3 className="totalPrice">
        {language.totalPrice}: {initialPrice} USD
        {monthlyPrice ? ` + ${monthlyPrice} USD ${language.perMonth}` : ''}
      </h3>

      {/* <ul className="box">
        {language.prices.map(({ type, quality, price, options }, id) => (
          <li key={id} className="card" data-aos={fades[id % fades.length]}>
            <div className="mid">
              <h4> {quality} </h4>
              <h2>{price} </h2>
            </div>
            <h5>Type: {type}</h5>
            <div className="items">
              {options.map((option, i) => (
                <label key={i} htmlFor="first-name">
                  <input type="checkbox" name="fieldName" className="input" defaultChecked />
                  <p>{option}</p>
                </label>
              ))}
            </div>
            <div className="bottom">
              <button>click</button>
            </div>
          </li>
        ))}
      </ul> */}
      <style jsx>
        {`
          .box {
            width: 100vw;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }
          .card {
            width: 18em;
            height: 32em;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-flow: column;
            flex-flow: column;
            border-radius: 1em;
            background: white;
            margin: 1em;
            border: 4px solid #2f4858;
            padding: 1em;
            box-shadow: 0.3em 0.3em 1em silver;
          }
          .card:hover {
            border: 5px solid #ffb52a;
            box-shadow: 0px 3px 9px grey;
          }
          .top {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            width: 100%;
            height: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-flow: column;
            flex-flow: column;
          }

          .top h6 {
            border: 2px solid #ffb52a;
            padding: 0 0.5em;
            border-radius: 0.5em;
            overflow-y: hidden;
          }
          // ============================================
          .mid {
            -webkit-box-flex: 3;
            -ms-flex: 3;
            flex: 3;
            width: 100%;
            height: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-flow: column;
            flex-flow: column;
          }

          .mid h5 {
            font-size: 1.5em;
          }

          .mid h2 {
            font-size: 3em;
            text-transform: uppercase;
            font-weight: bold;
            color: black;
          }

          .items {
            -webkit-box-flex: 5;
            -ms-flex: 5;
            flex: 5;
            width: 100%;
            height: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-flow: column;
            flex-flow: column;
            border-radius: 1em;
            border: 1px solid silver;
            padding: 3px;
          }
          .items label {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            overflow-y: hidden;
          }
          .items .input {
            flex: 1;
          }

          p {
            flex: 9;
          }
          // ==========================================
          .bottom {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            width: 100%;
            height: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-flow: column;
            flex-flow: column;
          }

          .bottom button {
            background: #ffb52a;
            outline: none;
            border: none;
            border-radius: 0.5em;
            width: 50%;
            padding: 0.5em 0;
            color: black;
            text-transform: uppercase;
            font-weight: bold;
          }
          .bottom button:hover {
            background: #ffb52a;
            color: white;
            text-transform: uppercase;
            font-weight: bold;
            box-shadow: 0px 3px 9px #ffb52a;
          }
          .totalPrice {
            margin: 14px;
          }
          .description {
            max-width: 500px;
            margin: 14px;
          }
        `}
      </style>
    </Layout>
  );
};

export default CardsPrices;
