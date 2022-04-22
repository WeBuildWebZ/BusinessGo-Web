import HomeVideo from '../components/HomeVideo';
import Welcome from '../components/Welcome';

const HomePage = () => (
  <div>
    <HomeVideo />
    <div className="moreZIndex">
      <Welcome />
      <style jsx>
        {`
          .moreZIndex {
            z-index: 222;
          }
        `}
      </style>
    </div>
  </div>
);

export default HomePage;
