import './Item.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
 const Items=(props)=>
{   
    
    return (
        <div className="expense-item">
           <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.desc}</h2>
                <h2>{props.location}</h2>
                <div className="expense-item__price"> Rs {props.price}</div>
                <ExpenseDetails location={props.location} price={props.price} desc={props.desc}/>
            </div>
            
        </div>
    )
}

export default Items;