import React from 'react';
import { Link } from 'react-router-dom';


export default ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}><h3>Description: {description}</h3></Link>
        <p>Amount: {amount}</p>
        <p>Creation Date: {createdAt}</p>
    </div>
)



// {
//     props.expenses.map((el) => {
//         console.log(el.description, el.amount, el.createdAt);
//     });
// }

// My solution -- required importing connect from react redux into this file and exporting as default a connect function

// const ExpenseListItem = (props) => (
//     <div>
//         {props.expenses.map((el) => <p>Description: {el.description}, Amount: {el.amount}, Creation: {el.createdAt}</p>)}
//     </div>
// )