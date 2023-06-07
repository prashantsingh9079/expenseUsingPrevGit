import React, { useState } from "react";

const ExpenseForm = () => {
    const [enteredtitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDte, setEnteredDate] = useState('');
    const titleChangedHandler = (e) => {
        setEnteredTitle(e.taget.value);
    }

    const amountChangedHandler = (e) => {
        setEnteredAmount(e.taget.value);
    }

    const dateChangedHandler = (e) => {
        setEnteredDate(e.taget.value);
    }

    return (

        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Description  </label>
                    <input type="text" onChange={titleChangedHandler} /> <br />
                </div>

                <div className="new-expense__control">
                    <label>Amount  </label>
                    <input type="number" min="1" step="0.5" onChange={amountChangedHandler} /><br />
                </div>

                <div className="new-expense__control">
                    <label>Date  </label>
                    <input type="date" min="2022-01-01" max="2023-01-01" onChange={dateChangedHandler} /> <br /> <br />
                </div>
                <div className="new-expense__actions">
                    <button>Add</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;