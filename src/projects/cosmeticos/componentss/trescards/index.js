import { useSelector } from 'react-redux';

import Spinner from '../../../../components/Spinner';

const TresCards = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="cardContainer">
      {!project && <Spinner />}
      {project?.configuration.footer.cards.map(card => (
        <div className="card">
          <h4 className="cardText">{card.value}</h4>
        </div>
      ))}

      <style jsx>
        {`
          .cardContainer {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: flex-end;
            position: relative;
            width: 100vw;
            height: fit-content;
            min-height: 50vh;
            background-image: url(/images/card1.jpg);
            margin: 2em 0;
          }

          .card {
            transform: translate(0, 50%);
            width: 260px;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 5px;
            padding: 1em;
            border-radius: 1em;
            background: hsla(0, 0%, 0%, 0.9);
            color: white;
            transition: 0.7s;
          }
          .card:hover {
            border: 4px solid white;
          }
          .cardText {
            height: 100%;
            text-align: center;
            transition: 0.7s;
            user-select: none;
          }
          .cardText:hover {
            text-shadow: 2px 2px 2px white;
          }

          @media only screen and (max-width: 768px) {
            .card {
              width: 130px;
              height: 60px;
            }
            .cardText {
              font-size: 16px;
            }
          }
        `}
      </style>
    </div>
  );
};
export default TresCards;
