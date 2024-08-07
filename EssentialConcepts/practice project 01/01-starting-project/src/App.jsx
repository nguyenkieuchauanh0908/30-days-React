import { useState } from "react";
import Results from "./components/Results";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 2000,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: +newValue };
    });
  }
  return (
    <>
      <Header></Header>
      <UserInput onChange={handleChange} userInput={userInput} />
      {inputIsValid ? (
        <Results userInput={userInput}></Results>
      ) : (
        <p>Please enter valid data!</p>
      )}
    </>
  );
}

export default App;
