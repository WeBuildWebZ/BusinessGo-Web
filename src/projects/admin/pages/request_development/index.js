import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PopoverTitle, FormText, Button, Spinner, Form } from 'react-bootstrap';

import { getChecklistItems } from '../../../../services/api/checklistItem';
import Navbar from '../../../../components/Navbar';
import Checklist from '../../components/Checklist';
import { getBasePrices } from '../../../../services/api/basePrice';
import { createDevelopmentRequest } from '../../../../services/api/user';

import { getLanguage } from './lang';
import useStyle from './style';

export default function RequestDevelopment() {
  const [requested, setRequested] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [websiteName, setWebsiteName] = useState('');
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

  const handleRequestDevelopment = e => {
    e.preventDefault();
    setRequested(true);
    createDevelopmentRequest(user._id, websiteName, summary, selectedItems)
      .then(() => {
        window.location.href = '/my_development_requests ';
      })
      .catch(() => {
        setRequested(false);
      });
  };

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
      <br />
      <Form id="request-development" onSubmit={handleRequestDevelopment} />
      <Form.Group controlId="text">
        <Form.Label>{language.websiteName}</Form.Label>
        <Form.Control
          className={classes.websiteName}
          form="request-development"
          required
          type="text"
          minLength={2}
          value={websiteName}
          onChange={({ target }) => setWebsiteName(target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>{language.describeYourPage}</Form.Label>
        <Form.Control
          form="request-development"
          as="textarea"
          rows={5}
          required
          minLength={10}
          onChange={({ target }) => setSummary(target.value)}
          value={summary}
        />
      </Form.Group>
      <Checklist items={items} onItemsChanged={handleItemsChanged} />
      <Button
        className={classes.registerRequest}
        disabled={requested}
        type="submit"
        form="request-development"
      >
        {language.registerRequest}
      </Button>
    </>
  );
}
