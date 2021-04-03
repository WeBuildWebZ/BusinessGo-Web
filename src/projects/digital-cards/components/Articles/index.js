import ArticleList from '../ArticleList';

const Articles = () => (
  <div className="articles" id="articles">
    <h3 className="title">Aquí encontrarás nuestros artículos más recientes!</h3>
    <ArticleList />
    <style jsx>
      {`
        .articles {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .title {
          color: #c800cd;
        }
        @media only screen and (max-width: 768px) {
          .title {
            margin-top: 50px;
          }
        }
      `}
    </style>
  </div>
);

export default Articles;
