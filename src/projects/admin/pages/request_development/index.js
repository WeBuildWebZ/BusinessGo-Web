import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PopoverTitle, FormText } from 'react-bootstrap';

import { getChecklistItems } from '../../../../services/checklistItem';
import Navbar from '../../../../components/Navbar';
import Checklist from '../../components/Checklist';

import { getLanguage } from './lang';
import useStyle from './style';

export default function RequestDevelopment() {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const language = getLanguage(useSelector(store => store.language));
  const user = useSelector(store => store.user);
  const classes = useStyle();

  useEffect(() => {
    getChecklistItems().then(response => {
      setItems(response.data);
    });
  }, []);

  const handleItemsChanged = newItems => setSelectedItems(newItems);

  return (
    <>
      <Navbar />
      <center>
        <PopoverTitle>{language.developmentRequest}</PopoverTitle>
        <FormText className={classes.paragraph}>{language.message(user)}</FormText>
        <br />
        <ol className={`${classes.paragraph} ${classes.flowItem}`} key={1}>
          {language.flow.map((message, i) => (
            <li key={i}>{message(user)}</li>
          ))}
        </ol>
      </center>
      <Checklist items={items} onItemsChanged={handleItemsChanged} />
    </>
  );
}
