import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../Ui/Card'
import './expenseItem.css'

function ExpensItem (props) {
//    const [title, setTitle] = useState(props.title);
//     const clickHandler = () => {
//         setTitle('updated!')
//         console.log('clicked')
//     }


    return (
        <li>
 <Card className="expense-item">
           <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2> {props.title} </h2>
                <div className="expense-item__price">
                    $ {props.amount}
                </div>
            </div>
        </Card>
        </li>
       
    )
}

export default ExpensItem;