import ProfileMenu from './ProfileMenu';
import SocialNetworks from './SocialNetworks';

const Right = () => (
  <div className="right">
    <ProfileMenu />
    <SocialNetworks />
    <style jsx>
      {`
        .right {
          display: flex;
          flex-direction: column;
          float: right;
        }
      `}
    </style>
  </div>
);

export default Right;
