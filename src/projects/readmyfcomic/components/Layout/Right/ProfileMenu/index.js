import Links from './Links';

const ProfileMenu = () => (
  <div className="profileMenu">
    <img className="picture" src="/images/empty_profile.png" />
    <Links />
    <style jsx>
      {`
        .profileMenu {
          float: right;
          border-style: solid;
          border-width: 1px;
          background-color: #ffcfb5;
        }
        .picture {
          margin: 14px;
          max-width: 40px;
          max-height: 40px;
        }
      `}
    </style>
  </div>
);

export default ProfileMenu;
