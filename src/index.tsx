import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StylesProvider } from '@material-ui/core/styles';


import App from './App';
// import reportWebVitals from './reportWebVitals';

import './styles/global.module.scss';
import configureStore from './redux/store';

const store = configureStore({});

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <StylesProvider injectFirst>
          <App />
        </StylesProvider>
      </HashRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
