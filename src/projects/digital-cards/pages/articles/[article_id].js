import Layout from '../layout';

const Blog = () => (
  <Layout>
    <div className="blog">
      <h3 className="title">Acá va a estar el artículo seleccionado</h3>
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
        `}
      </style>
    </div>
  </Layout>
);

export default Blog;
