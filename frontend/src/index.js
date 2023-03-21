import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { App } from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // eslint-disable-next-line react/jsx-no-undef
  <BrowserRouter>
    <React.StrictMode>
      {/* <link
        href="https://fonts.cdnfonts.com/css/thegoodmonolith"
        rel="stylesheet"
      ></link> */}
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
