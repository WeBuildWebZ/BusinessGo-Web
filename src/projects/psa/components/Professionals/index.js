import React from 'react';
import { Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Card from './components/card';

const Professionals = props => {
  const { professionals, loading } = props;

  return (
    <div className="Professionals">
      {loading && (
        <Spinner
          animation="grow"
          style={{
            position: 'fixed',
            top: 'calc(100% - 100px)',
            width: 100,
            height: 100,
            color: '#0cc44a'
          }}
        />
      )}
      {professionals.map((professional, i) => (
        <Card key={i} professional={professional} onClick={() => props.onClick(professional)} />
      ))}
      <style jsx>
        {`
          .Professionals {
            display: inline-block;
            position: relative;
            height: 100%;
            background-color: #202221;
            width: 100%;
            margin-top: 25px;
          }

          @media only screen and (max-width: 768px) {
            .Professionals {
              margin: 22px 0 0 -35px;
              width: calc(100% + 35px);
            }
          }
        `}
      </style>
    </div>
  );
};

Professionals.propTypes = {
  professionals: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

Professionals.defaultProps = {
  onClick: () => {}
};

export default Professionals;
