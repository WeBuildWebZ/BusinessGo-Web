import { QUARTERS } from './constants';

const Quarters = () => (
  <div className="quartersContainer">
    {QUARTERS.map(quarter => (
      <div key={quarter.name} className="quarter">
        <h1>{quarter.title}</h1>
        <ul>
          {quarter.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
    <style jsx>
      {`
        .quartersContainer {
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
        }
        .quarter {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
        }
      `}
    </style>
  </div>
);

export default Quarters;
