import Link from 'next/link';
import ReactStars from 'react-rating-stars-component';
import Image from 'next/image';

import Menu from '../components/1-menu/index';
import { Cards } from '../data/galery';

const data = Cards;

export default function player({ title, desc, image, alt, price, rank }) {
  return (
    <div className="container">
      <div className="top">
        <Menu />
      </div>
      <div className="card-container">
        <div className="card">
          <Image src={image} alt="Picture of the author" width={500} height={350} />
          <ReactStars value={rank} size={24} activeColor="#ffd700" edit={false} isHalf />
          <h2>{title}</h2>
          <p>{desc}</p>
          <h4>{price}</h4>
        </div>
      </div>

      <style jsx>
        {`
          .container {
            width: 100vw;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            paddding: 1em;
          }
          //   =========================================================================
          .top {
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          //   ==========================================================================
          .card-container {
            width: 100vw;
            min-height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: yellow;
          }

          .card {
            width: 600px;
            min-height: 600px;
            background: white;
            border-radius: 1em;
            padding: 0.5em;
            margin: 1em;
          }
          a {
            color: #c83e59;
          }
          img {
            width: 100%;
            height: 270px;
            object-fit: cover;
            border-radius: 0.5em 0.5em 0 0;
          }
          h2 {
            margin: 0.5em 0;
            color: #c83e59;
          }
          p {
            font-style: italic;
            margin-bottom: 0.5em;
          }
        `}
      </style>
    </div>
  );
}
// export async function getServerSideProps({ params }) {
//   const res = await fetch(`https://joze-app.herokuapp.com/players/${params.id}`);
//   const player = await res.json();

//   return {
//     props: {
//       player
//     }
//   };
// }
