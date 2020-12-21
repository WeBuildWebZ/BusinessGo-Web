import React, { useEffect, useState } from 'react';
import { InputGroup } from 'react-bootstrap';

import { getChecklistItems } from '../../../../services/checklistItem';
import Navbar from '../../../../components/Navbar';
import Checklist from '../../components/Checklist';

export default function RequestDevelopment() {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    getChecklistItems().then(response => {
      setItems(response.data);
    });
  }, []);

  const handleItemsChanged = newItems => setSelectedItems(newItems);

  return (
    <>
      <Navbar />
      <Checklist items={items} onItemsChanged={handleItemsChanged} />
    </>
  );
}
