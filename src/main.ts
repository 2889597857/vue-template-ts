import { setupStore } from '@/store';
// eslint-disable-next-line import/order
import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
import './styles/index.scss';

function setupApp() {
  const app = createApp(App);

  setupStore(app);
  setupRouter(app);

  app.mount('#app');
}

setupApp();
