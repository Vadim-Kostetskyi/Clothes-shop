import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './Routes/App';
import reportWebVitals from './reportWebVitals';
import { myPersistStore, store } from 'redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={myPersistStore}>
          <App />
          </PersistGate>
      </Provider>
    </React.StrictMode>
   </BrowserRouter>
);

reportWebVitals();
