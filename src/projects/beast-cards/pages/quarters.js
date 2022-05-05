import Link from 'next/link';
import React from 'react';

import { QUARTERS } from '../components/Quarters/constants';

const QuartersPage = () => (
  <div className="container">
    <Link href="/">
      <a>
        <span className="row">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M20 44 0 24 20 4 22.8 6.85 5.65 24 22.8 41.15Z" className="arrow_back" />
          </svg>
          <h1>Back</h1>
        </span>
      </a>
    </Link>
    <br />
    <br />
    {QUARTERS.map((item, i) => (
      <div className="box" key={i}>
        <p>{item.title}</p>
      </div>
    ))}
    <style jsx>
      {`
        .container {
          min-width: 100vw;
          min-height: 100vh;
          display: flex;
          flex-flow: column;
          padding: 2em 0 0 3em;
        }
        .row {
          min-width: 100vw;
          display: flex;
          align-items: center;
        }
        .row h1 {
          margin: 0;
          padding: 0;
        }
        .arrow_back {
          fill: white;
          cursor: pointer;
        }
        .arrow_back:hover,
        h1:hover {
          fill: #f5b723;
          color: #f5b723;
        }
        h1 {
          color: white;
        }
        // ----------------------------------------
        .box {
          color: white;
          border-radius: 7px;
          border: 2px solid silver;
          width: 1200px;
          height: 700px;
          margin-bottom: 3em;
        }
      `}
    </style>
  </div>
);

export default QuartersPage;
