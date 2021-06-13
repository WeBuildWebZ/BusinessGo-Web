import Layout from '../../components/NewLanding/Layout';
import PageTitle from '../../components/NewLanding/PageTitle';
import Slider from '../../components/NewLanding/Slider';

const NewLanding = () => (
  <Layout>
    <div className="section">
      <PageTitle />
      <Slider />
    </div>
    <style jsx>
      {`
        .section {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100vh;
          background-color: #281c5c;
          overflow-x: hidden;
        }
      `}
    </style>
  </Layout>
);

export default NewLanding;
