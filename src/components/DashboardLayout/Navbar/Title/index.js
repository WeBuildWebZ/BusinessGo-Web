import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import Breadcrumb2 from '../../../Breadcrumb2';

const Title = props => {
  const router = useRouter();

  return (
    <div className="title">
      <Breadcrumb2 items={props.breadcrumbItems} />

      <style jsx>
        {`
          .title {
            position: relative;
            height: 100%;
          }
        `}
      </style>
    </div>
  );
};

Title.propTypes = {
  breadcrumbItems: PropTypes.any.isRequired
};

export default Title;
