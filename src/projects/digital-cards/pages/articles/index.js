import ArticleList from '../../components/ArticleList';
import Layout from '../layout';

const Blog = () => (
  <Layout>
    <div className="blog">
      <h3 className="title">Aquí encontrarás nuestros artículos más recientes!</h3>
      <ArticleList />
      <style jsx>
        {`
          .blog {
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
  </Layout>
);

export default Blog;
