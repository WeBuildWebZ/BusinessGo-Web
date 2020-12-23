import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PopoverTitle, FormText, Button, Spinner } from 'react-bootstrap';
import { TextareaAutosize } from '@material-ui/core';

import { getChecklistItems } from '../../../../services/checklistItem';
import Navbar from '../../../../components/Navbar';
import Checklist from '../../components/Checklist';
import { getBasePrices } from '../../../../services/basePrice';

import { getLanguage } from './lang';
import useStyle from './style';

export default function RequestDevelopment() {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [summary, setSummary] = useState('');
  const [basePrices, setBasePrices] = useState(null);
  const language = getLanguage(useSelector(store => store.language));
  const user = useSelector(store => store.user);
  const classes = useStyle();

  useEffect(() => {
    getChecklistItems().then(response => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    getBasePrices('ARS').then(response => {
      setBasePrices({
        unique: response.data.filter(price => price.type === 'unique')[0],
        monthly: response.data.filter(price => price.type === 'monthly')[0]
      });
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
      <h6>
        {language.basePrice(
          basePrices ? basePrices.unique.amount : <Spinner animation="grow" />,
          basePrices ? basePrices.monthly.amount : <Spinner animation="grow" />,
          basePrices ? basePrices.unique.currency : <Spinner animation="grow" />
        )}
      </h6>
      <h5>{language.describeYourPage}</h5>
      <TextareaAutosize
        className={classes.summary}
        onChange={({ target }) => setSummary(target.value)}
        rowsMin={5}
        value={summary}
      />
      <Checklist items={items} onItemsChanged={handleItemsChanged} />
      <Button className={classes.registerRequest}>{language.registerRequest}</Button>
    </>
  );
}
