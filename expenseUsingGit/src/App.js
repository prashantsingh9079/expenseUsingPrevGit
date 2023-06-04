import Items from './Components/ExpModule/Items';
import './App.css';

const App=()=> {
  const expenseList = [
    {
      date: new Date(2023, 5, 4),
      desc: "car insurance",
      price: 8000,
      location: "faridabad"
    },
    {
      date: new Date(2023, 5, 5),
      desc: "petrol",
      price: 2200,
      location: "delhi"
    },
    {
      date: new Date(2023, 5, 6),
      desc: "shopping",
      price: 7500,
      location: "safidon"
    },
    {
      date: new Date(2023, 5, 6),
      desc: "movie",
      price: 1200,
      location: "delhi"
    }
  ]
  return (
    <div className="App">
      <Items date={expenseList[0].date}
        desc={expenseList[0].desc}
        price={expenseList[0].price}
        location={expenseList[0].location} />
      <Items date={expenseList[1].date}
        desc={expenseList[1].desc}
        price={expenseList[1].price}
        location={expenseList[1].location} />
      <Items date={expenseList[2].date}
        desc={expenseList[2].desc}
        price={expenseList[2].price}
        location={expenseList[2].location} />
      <Items date={expenseList[3].date}
        desc={expenseList[3].desc}
        price={expenseList[3].price}
        location={expenseList[3].location} />
    </div>
  );
}

export default App;
