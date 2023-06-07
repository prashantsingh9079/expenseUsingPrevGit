import React, { useState } from "react";

const ExpenseForm = (props) => {
    const [enteredtitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const titleChangedHandler = (e) => {
        setEnteredTitle(e.target.value)
    }

    const amountChangedHandler = (e) => {
        setEnteredAmount(e.target.value)
    }

    const dateChangedHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredtitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');
    }

    return (

        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Description  </label>
                    <input type="text" value={enteredtitle} onChange={titleChangedHandler} /> <br />
                </div>

                <div className="new-expense__control">
                    <label>Amount  </label>
                    <input type="number" min="1" step="0.5" value={enteredAmount} onChange={amountChangedHandler} /><br />
                </div>

                <div className="new-expense__control">
                    <label>Date  </label>
                    <input type="date" min="2022-01-01" max="2024-01-01" value={enteredDate} onChange={dateChangedHandler} /> <br /> <br />
                </div>
                <div className="new-expense__actions">
                    <button>Add</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;