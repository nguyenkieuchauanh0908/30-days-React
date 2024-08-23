import { useState } from "react";
import Input from "./Input";
import {
  isEmail,
  isEqualsToOtherValue,
  isNotEmpty,
  hasMinLength,
} from "../util/validation";
export default function StateLogin() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValues.password, 8);
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
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          error={emailIsInvalid && "Email is invalid"}
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => {
            handleInputChange(event.target.value, "email");
          }}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          error={passwordIsInvalid && "Password is invalid"}
          onBlur={() => handleInputBlur("password")}
          onChange={(event) => {
            handleInputChange(event.target.value, "password");
          }}
          value={enteredValues.password}
        />
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
