import Menu from '../components/1-menu';
import Banner from '../components/2-banner';
import EmptyComponent from '../components/EmptyComponent';

const Empty = () => (
  <div className="home_container">
    <Menu />
    <Banner />
    <Banner />
    <Banner />
    <style jsx>
      {`
        .home_container {
          width: 100vw;
          min-height: 100vh;
          // background: hsla(0, 0%, 0%, 0.7);
          display: flex;
          flex-flow: column;
        }
      `}
    </style>
  </div>
);

export default Empty;
