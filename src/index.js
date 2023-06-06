import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.min.css';

import store from 'reduxToolkit/store';
import './assets/styles/fonts.css';
import './assets/styles/footer.scss';
import './assets/styles/header.scss';
import './assets/styles/main.css';
import './assets/styles/ui.scss';

import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18 from './services/i18';

const container = document.getElementById('root');
const root = createRoot(container);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(
      function(registration) {
        console.log(
          'ServiceWorker registration successful with scope: ',
          registration.scope,
        );
      },
      function(err) {
        console.log('ServiceWorker registration failed: ', err);
      },
    );
  });
}

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <I18nextProvider i18n={i18}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </Provider>,
);
