import { useSelector } from 'react-redux';

import { getLanguage } from './lang';

const iconColors = ['#F9EE08', '#FF8CAC', '#00E6FF'];

const ItemsExplicacion = () => {
  const language = getLanguage(useSelector(store => store.language));

  // con este metodo retornamos las 3 primeras posiciones del array,en total son 6
  const primeras3 = language.items.slice(0, 3);

  // con este metodo retornamos las 3 ultimas posiciones del array,en total son 6
  const ultimas3 = language.items.slice(3, 6);

  return (
    <>
      <div className="top">
        <div className="left">
          {primeras3.map(({ image, title, description }, id) => (
            <li className="card" key={id} data-aos="fade-right">
              <span className="icon">
                <img src={image} alt="" />
              </span>

              <span className="text">
                <h3>{title}</h3>
                <p>{description}</p>
              </span>
            </li>
          ))}
        </div>
        <div className="right" data-aos="fade-left">
          <img src="/happy-one.jpg" alt="" className="image" />
        </div>
      </div>

      <div className="bottom">
        <div className="right" data-aos="fade-right">
          <img src="/happy-two.jpg" alt="" className="image" />
        </div>
        <div className="left">
          {ultimas3.map(({ image, title, description }, id) => (
            <li className="card" key={id} data-aos="fade-left">
              <span className="icon">
                <img src={image} alt="" />
              </span>

              <span className="text">
                <h3>{title}</h3>
                <p>{description}</p>
              </span>
            </li>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .top,
          .bottom {
            width: 100vw;
            height: 100vh;
            display: flex;
            background: #ebebeb;
          }
          .left {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            flex: 1;
          }

          .right {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
          }
          .image {
            width: 500px;
            height: 500px;
            border-radius: 1em;
            position: relative;
          }
          // ======================================================================
          .card {
            width: 70%;
            height: 100%;
            display: flex;
            flex-flow: row;
            border-radius: 1em;
            margin: 10px 0;
            padding: 1em;
            box-shadow: 0.3em 0.3em 0.5em grey;
          }

          .icon {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex: 2;
            padding-right: 1em;
          }
          .text {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-flow: column;
            flex: 8;
          }
          img {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          // ======================
          @media (max-width: 1022px) {
            .top,
            .bottom {
              height: 100%;
              flex-flow: column-reverse;
            }
            .card {
              height: 100%;
              padding: 1em;
              box-shadow: 0.3em 0.3em 0.5em silver;
            }
            .left,
            .right {
              width: 100%;
              height: 100%;
            }
          }
          @media (max-width: 754px) {
            .card {
              width: 100%;
              height: 100%;
            }
          }
          @media (max-width: 534px) {
            .card {
              width: 100vw;
              flex-flow: column;
              padding: 0.5em;
            }
            .text {
              width: 100%;
            }
            .image {
              width: 100%;
              border-radius: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default ItemsExplicacion;
