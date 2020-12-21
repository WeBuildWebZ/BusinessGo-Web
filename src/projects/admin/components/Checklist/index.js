import React from 'react';
import { InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Checklist = props => {
  const s = 2;
  return (
    <>
      {props.items.map((item, i) => {
        const a = 3;
        // return <InputGroup.Checkbox key={i}>{item.code}</InputGroup.Checkbox>;
        return (
          <div key={i}>
            <InputGroup.Prepend>
              {item.price && (
                <>
                  <InputGroup.Text key={1}>
                    $ &nbsp;
                    {item.currency}
                  </InputGroup.Text>
                  <InputGroup.Text key={2}>{item.price.toFixed(2)}</InputGroup.Text>
                </>
              )}
              <InputGroup.Checkbox key={3} />
              <InputGroup.Text key={4}>{item.code}</InputGroup.Text>
            </InputGroup.Prepend>
          </div>
        );
        // return <div key={i}>hola</div>;
      })}
    </>
  );
};

Checklist.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemsChanged: PropTypes.func.isRequired
};

export default Checklist;
