import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense} from './actions/expenses';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 500}));
store.dispatch(addExpense({description: 'Gas Bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 10950}));



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));
 


