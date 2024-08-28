import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonials";
import ExpenseTracker from "./components/ExpenseTracker";
import landingPageData from "./constant/webData";

function App() {
  const { header, hero, features, testimonials } = landingPageData;

  // const [userName, setUserName] = useState("Anas Ali");
  // const [isRemember, setIsRemember] = useState(false);
  // // const [counter, setCounter] = useState(0);

  // // // var username = "Anas Ali";

  // // const handleUpdateCounter = () => {
  // //   setCounter(counter + 1);
  // //   console.log(counter);

  // // };

  // const handleOnChangeInput = (e) => setUserName(e.target.value);
  // // console.log(userName);
  // const handleChangeCheckBox = (e) => setIsRemember(e.target.checked);

  // console.log("Is Remembered=> ", isRemember );

  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("income");
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = () => {
    // console.log("Amount => ", amount);
    // console.log("Type => ", type);
    setTransactions([...transactions, { amount, type }]);
    setAmount("");
    setType("income");
  };

  

  return (
    <div>
      <ExpenseTracker
      amount={amount}
      type={type}
      setAmount={setAmount}
      setType={setType}
      handleAddTransaction={handleAddTransaction}
      transactions={transactions}/>
    </div>
  );
}

export default App;
