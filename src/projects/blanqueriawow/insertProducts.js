(() => {
  const category = 'pillows';
  const toNumbers = str =>
    str
      .split('')
      .filter(c => c.charCodeAt() >= 48 && c.charCodeAt() <= 57)
      .join('');
  const cards = document.getElementsByClassName('card-body');
  const items = [];

  for (let i = 0; i < cards.length; i += 1) {
    const card = cards[i];
    items.push({
      value: {
        category,
        name: card.querySelector('ul li:nth-child(2)').innerHTML,
        photo: card.querySelector('a img').src,
        price: +toNumbers(card.querySelector('h1 span').innerHTML),
        code: toNumbers(card.querySelector('ul li:nth-child(3)').innerHTML),
        stock: +toNumbers(card.querySelector('ul li:nth-child(4)').innerHTML)
      },
      entity: 'product',
      project_code: 'blanqueriawow'
    });
  }
  console.log(`db.items.insertMany(${JSON.stringify(items)});`);
  console.log(items);
})();
