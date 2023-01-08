import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './store/reducer/userReducer';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const Store = configureStore(
  {
    reducer: {
      userReducer: userReducer,
    },
  },
  applyMiddleware(ReduxThunk),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
