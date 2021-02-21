(() => {
  const { currentScript } = document;
  const { parentNode: parent } = currentScript;
  const { webuildwebzProjectToken: projectToken } = currentScript.dataset;

  window.__WEBUILDWEBZ_DATA = { projectToken };

  const app = document.createElement('div');
  app.id = 'webuildwebz-widgets';
  const widgetScript = document.createElement('script');
  widgetScript.src = 'http://localhost:5000/bundle.min.js';

  parent.appendChild(app);
  parent.appendChild(widgetScript);
})();
