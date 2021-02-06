import { useSelector } from 'react-redux';

import { getLanguage } from './lang';

const Frase = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <article className="text" data-aos="fade-left">
      <div className="frase">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="quote-left"
          className="svg-inline--fa fa-quote-left fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
          />
        </svg>

        {language.phrases.map((phrase, i) => (
          <h4 key={i} data-aos="fade-right" data-aos-duration={400 + 200 * i}>
            {phrase}
          </h4>
        ))}
        <br />
        <h6>- WeBuildWebz</h6>
      </div>

      <style jsx>
        {`
          .text {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #ebebeb;
          }
          .frase {
            width: 500px;
            height: 400px;
            border-radius: 1em;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-flow: column;
            padding: 1em;
            background: white;
            box-shadow: 0.3em 0.3em 0.5em silver;
          }
          .fa-quote-left {
            width: 50px;
            height: 50px;
            color: #1c1c1c;
            margin-bottom: 1em;
          }
          h4 {
            color: silver;
            background: #1c1c1c;
            font-style: italic;
            padding: 0 0.5em;
          }
          h6 {
            width: 100%;
            text-align: center;
            font-weight: bold;
          }
          @media (max-width: 528px) {
            .text {
              padding: 1em;
            }
            .frase {
              width: 100%;
              height: 100%;
              border-radius: 1em;
            }
            h4 {
              padding: 8px 0;
            }
          }
        `}
      </style>
    </article>
  );
};

export default Frase;
