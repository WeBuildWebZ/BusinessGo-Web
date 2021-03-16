import { useSelector } from 'react-redux';
import Link from 'next/link';

const ProfileList = () => {
  const totalProfiles = useSelector(store => store.profiles);
  const groupedProfiles = totalProfiles ? [totalProfiles.slice(0, 4), totalProfiles.slice(4)] : null;

  return (
    <div className="profileList">
      {groupedProfiles?.map(profiles => (
        <div className="column">
          {profiles?.map((profile, i) => {
            const link = `/profiles/${encodeURIComponent(profile._id)}`;

            return (
              <div key={i} className="profile">
                <Link href={link}>
                  <a>
                    <img className="image" src={profile.image} />
                  </a>
                </Link>
                <div className="infoContainer">
                  <Link href={link}>
                    <a>
                      <div className="name">{profile.complete_name}</div>
                    </a>
                  </Link>
                  <div className="statistic starsContainer">
                    <img className="icon" src="/icons/star.png" />
                    <div className="stars">{profile.rating_average}</div>
                  </div>
                  <div className="statistic viewsContainer">
                    <img className="icon" src="/icons/eye.png" />
                    <div className="views">{profile.views_count}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
      <style jsx>
        {`
          .profileList {
            display: flex;
            flex-direction: row;
            width: 100%;
            margin-top: 14px;
          }
          .column {
            flex: 50%;
          }
          .profile {
            display: flex;
            flex-direction: row;
            width: fit-content;
            margin: 28px 0 14px 0;
            user-select: none;
            transition: 0.7s;
          }
          .profile:hover {
            transform: scale(1.03);
          }
          .profile:active {
            transform: scale(1.08);
            transition: 0.1s;
          }
          .image {
            max-width: 180px;
            max-height: 150px;
            border-radius: 5px;
          }
          .infoContainer {
            max-width: 200px;
            margin-left: 7px;
          }
          .name {
            font-size: 24px;
          }
          .icon {
            display: inline-block;
            width: 20px;
          }
          .statistic {
            transition: 0.7s;
            cursor: pointer;
          }
          .statistic:hover {
            transform: scale(1.2);
          }
          .statistic:active {
            transform: scale(1.5) rotate(-5deg);
            transition: 0.1s;
          }
          .viewsContainer {
            display: flex;
            flex-direction: row;
          }
          .views {
            display: inline-block;
            margin-left: 7px;
          }
          .starsContainer {
            display: flex;
            flex-direction: row;
          }
          .stars {
            display: inline-block;
            margin-left: 7px;
          }
          @media only screen and (max-width: 768px) {
            .profileList {
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProfileList;
