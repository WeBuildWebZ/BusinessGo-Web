import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Button, PopoverTitle, ModalTitle, Alert } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import PropTypes from 'prop-types';

// import { registerUser } from '../../../services/api/user';

import { getLanguage } from './lang';
import useStyle from './style';

const Menu = React.forwardRef(({ style, className, 'aria-labelledby': labeledBy }, ref) => {
  const classes = useStyle();
  const language = getLanguage(useSelector(store => store.language));
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = e => {
    e.preventDefault();
    setError(null);
    // registerUser(name, surname, phone, email, password)
    //   .then(() => {
    //     window.location.href = process.env.DASHBOARD_URL;
    //   })
    //   .catch(({ response }) => {
    //     setError(language.errors[response.data.code]);
    //   });
  };

  return (
    <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
      <ModalTitle className={classes.title}>{language.title}</ModalTitle>
      <Form className={classes.form} onSubmit={handleRegister}>
        <Form.Group controlId="name">
          <Form.Label>{language.name}</Form.Label>
          <Form.Control
            type="text"
            required
            maxLength={200}
            placeholder={language.name}
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </Form.Group>
        <Form.Group controlId="surname">
          <Form.Label>{language.surname}</Form.Label>
          <Form.Control
            type="text"
            required
            maxLength={200}
            placeholder={language.surname}
            value={surname}
            onChange={({ target }) => setSurname(target.value)}
          />
        </Form.Group>
        <PopoverTitle>{language.phone}</PopoverTitle>
        <PhoneInput
          required
          placeholder={language.phone}
          onChange={setPhone}
          value={phone}
          defaultCountry="AR"
        />

        <Form.Group controlId="email">
          <Form.Label>{language.email}</Form.Label>
          <Form.Control
            type="email"
            required
            maxLength={200}
            placeholder={language.email}
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <Form.Text className="text-muted">{language.emailMessage}</Form.Text>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>{language.password}</Form.Label>
          <Form.Control
            type="password"
            required
            minLength={4}
            maxLength={200}
            placeholder={language.password}
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </Form.Group>

        {error && (
          <Alert show variant="danger">
            <Alert.Heading>{error.title}</Alert.Heading>
            {error.message}
          </Alert>
        )}

        <Button variant="primary" type="submit">
          {language.submit}
        </Button>
      </Form>
    </div>
  );
});

Menu.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  'aria-labelledby': PropTypes.string.isRequired
};

Menu.defaultProps = {
  style: {},
  className: ''
};

export default Menu;
