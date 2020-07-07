import React from 'react';
import {NavLink} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    // <div>
        //  
        //  <NavLink to = {`/edit/${id}`} activeClassName='is-active' >Description: {description}</NavLink>
        //  <p>Amount: {amount}</p>
        //  <p>Created At: {createdAt}</p>
    // </div>
// );

const ExpenseListItem = (expenses) => (
    <div>
        <NavLink to = {`/edit/${expenses.id}`} activeClassName='is-active' >{expenses.description}</NavLink>
        <p>
        {numeral(expenses.amount/100).format('$0,0.00')}
        </p>
        <p>
        {moment(expenses.createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);

// this snippet of code below is same as code above as above we use desturcturing and below we don't

export default ExpenseListItem;