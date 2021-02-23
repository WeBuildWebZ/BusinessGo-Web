import Layout from '../layout';

const Blog = () => (
  <Layout>
    <div className="blog">
      <h3>blog</h3>
      <style jsx>
        {`
          .blog {
            width: 100vw;
            height: 100vh;
          }
        `}
      </style>
    </div>
  </Layout>
);

export default Blog;
