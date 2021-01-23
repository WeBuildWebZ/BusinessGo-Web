import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SwiperCore, { EffectFade, Navigation } from 'swiper';
import Link from 'next/link';

import Spinner from '../../../components/Spinner';
import { getClientDocuments } from '../../../services/api/clientDocument';

SwiperCore.use([EffectFade, Navigation]);

const Galeria = () => {
  const project = useSelector(store => store.project);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getClientDocuments('bob-posts', 3, 1).then(({ data: givenPosts }) => {
      setPosts(givenPosts);
    });
  }, []);

  return (
    <section className="galeria">
      <Link href="/">
        <button className="inicio">Volver a Inicio</button>
      </Link>
      {!project && <Spinner />}
      {project && <h2>{project.configuration.gallery.title}</h2>}

      <div className="cards">
        {posts &&
          posts.map((post, i) => (
            <div key={i}>
              <img key={post.title} title={post.title} src={post.photo} className="card" />
              <h4>{post.title}</h4>
              <p>{post.description}</p>
            </div>
          ))}
      </div>

      <style jsx>
        {`
          .galeria {
            width: 100vw;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
          }

          .inicio {
            width: 100vw;
            height: 10vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: white;
          }
          h2 {
            font-size: 2em;
          }
          h4 {
            font-size: 2em;
          }
          p {
            font-size: 1.5em;
            margin-bottom: 3em;
          }

          .cards {
            width: 100vw;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            overflow-y: hidden;
          }

          .card {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 1em;
            margin: 5px;
          }
        `}
      </style>
    </section>
  );
};

export default Galeria;
