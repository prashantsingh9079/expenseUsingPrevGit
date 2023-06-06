import './Item.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import React,{useState} from 'react'
 const Items=(props)=>
{   
    const [amount,setAmount] = useState(props.price)
    const [title, setTitle] = useState(props.desc)
    const buttonHandler = () =>{
        setTitle("updated!!!")
    }

    const amountHandler = (e)=>{
        setAmount(100)
        console.log(amount)
    }
    
    return (
        <div className="expense-item">
           <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <h2>{props.location}</h2>
                <div className="expense-item__price"> Rs {amount}</div>
                <ExpenseDetails location={props.location} price={amount} desc={title}/>
                <button onClick={buttonHandler}>Title Changed</button>
                <button onClick={amountHandler}>Change amount</button>
            </div>
            
        </div>
    )
}

export default Items;