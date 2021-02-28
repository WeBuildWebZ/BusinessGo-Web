import Windows from './Windows';

const NewCard = () => (
  <div className="newCard">
    <Windows />
    <style jsx>
      {`
        .newCard {
          display: flex;
          flex-direction: row;
        }
      `}
    </style>
  </div>
);

export default NewCard;
