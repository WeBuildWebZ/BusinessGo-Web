import Link from 'next/link';

import Layout from '../layout';

import Card1 from './free/card1';

// const images = [
//   {
//     id: 1,
//     image:
//       'https://firebasestorage.googleapis.com/v0/b/sql-demos-3f601.appspot.com/o/image.jpg?alt=media&token=0ee2a779-1a7d-4a2f-9365-ee2aecc05aeb'
//   },
//   {
//     id: 2,
//     image:
//       'https://firebasestorage.googleapis.com/v0/b/sql-demos-3f601.appspot.com/o/zanle-group-portada.jpg?alt=media&token=329e26d9-d08b-454a-a181-669e6cc61f13'
//   },
//   {
//     id: 3,
//     image:
//       'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-jose-rios-netlify.jpg?alt=media&token=e04a90c5-4dde-47cc-9179-a46f17c6f25b'
//   },
//   {
//     id: 4,
//     url: 'https://www.muebles.dancotll.com/',
//     image:
//       'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-horacio-muebles.jpg?alt=media&token=4ca6934f-b088-49a0-9a9a-723bb05b1db5'
//   },
//   {
//     id: 5,
//     image:
//       'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-wow.jpg?alt=media&token=3d21ef80-bd3f-4cc6-9b8b-1d54bfc6897c'
//   },
//   {
//     id: 6,
//     url: 'https://www.muebles.dancotll.com/',
//     image:
//       'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-horacio-muebles.jpg?alt=media&token=4ca6934f-b088-49a0-9a9a-723bb05b1db5'
//   },
//   {
//     id: 7,
//     image:
//       'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-wow.jpg?alt=media&token=3d21ef80-bd3f-4cc6-9b8b-1d54bfc6897c'
//   },
//   {
//     id: 8,
//     image:
//       'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-wow.jpg?alt=media&token=3d21ef80-bd3f-4cc6-9b8b-1d54bfc6897c'
//   },
//   {
//     id: 9,
//     image:
//       'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-wow.jpg?alt=media&token=3d21ef80-bd3f-4cc6-9b8b-1d54bfc6897c'
//   },
//   {
//     id: 10,
//     image:
//       'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-wow.jpg?alt=media&token=3d21ef80-bd3f-4cc6-9b8b-1d54bfc6897c'
//   }
// ];

const Templates = () => (
  <Layout>
    <div className="galery">
      <h2>title</h2>
      <p>subtitle</p>
      <Card1 />
      {/*
      {images.map(({ image, id }) => (
        <li className="card" key={id}>
          <div className="top">
            <img src={image} />
          </div>

          <div className="bottom">
            <div>visit</div>
          </div>
        </li>
      ))} */}

      <style jsx>
        {`
          .galery {
            width: 100vw;
            height: 100vh;
            padding: 1em;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
          }
          h2 {
            width: 100%;
            text-align: center;
          }
          p {
            width: 100%;
            text-align: center;
            font-style: italic;
          }

          // ===========================================================================
          .card {
            width: 300px;
            height: 400px;
            border: 0.2em solid #ebebeb;
            border-radius: 1em;
            padding: 0.5em;
            margin: 0.5em;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
          }
          .card:hover {
            border: 0.2em solid #1c1c1c;
          }

          // ======================================================================================
          .top {
            flex: 9;
            width: 100%;
            height: 100%;
            overflow-y: hidden;
            padding: 0 0 0.5em 0;
          }
          img {
            width: 100%;
            height: 100%;
            border-radius: 0.5em;
            object-fit: cover;
          }

          // =======================================================================================
          .bottom {
            flex: 1;
            width: 100%;
            height: 100%;
            background: #f8ac30;
            border-radius: 0.5em;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          a {
            color: black;
          }
          a:hover {
            color: white;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  </Layout>
);
export default Templates;
