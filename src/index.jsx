// Imports de React
import React from 'react';
import ReactDOM from 'react-dom';

// Imports de Redux
import { Provider } from 'react-redux';
import { createAppStore } from './store/config/store.config';

// Importamos las hojas de estilos
import './styles/css/index.scss';
import './styles/css/login.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Allroutes from './routes/AllRoutes';

const appStore = createAppStore();

ReactDOM.render(
  <Provider store={appStore}>
    <React.StrictMode>
      <Allroutes />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
