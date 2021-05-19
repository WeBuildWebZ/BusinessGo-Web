import { cardPropTypes } from '../../constants';

const Presentation = props => {
  const { card } = props;

  return (
    <div className="presentation">
      <h3>{card.title}</h3>
      <p className="description">{card.description}</p>
      <style jsx>
        {`
          .presentation {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100vw;
            height: 50vh;
            padding-top: 25px;
            background-color: ${card.border_color};
          }
          .description {
            max-width: 75%;
            font-size: 14px;
            text-align: center;
            line-height: 15px;
          }
        `}
      </style>
    </div>
  );
};

Presentation.propTypes = cardPropTypes;

export default Presentation;
