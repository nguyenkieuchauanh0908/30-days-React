import { useState } from "react";
import Input from "./Input";
import {
  isEmail,
  isEqualsToOtherValue,
  isNotEmpty,
  hasMinLength,
} from "../util/validation";
import { useInput } from "../hooks/useInput";
export default function StateLogin() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailIsInvalid,
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  });

  const {
    value: pwValue,
    handleInputChange: handlePwChange,
    handleInputBlur: handlePwBlur,
    hasError: passwordIsInvalid,
  } = useInput("", (value) => {
    return hasMinLength(value, 8);
  });

  function handleSubmission(event) {
    event.preventDefault();
    if (!passwordIsInvalid && !emailIsInvalid) {
      console.log(emailValue, pwValue);
    } else {
      return;
    }
  }

  function handleReset() {
    setEnteredValues((prevValues) => ({
      email: "",
      password: "",
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
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          error={passwordIsInvalid && "Password is invalid"}
          onBlur={handlePwBlur}
          onChange={handlePwChange}
          value={pwValue}
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
