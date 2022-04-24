import Card from '../card';
import Title from '../title';

import { QUARTERS } from './constants';

const Quarters = () => (
  <div className="quartersContainer">
    <Title title="Quarters" />
    {QUARTERS.map(item => (
      <Card key={item} text={item} />
    ))}
    <style jsx>
      {`
        .quartersContainer {
          width: 100vw;
          // height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          padding: 3em 0;
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
