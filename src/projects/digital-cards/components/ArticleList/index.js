import { useState } from 'react';
import Link from 'next/link';

const ArticleList = () => {
  const [articles, setArticles] = useState([
    {
      _id: 2,
      photo: 'https://markateur.com/wp-content/uploads/2017/04/articles.jpg',
      title: 'Segundo Artículo!',
      description: 'Este es nuestro segundo artículo!'
    },
    {
      _id: 1,
      photo: 'https://www.digitalvidya.com/wp-content/uploads/2019/03/How-To-Write-An-Article.jpg',
      title: 'Primer Artículo!',
      description: 'Este es nuestro primer artículo!'
    }
  ]);

  return (
    <div className="articleList">
      {articles.map((article, i) => {
        const link = `/articles/${encodeURIComponent(article._id)}`;

        return (
          <div key={i} className="article">
            <Link href={link}>
              <a target="blank">
                <img className="image" src={article.photo} />
              </a>
            </Link>
            <Link href={link}>
              <a target="blank">
                <div className="infoContainer">
                  <h3 className="title">{article.title}</h3>
                  <p className="description">{article.description}</p>
                </div>
              </a>
            </Link>
          </div>
        );
      })}
      <style jsx>
        {`
          .articleList {
            width: 80%;
          }
          .article {
            display: flex;
            flex-direction: row;
            justify-content: left;
            padding: 14px;
            border-radius: 7px;
            background-color: #c800cd33;
            margin: 14px;
          }
          .image {
            width: 150px;
            margin-right: 14px;
            border-radius: 7px;
            transition: 0.7s;
          }
          .image:hover {
            transform: scale(1.1);
          }
          .image:active {
            transform: scale(1.15);
            transition: 0.1s;
          }
          .infoContainer {
            display: flex;
            flex-direction: column;
            transition: 0.7s;
          }
          .infoContainer:hover {
            transform: scale(1.05);
          }
          .infoContainer:active {
            transform: scale(1.1);
            transition: 0.1s;
          }
          @media only screen and (max-width: 768px) {
            .image {
              width: 50px;
            }
            .title {
              font-size: 20px;
            }
            .description {
              font-size: 12px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ArticleList;
