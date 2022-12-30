import './App.css';
import './components/ExpensesItem';
import ExpensesItem from "./components/ExpensesItem";

function App() {

    const data = [
        {
            date: "March 20th, 2022",
            description: "Car Insurance",
            price: "$25.50"
        },
        {
            date: "April 25th, 2022",
            description: "Google One",
            price: "$5.00"
        }
    ]

    return (
    <div className="App">
      <header>
        <h1>Expenses App</h1>
      </header>
        <div>
            {data.map((x) => (
                <ExpensesItem date={x.date} description={x.description}
                price={x.price}/>
            ))}
        </div>
    </div>
  );
}

export default App;
