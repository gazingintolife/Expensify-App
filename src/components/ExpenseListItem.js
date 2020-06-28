import React from 'react';
import {NavLink} from 'react-router-dom';

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
        <NavLink to = {`/edit/${expenses.id}`} activeClassName='is-active' >Description: {expenses.description}</NavLink>
        <p>Amount: {expenses.amount}</p>
        <p>Created At: {expenses.createdAt}</p>
    </div>
);

// this snippet of code below is same as code above as above we use desturcturing 

export default ExpenseListItem;