import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

const Breadcrumb2 = props => {
  const breadcrumbRef = useRef();
  const [arrowSize, setArrowSize] = useState(0);
  const [breadcrumbHeight, setBreadcrumbHeight] = useState(0);

  useEffect(() => {
    const height = breadcrumbRef.current.offsetHeight;
    setBreadcrumbHeight(height);
    setArrowSize((height ** 2 / 2) ** 0.5);
  }, []);

  const handleClick = item => {
    if (item.link) window.location.href = item.link;
  };

  return (
    <div className="breadcrumb" ref={breadcrumbRef}>
      {props.items.map((item, i) => {
        const isFirst = i === 0;
        const reverseIndex = props.items.length - 1 - i;

        return (
          <>
            <div
              key="item"
              className={`item${isFirst ? ' firstItem' : ''}`}
              style={{ zIndex: 2 * reverseIndex + 1 }}
              onClick={() => handleClick(item)}
            >
              <div className={`text${isFirst ? '' : ' notFirstText'}`}>{item.text}</div>
            </div>
            <div key="itemArrow" className="itemArrow" style={{ zIndex: 2 * reverseIndex }} />
          </>
        );
      })}
      <style jsx>
        {`
          .breadcrumb {
            margin: 0;
            padding: 0;
            background-color: transparent;
            height: 100%;
          }
          .item {
            height: 100%;
            padding: 5px;
            background-color: rgb(67, 176, 184);
            user-select: none;
            transition: 0.4s;
            cursor: pointer;
            box-shadow: 0 0 2px 1px rgb(67, 176, 184);
          }
          .item:hover {
            box-shadow: 0 0 3px 2px rgb(67, 176, 184);
          }
          .item:active {
            transform: scale(1.1);
            box-shadow: 0 0 7px 1px rgb(67, 176, 184);
            transition: 0.1s;
            border-radius: 7px;
          }
          .firstItem {
            border-top-left-radius: 7px;
            border-bottom-left-radius: 7px;
          }
          .notFirstText {
            margin-left: ${breadcrumbHeight * 0.6}px;
          }
          .itemArrow {
            left: 100%;
            top: 0;
            transform: rotate(45deg);
            transform-origin: 0 0;
            margin-right: -${arrowSize}px;
            width: ${arrowSize}px;
            height: ${arrowSize}px;
            background-color: rgb(67, 176, 184);
            box-shadow: 0 0 1px 1px rgb(89, 125, 139);
            border-radius: 3px;
            border-top-right-radius: 7px;
            cursor: pointer;
          }
          @media only screen and (max-width: 768px) {
            .breadcrumb {
              font-size: 10px;
            }
            .item {
              padding: 10px;
            }
            .notFirstText {
              margin-left: ${breadcrumbHeight * 0.4}px;
            }
          }
        `}
      </style>
    </div>
  );
};

Breadcrumb2.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string
    })
  ).isRequired
};

export default Breadcrumb2;
