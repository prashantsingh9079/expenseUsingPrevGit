import './ExpenseDetails.css'

const ExpenseDetails=(props)=>
{
    return(
        <div className="expense-detail">
            <p>{props.location}</p>
            <p>{props.desc}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default ExpenseDetails 