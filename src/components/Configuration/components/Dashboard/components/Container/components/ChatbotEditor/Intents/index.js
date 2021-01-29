import { useState } from 'react';
import { useSelector } from 'react-redux';

const Intents = () => {
  const project = useSelector(store => store.project);
  const [intents, setIntents] = useState(null);
};

export default Intents;
