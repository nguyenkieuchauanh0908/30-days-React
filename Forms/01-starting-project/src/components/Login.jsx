import { useState, useRef } from "react";
export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const email = useRef();
  const password = useRef();
  function handleSubmission(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    const emailIsInvalid = !enteredEmail.includes("@");
    if (emailIsInvalid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);
    console.log("Sending http request to...");
  }

  function handleReset() {
    email.current.value = "";
    password.current.value = "";
  }

  return (
    <form onSubmit={handleSubmission}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>Email is not valid</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
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
        <button className="button">Login</button>
      </p>
    </form>
  );
}
