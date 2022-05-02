import Link from 'next/link';

import Card from '../card';
import Title from '../title';

import { QUARTERS } from './constants';

const Quarters = () => {
  const limite_to3 = QUARTERS.slice(0, 3);

  return (
    <div className="quartersContainer" id="quarters">
      <Title title="Quarters" />
      {limite_to3.map(item => (
        <Card key={item} text={item} />
      ))}
      <Link href="quarters">
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path
              className="arrow_next"
              d="M15.2 43.9 12.4 41.05 29.55 23.9 12.4 6.75 15.2 3.9 35.2 23.9Z"
              fill="white"
            />
          </svg>
        </a>
      </Link>
      <style jsx>
        {`
          .quartersContainer {
            width: 100vw;
            min-height: 50vw;
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
          .arrow_next {
            fill: white;
            cursor: pointer;
          }
          .arrow_next:hover {
            fill: #f5b723;
          }
        `}
      </style>
    </div>
  );
};

export default Quarters;
