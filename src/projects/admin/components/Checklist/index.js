import React, { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PropTypes from 'prop-types';

import useStyle from './style';
import { getLanguage } from './lang';
import { itemData } from './constants';

const Checklist = props => {
  const classes = useStyle();
  const language = getLanguage(useSelector(store => store.language));
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (item, isSelected) => {
    const newItems = isSelected ? [...selectedItems, item] : selectedItems.filter(_item => _item !== item);
    setSelectedItems(newItems);
    props.onItemsChanged(newItems);
  };

  return (
    <>
      {props.items.map((item, i) => {
        const itemLanguage = language.items[item.code] || {};
        const isSelected = selectedItems.includes(item.code);

        return (
          <div key={i}>
            <InputGroup.Prepend className={classes.basicData}>
              <InputGroup.Checkbox
                className={classes.checkbox}
                checked={isSelected}
                onChange={({ target }) => handleSelect(item.code, target.checked)}
              />
              <InputGroup.Text>{itemLanguage.title}</InputGroup.Text>
              {item.price && (
                <>
                  <InputGroup.Text className={classes.price}>
                    $ &nbsp;
                    {item.price.toFixed(0)}
                    &nbsp;
                    {item.currency}
                  </InputGroup.Text>
                  <InputGroup.Text>{language.frequencyTypes[item.type]}</InputGroup.Text>
                  {isSelected && <CheckCircleIcon className={classes.icon} />}
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
