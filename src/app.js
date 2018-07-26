import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from './selectors/expenses';
import { setTextFilter } from "./actions/filters";
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

const store = configureStore;

store.dispatch(addExpense({ description: 'Water bill', amount: 100 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 200, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 50, createdAt: 100000}));

const jsx = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
);



ReactDOM.render(jsx, document.getElementById("app"));