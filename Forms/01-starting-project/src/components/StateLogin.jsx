import { useState } from "react";
export default function StateLogin() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  function handleSubmission(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  function handleInputChange(value, identifier) {
    setDidEdit((prev) => ({
      ...prev,
      [identifier]: false,
    }));
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  function handleReset() {
    setEnteredValues((prevValues) => ({
      email: "",
      password: "",
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prev) => ({
      ...prev,
      [identifier]: true,
    }));
  }
  return (
    <form onSubmit={handleSubmission}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => {
              handleInputChange(event.target.value, "email");
            }}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Email is not valid</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => {
              handleInputChange(event.target.value, "password");
            }}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button
          className="button button-flat"
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
        <button className="button" type="submit">
          Login
        </button>
      </p>
    </form>
  );
}
