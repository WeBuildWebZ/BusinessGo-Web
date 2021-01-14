## BusinessGo-Web

### Comandos disponibles

- npm run **nombre-proyecto**
- npm run build **nombre-proyecto**
- npm run deploy **nombre-proyecto**
- npm start

scrapper

```js
clear();
getNumbers = str =>
  str
    .split('')
    .filter(char => {
      const charCode = char.charCodeAt();
      return charCode >= 48 && charCode <= 57;
    })
    .join('');
products = [];
cards = document.getElementsByClassName('card-body');

for (let i = 0; i < cards.length; i += 1) {
  const card = cards[i];
  products.push({
    category: 'Almohadas',
    photo: card.children[0].children[0].src,
    price: +getNumbers(card.children[1].children[0].innerHTML),
    name: card.children[2].children[1].innerHTML,
    code: getNumbers(card.children[2].children[2].children[0].innerHTML),
    stock: +getNumbers(card.children[2].children[3].children[0].innerHTML)
  });
}
console.log(
  `db.client_documents.insertMany(${JSON.stringify(
    products.map(p => ({ table_name: 'wow-products', ...p }))
  )})`
);
```
