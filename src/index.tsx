import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles/index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
);

reportWebVitals();
