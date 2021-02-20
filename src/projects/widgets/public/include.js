const BASE_URL = 'http://localhost:3000';

fetch(BASE_URL)
  .then(response => response.text())
  .then(html => {
    html = html.replace(/"\//g, `"${BASE_URL}/`);

    console.log('html', html);

    document.write(html);
  });
