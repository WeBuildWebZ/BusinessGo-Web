(() => {
  const { currentScript } = document;
  const { parentNode: parent } = currentScript;
  const { webuildwebzProjectCode: projectCode } = currentScript.dataset;
  const { webuildwebzEnvironment: env } = currentScript.dataset;

  window.__WEBUILDWEBZ_DATA = { projectCode };

  const app = document.createElement('div');
  app.id = 'webuildwebz-widgets';
  const widgetScript = document.createElement('script');
  widgetScript.src = 'http://localhost:5000/widgets.js';

  parent.appendChild(app);
  parent.appendChild(widgetScript);
})();
