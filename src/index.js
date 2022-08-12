import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'mobx-react';
import AttStore from './S022300080/store/AttStore';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <Provider AttStore = {AttStore}>
    <App />
  </Provider>
);

reportWebVitals();