# About ReactJS and this repo:

👉 React is a widely used library for web and native user interfaces allowing developers to build user interfaces out of individual pieces called components and then combine them into entire screens, pages, and apps.
👉 This repo records my 30-day journey with ReactJS (from core concepts like components, hooks, props drilling, ref and portal, working with forms and HTTP requests, etc... to more advanced ones such as Context, Redux, React Router, React Query, JWT Authentication, NextJS)
It can also be used as a reference for anyone who needs a detailed plan to learn React quickly.

👉 **Important note:** This repo is not a ReactJS official doc but only for reference purposes. I highly recommend you visit the latest doc released from the <a href='https://react.dev/'>React official doc</a> and their <a href='https://github.com/reactjs/react.dev'>GitHub repo</a>. Besides, contents that are marked as **Optional** can be skipped if you've been already familiar while ones that are marked as **Extended** are not necessary to study immediately (you can skip them if you don't have time now but you can come back later)

# Content

## Day 1: Javascript, HTML, CSS Refresher (**Optional**)

- Because React is a library built from Javascript, having foundational knowledge in JS is a must. However, you don't need to be an expert in JS to start with React. For those who have been already working around with other languages and get used to the core concepts of programming such as variables, loops, functions, modules, etc... You can jump into React quite in just a day or two. For beginners who have no prior programming experience, this can take a bit longer. I highly recommend this <a href='https://github.com/Asabeneh/30-Days-Of-JavaScript'>30-Days-Of-Javascript</a> (you don't need to follow all of these to start with React).
- You should also know HTML and CSS for styling purposes (These can be taken along the way but prior experience is a benefit)

  ### Outcome: Make sure you know at least these concepts of JS before jumping into React:

  #### 👉 Global and Local Variables (the difference of var, let, const in terms of scope):

  - <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let'>Read more about let</a>
  - <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const'>Read more about const</a>

  #### 👉 Functions in Javascript:

  - Function Declaration
  - Function Expression
  - Arrow Function
    <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions'>Official doc</a> and <a href='https://www.w3schools.in/javascript/types-of-functions'>here</a>

  #### 👉 Working with an array in JS:

  - map()
  - reduce()
  - filter()
  - find(), findIndex(), findLast(), ...
  - forEach()
  - slice(), spice(), concat()
  - push(), pop(), unshift()
    <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'>See more here</a>

  #### 👉 Import and Export module:

  - Named Import/Export
  - Default Import/Export
    <a href='https://medium.com/@heshramsis/understanding-the-difference-between-export-default-and-export-with-named-exports-in-javascript-f0569c221a3'>
    See more here</a> (You can also check it out in the official doc but I feel this can be fuzzy sometimes)

  #### 👉 Spread and Destructuring

  - New feature in ES6 but need to know
  - See more here: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax'>Spread</a> and here <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'>Destructuring</a

  #### 👉 Classes (Optional):

  - You can skip this if you already have a foundation in OOP or are beginner (In fact, not a lot of projects in Reacts use classes after the advent of hooks so you can come back to it later)
    <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes'>See more here</a>

## Day 2: ReactJS Key Concepts

### Configuration and installation

- please follow from <a href='https://react.dev/learn/installation'>Installation</a>

### Outcome: Make sure to grab the core concepts of React (You'll see the concepts in all React projects later on):

#### 👉 <a href='https://react.dev/learn/importing-and-exporting-components'>Create/Import/Export a component</a> and <a href='https://react.dev/learn/writing-markup-with-jsx'>writing markup with JSX/Writing JS in JSX</a>

- Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output

```ruby
fucntion Welcome() {
    return <h1>Hello, World!</h1>;
}
```

- Basically, JSX Return (potentially dynamic) HTML code to define the actual markup that will be rendered.

#### 👉 The client-side rendering (CSR) vs server-side rendering (SSR)

- CSR: the web page is initially loaded with a minimal HTML shell, and then JavaScript. The browser downloads the necessary JavaScript, and the rendering takes place on the client side allowing a rich user experience, reducing server load time, and dynamic data. However, this can slower the initial page load and be a challenge to SEO.
- SSR: the server generates and sends fully rendered HTML pages to the browser for every request. The rendering happens on the server side, and the client receives a fully populated HTML document. This allows faster initial page loads and better SEO. However, this also means higher server load and state management complexity.
  - Hybrid approach: NextJS.

#### 👉 Props: Pass Props to component/Props syntax

- Make components configurable (and therefore reusable) by passing input data to them. Props can be anything from string, object, array, and even handler functions or another component (children props)

```ruby
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

#### 👉 <a href='https://react.dev/learn/conditional-rendering'>Conditional Rendering</a>

- Ternary Operator

```ruby
{condition ? <Component1 /> : <Component2 />}
```

- <code>&&</code> operator

```ruby
{condition && <Component />}
```

- <code> if-else</code> statement (tends to be used outside of JSX)

```ruby
  if (condition) {
    return <Component1 />;
  } else {
    return <Component2 />;
  }
```

#### 👉 <a href='https://react.dev/learn/rendering-lists'>Rendering a list with map()</a>

```ruby
<ul>
  {users.map(user => (
    <li key={user.id}>{user.name}</li>  // Rendering each user name as a list item
  ))}
</ul>
```

#### 👉 Practice

<a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Essential%20Core%20Concepts/Core%20Concept%20Practice/01-starting-project'>Practice Project to refer</a>

## Day 3: ReactJS Key Concepts

### Outcome:

#### 👉 Manage states with useState(): <a href='https://react.dev/learn/managing-state'>Managing State

```ruby
  import React, { useState } from 'react';
  const [state, setState] = useState(initialState);
```

In which:

<code>state</code>: the current state value

<code>setState</code>: a function to update the state

<code>initialState</code>: the initial state value

#### 👉 Responding to an <a href='https://react.dev/learn/responding-to-events'>event/event handling </a>

This can simply be done by adding event handlers as below:

```ruby
const [count, setCount] = useState(0);
const btnClick = (countNumber) => {setCount(prevCount => prevCount + countNumber)}
<button onClick={()=>{btnClick(1)}}>Increment</button>
```

#### 👉 Lifting-up-states technique

- When two or more components need to share the same piece of data, instead of duplicating the state in each component, you can <a href='https://react.dev/learn/sharing-state-between-components'>lift the state up</a> to their nearest common ancestor and manage it from there.

#### 👉 'children' prop, forwarding props to the inner component

- The <a href='https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children'>children prop</a>is a special prop that allows you to pass child elements or components into a parent component.
- Sometimes, passing props become repetitive and cumbersome. In that case, spread syntax can be used to reduce the amount of code to write (but need to be careful when using them). <a href='https://react.dev/learn/passing-props-to-a-component#forwarding-props-with-the-jsx-spread-syntax'>See more </a>

#### 👉 Practice

<a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Essential%20Core%20Concepts/Tic%20Tac%20Toe/07-tic-tac-toe-starting-project'>Practice Project 1</a>
<a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/d0bf552d37277f9908a3cb0fdf744f45c7597ca6/Essential%20Core%20Concepts/Investment%20App/01-starting-project'>Practice Project 2</a>

## Day 4: Styling ReactJS (**Optional**)

### Outcome:

#### 👉 Conditional Styling (Inline and CSS files)

```ruby
import React, { useState } from 'react';
import './App.css'; // Importing the CSS file for class-based styling
const App = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
  setIsToggled(prevState => !prevState);
  };

  <button
  onClick={handleToggle}
  style={{
          backgroundColor: isToggled ? 'green' : 'red',  // Dynamic inline style
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '5px',
        }}
  className={isToggled ? 'button-on' : 'button-off'} // Conditional class >
  {isToggled ? 'ON' : 'OFF'} {/_ Dynamic text _/}
  </button>
}
```

#### 👉 Scoping CSS with CSS module

- CSS Module files are typically named with the extension <code>.module.css</code> to indicate that the CSS should be treated as a module, this means that each CSS class is scoped locally to the component, which eliminates style collisions.

```ruby
import React from 'react';
import styles from './Button.module.css'; // Import the CSS Module

const Button = ({ isDisabled, label }) => {
  return (<button className={isDisabled ? styles.buttonDisabled : styles.button} disabled={isDisabled}
    >
      {label}
    </button>)
}
export default Button;

```

#### 👉 <a href='https://tailwindcss.com/docs/installation'>TailwindCSS</a>

#### 👉 Practice

<a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Styling/01-starting-project'>Practice Project to refer</a>

## Day 5: Ref - Portal

### Outcome:

#### 👉 Working with <a href='https://react.dev/learn/referencing-values-with-refs'>Ref</a> and <a href='https://react.dev/reference/react-dom/createPortal'>Portal</a>

- Ref provides a way to access the DOM node or React elements created by a component.<code>useRef</code> hook is commonly used in function components.

```ruby
import React, { useRef } from 'react';

const InputFocusExample = () => {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();  // Access the input element via ref
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={handleFocus}>Focus the Input</button>
    </div>
  );
};

export default InputFocusExample;

```

- Portals are a method to render children into a DOM node that exists outside the hierarchy of the parent component. Portals allow you to break out of the normal DOM hierarchy, which can be useful in situations where you need to render content at a different part of the DOM tree, such as modals, tooltips, or dropdowns.

```ruby
<body>
  <div id="root"></div>
  <div id="modal-root"></div> <!-- This is where the modal will be rendered -->
</body>
```

```ruby
const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')  // Render inside #modal-root
  );
};
```

#### 👉 <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Ref%20Portal'>Practice Project to refer

## Day 6 + 7 + 8 + 9 + 10 + 11: Practice Core Concepts of React

### Outcome:

#### 👉 <a href='https://react.dev/reference/react/useEffect'>useEffect </a> to handle side effect, clean up function

- sideEffects typically refer to actions that affect things outside the scope of the current function, such as API calls, timers, or directly updating the DOM
  Example using React to fetch data from an API (Most frameworks based on React offer more flexible and efficient ways to call API)

```ruby
useEffect(() => {
fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => {
console.log(data);
});
}, []);
```

Example using React to handle side-effects

```ruby
useEffect(() => {
  const timer = setTimeout(() => {
      console.log('Timer running');
  }, 1000);

  return () => clearTimeout(timer); // Cleanup the timer when component unmounts
}, []);
```

- The second argument of <code>useEffect</code> specify dependencies of useEffect. The effect will run when any of the dependencies changes. In case it is an empty array, the effect will run only once when the component amounted.

### 👉 Practice React Key Concepts

<a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Practice%20Projects/Essentials/Task%20Management/01-starting-project'>Practice Project 1</a> <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Practice%20Projects/Essentials/QuizzApp/01-starting-project'>Practice Project 2</a>

## Day 12: Advanced State Management with Context

### Outcome:

#### 👉 <a href='https://react.dev/learn/passing-data-deeply-with-context#the-problem-with-passing-props'>Props drilling</a> problem

- Props drilling in React refers to the situation where you have to pass data through multiple layers of components, even though not all intermediate components need that data
- This leads to cluttered and hard-to-maintain code

#### 👉 Creating and Providing Context/Consuming <a href='https://react.dev/learn/passing-data-deeply-with-context'> Context</a>

- Import

```ruby
import { createContext, useContext } from 'react';
```

- Create a context

```ruby
const UserContext = createContext();
```

- Provide a context

```ruby
<UserContext.Provider value={userName}>
  <ParentComponent />
</UserContext.Provider>
```

- Consume context in deep-level component

```ruby
const ParentComponent = () => {
return <ChildComponent />;
};

const ChildComponent = () => {
  return <GrandChildComponent />;
};

const GrandChildComponent = () => {
  const userName = useContext(UserContext);  // Access the context value
  return <h1>Hello, {userName}!</h1>;
};

```

#### 👉 <a href='https://react.dev/learn/scaling-up-with-reducer-and-context'>useReducer</a> hook

- The <code>useReducer</code> hook in React is an alternative to useState when you have more complex state logic, such as multiple pieces of state that rely on each other, or when you need to manage state transitions more explicitly. It is commonly used when you need a predictable way to handle state updates in a functional component, much like Redux but on a smaller scale.
- Define a reducer

```ruby
function reducer(state, action) {
switch (action.type) {
case 'increment':
return { count: state.count + 1 };
case 'decrement':
return { count: state.count - 1 };
default:
throw new Error();
}
}
```

- use useReducer

```ruby
const Counter = () => {
  // Use useReducer with the reducer function and initial state of { count: 0}
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
      Count: {state.count}
      // dispatch is the function that trigger the reducer function with corresponding action type
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>

  );
};
```

#### 👉 <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Context%20useReducer/01-starting-project'>Practice Project to refer</a>

## Day 13: Http Request + Custome React Hook

### Outcome:

#### 👉 Sending HTTP Request with methods GET, POST, DELETE, PATCH to backend

- This can be done with <code>useEffect</code> as shown in Day 6. However, as I said before, frameworks like Next or other libraries used with React provide more flexible and efficient methods to deal with HTTP requests. (You can refer to how I deal with that by <code>useEffect</code> in my reference project below)

#### 👉 Handling loading state/HTTP errors

#### 👉 Why to build custom hooks? <a href='https://react.dev/reference/rules/rules-of-hooks'>Rules</a> to build custom React hooks

- In React, a custom hook is a JavaScript function that allows you to reuse logic between components. Custom hooks make use of React’s built-in hooks like useState, useEffect, useReducer, etc., but allow you to encapsulate and share complex logic between components in a clean and reusable way.
- Rules: hooks must be called on the top level and only be called in React functions
- Simple custom hooks example that manage form input

```ruby
import { useState } from 'react';
// Custom hook to manage form input
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  // Function to handle changes in the input field
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // Function to reset the input field
  const reset = () => {
    setValue(initialValue);
  };
  // Return the value, handleChange function, and reset function
  return {
    value,
    onChange: handleChange,
    reset,
  };
}
export default useFormInput;
```

and use a custom hook in the component:

```ruby
import React from 'react';
import useFormInput from './useFormInput';

const MyForm = () => {
  // Using the custom hook for input fields
  const name = useFormInput('');
  const email = useFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name.value}, Email: ${email.value}`);
    // Reset input fields after submission
    name.reset();
    email.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" {...name} />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" {...email} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
```

#### 👉 <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/HttpRequest/01-starting-project'>Practice Project to refer</a>

## Day 14: Working with form and user's input

### Outcome:

#### 👉 Different Techniques to work with form and user' input:

- Generic Handler with <code>useState</code>
- Getting Input Values via Ref
- Getting Input values via FormData and Browser API
  ...

#### 👉 <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Forms/01-starting-project'>Practice Project to refer </a>

## Day 15 + 16: Practice Context, useReducer, Ref, Portal, HttpRequest, Custom Hook, Form

### Outcome:

#### 👉 <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Practice%20Projects/FoodOrderApp/01-starting-project'>Practice Project to refer </a>

## Day 17 + 18: <a href='https://redux.js.org/introduction/getting-started'>Redux</a> (**Extended**)

### Outcome:

#### 👉 What is Redux

- Redux is a state management library that is commonly used in React applications to manage the global state in a predictable way.
- It is especially useful for larger applications where multiple components need to access and update shared state. Redux provides a single source of truth (a global store) and allows components to interact with that store through actions and reducers.
- In modern React development, you often use Redux Toolkit to simplify the boilerplate that comes with Redux. Redux Toolkit provides better abstractions for creating slices (reducers + actions) and configuring the store with built-in middleware.

```ruby
npm install @reduxjs/toolkit react-redux
```

#### 👉 Context vs Redux

- <code>useContext</code> is suitable for small to medium-sized apps with less complex state management needs while Redux is ideal for large applications with complex state that needs to be shared between many components.
- In terms of performance, when the context value changes, it can cause all components that consume that context to re-render, which can lead to performance issues if not managed carefully. In contrast, Redux uses a selector pattern to optimize performance and avoid unnecessary re-renders. With <code>useSelector</code>, components will only re-render when the specific part of the state they are interested in changes.

#### 👉 Redux Store, Actions, Slices...

- Create a slice and store:

```ruby
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
  }
});

export const { increment, decrement } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
```

- Provide store to App component

```ruby
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;

```

- Access to state and actions of the store from component

```ruby
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
```

#### 👉 <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Practice%20Projects/Anvanced%20Redux/01-starting-project'>Practice Project to refer</a>

## Day 19 + 20: <a href='https://reactrouter.com/en/main/start/tutorial'>React Router</a>

### Outcome:

#### 👉 Defining <a href='https://reactrouter.com/en/main/route/route'>Route

#### 👉 Working with important concepts like: <a href='https://reactrouter.com/en/main/route/loader'>loader</a>, <a href='https://reactrouter.com/en/main/route/action'>action</a>, <a href='https://reactrouter.com/en/main/route/error-element'>error element</a>, <a href='https://reactrouter.com/en/main/route/lazy'>lazy loading</a>, <a href='https://reactrouter.com/en/main/guides/deferred'> defer data</a>

#### 👉 Get familiar with hooks in router such as <a href='https://react.dev/learn/sharing-state-between-components'>useActionData</a>, <a href='https://reactrouter.com/en/main/hooks/use-form-action'>useFormActionData</a>, <a href='https://reactrouter.com/en/main/hooks/use-loader-data'>useLoaderData</a>, <a href='https://reactrouter.com/en/main/hooks/use-location'>useLocation</a>, <a href='https://reactrouter.com/en/main/hooks/use-location'>useNavigate</a>, <a href='https://reactrouter.com/en/main/hooks/use-navigation'>useNavigation</a>, <a href='https://reactrouter.com/en/main/hooks/use-outlet'>useOutlet</a>, <a href='https://reactrouter.com/en/main/hooks/use-params'>useParam</a>, <a href='https://reactrouter.com/en/main/hooks/use-search-params'>useSearchParams</a>, <a href='https://reactrouter.com/en/main/hooks/use-submit'>useSubmit</a>, <a href='https://reactrouter.com/en/main/hooks/use-routes'>useRoutes</a>, <a href='https://reactrouter.com/en/main/hooks/use-submit'>useSubmit</a>

#### 👉 <a href='>

## Day 21: Authentication (**Extended**)

### Outcome

#### 👉 Understand <a href='https://jwt.io/introduction'>Json Web Token (JWT) and why it is used for authentication</a>

- A JWT (JSON Web Token) is an open standard (RFC 7519) used for securely transmitting information between parties as a JSON object. It is commonly used in authentication and authorization systems, especially in modern web applications.

#### 👉 Using a token from BE to validate the user and send the token along with API to get permission to access resources

```ruby
Authorization: Bearer <token>
```

#### 👉 Practice React Router and Authentication: <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/main/Authentication/01-starting-project'>Practice Project to refer</a>

## Day 22 + 23: <a href='https://tanstack.com/query/latest/docs/framework/react/installation'>React Query</a> (**Extended**)

#### Outcome

### 👉 <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/main/React%20Query/starting-project'>Practice Project to refer</a>

## Day 24 + 25 + 26: Expanding to <a href='https://nextjs.org/docs'>NextJS</a> (**Extended**)

- This is a extremely extended part. Because this repo is mainly about React, I will not share deeply about NextJS. However, if you are already have a valid foundation of React, move to NextJS is quite an easy move. I will soon come up with a new repo with NextJS in the near future. (For now, you can have a quick glance at my practice project)

### 👉 Outcome

#### 👉 <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Expanding%20to%20NextJS/NextJS%20-%20App%20Router/05-onwards-foodies-starting-project'>Practice Project App Router</a> and <a href='>https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Expanding%20to%20NextJS/NextJS%20-%20Page%20Router/MeetUp%20App/06-onwards-to-a-bigger-project-starter'>Practice Project Page Router</a>

## Day 27: React with <a href='https://www.typescriptlang.org/docs/'>Typescript</a> (**Optional**)

- This is optional but I highly recommend you to use Typescript (most project now use them due to error detection, improved IDE support and better code maintenance). If you are already a JavaScript developer, migrating to Typescript is not so difficult. Check out their <a href='https://www.typescriptlang.org/docs/'> </a> for more information.

## Day 28: Best Practices (**Extended**)

## Day 29: Summary

## Day 30: Summary

# Guide to running practice projects

You will see that at almost sections, I attach links leading to the project to refer. You can not directly download from these. I reccommend you to use them for reference only and should have projects of your own, or do it by yourself before seeing solutions. To run these projects:

1. Clone this repository

```ruby
git clone https://github.com/nguyenkieuchauanh0908/30-days-React.git
```

2. Go to the folder included my practice project and follow the instructions from README.md of that project to run it.
