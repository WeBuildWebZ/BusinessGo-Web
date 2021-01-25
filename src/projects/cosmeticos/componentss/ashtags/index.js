import { useSelector } from 'react-redux';

import Spinner from '../../../../components/Spinner';

const Hashtags = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="hashtags">
      {!project && <Spinner />}
      {project?.configuration.footer.hashtags.map((hashtag, i) => (
        <a href={`https://twitter.com/hashtag/${encodeURIComponent(hashtag.value)}`} target="blank">
          <h4 key={i}>#{hashtag.value}</h4>
        </a>
      ))}

      <style jsx>
        {`
          .hashtags {
            width: 100vw;
            height: fit-content;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding: 1em;
          }
          h4 {
            margin: 0.5em;
          }
        `}
      </style>
    </div>
  );
};

export default Hashtags;
