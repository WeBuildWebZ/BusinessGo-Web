import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';

const Breadcrumb = props => (
  <section className="breadcrumb">
    <div className="container">
      <ul className="breadcrumb-list">
        <li key={0}>
          <a href="/">
            <HomeIcon style={{ cursor: 'pointer' }} />
          </a>
        </li>
        {props.sections.map((section, i) => (
          <li key={i + 1}>{section.link ? <a href={section.link}>{section.value}</a> : section.value}</li>
        ))}
      </ul>
    </div>
    <style jsx>
      {`
        .breadcrumb {
          padding: 20px 0 2px 0;
          box-shadow: 0 0 1px 1px #b2b2b2;
        }
        .breadcrumb-list {
          display: flex;
        }
        li {
          list-style: none;
          font-size: 13px;
          color: #b2b2b2;
          margin: 0 5px 0 5px;
        }
        li::before {
          content: '/ ';
        }
      `}
    </style>
  </section>
);

Breadcrumb.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, link: PropTypes.string }))
};

Breadcrumb.defaultProps = {
  sections: []
};

export default Breadcrumb;
