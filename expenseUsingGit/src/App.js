import Items from './Components/ExpModule/Items';
import './App.css';
import NewExpense from './Components/ExpModule/AddExpense/NewExpense';
import React, { useState } from 'react';
import ExpensesFilter from './Components/ExpModule/AddExpense/ExpensesFilter';

const App = () => {

  const [filteredYear,setFilterYear] = useState('2020');
  const filterChangeHandler = selectedYear =>{
    setFilterYear(selectedYear);
  }

  const [arr, arrFun] = useState({ date: '', desc: '', price: '', location: '', key: '' })

  const expenseList = [
    {
      key:'e1',
      date: new Date(2023, 5, 4),
      desc: "car insurance",
      price: 8000,
      location: "faridabad"
    },
    {
      key:'e2',
      date: new Date(2023, 5, 5),
      desc: "petrol",
      price: 2200,
      location: "delhi"
    },
    {
      key:'e3',
      date: new Date(2023, 5, 6),
      desc: "shopping",
      price: 7500,
      location: "safidon"
    },
    {
      key:'e4',
      date: new Date(2023, 5, 6),
      desc: "movie",
      price: 1200,
      location: "delhi"
    }
  ]

  const addExpenseHandler = (expenses) => {
    console.log("In App.js");
    console.log(expenses)
    expenseList.push({
      key: Math.random(),
      date: expenses.date,
      desc: expenses.title,
      price: expenses.amount
    })
    console.log(expenseList)
    arrFun({
      key: Math.random(),
      date: expenses.date,
      desc: expenses.title,
      price: expenses.amount
    })
  }
  
  return (
    // <div className="App">
    //   <NewExpense onAddExpense={addExpenseHandler} />
    //   <Items date={expenseList[0].date}
    //     desc={expenseList[0].desc}
    //     price={expenseList[0].price}
    //     location={expenseList[0].location} />
    //   <Items date={expenseList[1].date}
    //     desc={expenseList[1].desc}
    //     price={expenseList[1].price}
    //     location={expenseList[1].location} />
    //   <Items date={expenseList[2].date}
    //     desc={expenseList[2].desc}
    //     price={expenseList[2].price}
    //     location={expenseList[2].location} />
    //   <Items date={expenseList[3].date}
    //     desc={expenseList[3].desc}
    //     price={expenseList[3].price}
    //     location={expenseList[3].location} />

      <div className="App">
        <NewExpense onAddExpense={addExpenseHandler} />
        <ExpensesFilter selected={filteredYear} onChangedFilter={filterChangeHandler}/>
        { expenseList.map(a => {
          return(
          <Items key={Math.random()} date={a.date} desc={a.desc} price={a.price} location={a.location} />)
        })}
      </div>

    /* </div> */
  );
}

export default App;
