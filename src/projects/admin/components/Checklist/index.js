import React from 'react';
import { InputGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import useStyle from './style';
import { getLanguage } from './lang';
import { itemData } from './constants';

const Checklist = props => {
  const classes = useStyle();
  const language = getLanguage(useSelector(store => store.language));

  return (
    <>
      {props.items.map((item, i) => {
        const itemLanguage = language.items[item.code] || {};

        return (
          <div key={i}>
            <InputGroup.Prepend className={classes.basicData}>
              <InputGroup.Checkbox key={3} />
              <InputGroup.Text key={4}>{itemLanguage.title}</InputGroup.Text>
              {item.price && (
                <>
                  <InputGroup.Text key={1} className={classes.price}>
                    $ &nbsp;
                    {item.price.toFixed(2)}
                    &nbsp;
                    {item.currency}
                  </InputGroup.Text>
                  <InputGroup.Text>{language.frequencyTypes[item.type]}</InputGroup.Text>
                </>
              )}
            </InputGroup.Prepend>
            <div className={classes.itemDescription}>{itemLanguage.description}</div>
            <img className={classes.itemImage} src={itemData[item.code]?.imageUrl} alt={item.code} />
          </div>
        );
      })}
    </>
  );
};

Checklist.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemsChanged: PropTypes.func.isRequired
};

export default Checklist;
