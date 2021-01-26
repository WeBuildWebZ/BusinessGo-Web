import { useSelector } from 'react-redux';

export const Tags = () => {
  const project = useSelector(store => store.project);

  const hashtags = project?.configuration.basic_info.hashtags || [];

  return (
    <div className="tags">
      {hashtags.map((hashtag, i) => (
        <a href={`https://twitter.com/hashtag/${encodeURIComponent(hashtag.value)}`} target="blank">
          <h4 key={i}>#{hashtag.value}</h4>
        </a>
      ))}
      <style jsx>
        {`
          .tags {
            width: 100vw;
            height: 30vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff3e6;
            color: #0d335d;
            margin: 2em 0;
          }
          h4 {
            margin: 0 9px;
          }
        `}
      </style>
    </div>
  );
};
