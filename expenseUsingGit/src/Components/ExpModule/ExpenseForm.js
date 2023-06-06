function ExpenseForm()
{
    const fun = (e)=>{
        console.log(e.target.value)
    }
    return(
        <form >
            <label htmlFor="expTitle">Expense Title</label>
            <input onChange={fun} id="expTitle" type="text" />
            <br /><br />
            <label htmlFor="expAmount">Expense Amount</label>
            <input onChange={fun} id="expAmount" type="Number" />
            <br /><br />
            <label htmlFor="expDate">Expense Date</label>
            <input onChange={fun} id="expAmount" type="date" />
            <br /><br />
            <input onChange={fun} type="submit" />
        </form>
    )
}

export default ExpenseForm