import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export default ({ id, description, amount, createdAt }) => (
        <Link className="list-item" to={`/edit/${id}`}>
            <div>
                <h3 className="list-item__title">{description}</h3>
                <span className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span>
            </div>            
            <h3 className="list-item__data">{numeral(amount).format('$0,0.00')}</h3>
        </Link>
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