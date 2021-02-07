const registerServiceWorker = () => navigator.serviceWorker.register('/sw.js');

const isPushNotificationSupported = () => 'serviceWorker' in navigator && 'PushManager' in window;
