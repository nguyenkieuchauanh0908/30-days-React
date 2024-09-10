# About ReactJS and this repo: 
<p>👉 React is a widely used library for web and native user interfaces allowing developers to build user interfaces out of individual pieces called components and then combine them into entire screens, pages, and apps. </p>
<p>👉 This repo records my 30-day journey with ReactJS (from core concepts like components, hooks, props drilling, ref and portal, working with forms and HTTP requests, etc... to more advanced ones such as Context, Redux, React Router, React Query, JWT Authentication, NextJS) 
It can also be used as a reference for anyone who needs a detailed plan to learn React quickly. </p>

👉***Important note:*** This repo is not a ReactJS official doc but only for reference purposes. I highly recommend you visit the latest doc released from the React team: https://react.dev/ and their GitHub repo can be found here: https://github.com/reactjs/react.dev.
Besides, contents that are marked as **Optional** can be skipped if you've been already familiar while ones that are marked as **Extended** are not necessary to study now (you can skip if you don't have time but you can come back later)
# Content
## Day 1: Javascript, HTML, CSS Refresher (**Optional**)
- Because React is a library built from Javascript, having foundational knowledge in JS is a must. However, you don't need to be an expert in JS to start with React. For those who have been already working around with other languages and get used to the core concepts of programming
such as variables, loops, functions, modules, etc... You can jump into React quite in just a day or two. For beginners who have no prior programming experience, this can take a bit longer. I highly recommend this repo for reference: https://github.com/Asabeneh/30-Days-Of-JavaScript (you don't need to follow all of these to start with React).
You should also know HTML and CSS for styling purposes (These can be taken along the way but prior experience is a benefit)
- Outcome: Make sure you know at least these concepts of JS before jumping into React:
  <div>
    <p>👉 Global and Local Variables (the difference of var, let, const in terms of scope): </p>
    <p>- Read more about let: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let</p>
    <p>- Read more about const: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const</p>
  </div>
   
  <div>
    <p>👉 Functions in Javascript: There are three main types of functions that you'll see all the time:</p>
    <p>- Function Declaration</p>
    <p>- Function Expression</p>
    <p>- Arrow Function</p>
    See more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions and here: https://www.w3schools.in/javascript/types-of-functions
  </div>

  <div>
    <p>👉 Working with an array in JS: Besides basic concepts such as loop, there are built-in methods that you must know</p>
    <p>- map()</p>
    <p>- reduce() </p>
    <p>- filter()</p>
    <p>- find(), findIndex(), findLast(), ...</p>
    <p>- forEach()</p>
    <p>- slice(), spice(), concat()</p>
    <p>- push(), pop(), unshift()</p>
    See more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  </div>

   <div>
    <p>👉 Import and Export module: You would work with components a lot in React so knowing how to import and export is a must</p>
    <p>- Named Import/Export</p>
    <p>- Default Import/Export</p>
    See more here: https://medium.com/@heshramsis/understanding-the-difference-between-export-default-and-export-with-named-exports-in-javascript-f0569c221a3 (You can also check it out in the official doc but I feel this can be fuzzy sometimes)
  </div>

  <div>
    <p>👉 Spread and Destructuring: New feature in ES6 but need to know</p>
    See more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax and here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  </div>

  <div>
     <p>👉 Classes: (Optional) You can skip this if you already have a foundation in OOP or are beginners (In fact, not a lot of projects in Reacts use classes after the advent of hooks so you can come back to it later)</p>
    See more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
  </div>
  
## Day 2: ReactJS Key Concepts
- For configuration and installation of a React project, please follow from: https://react.dev/learn/installation
- Make sure to grab the core concepts of React (You'll see the concepts in all React projects later on):
  <p>👉 JSX and React Components: Create/Import/Export a component writing markup with JSX/Writing JS in JSX</p>
  <p>👉 The building process of a React app: the <App /> components/ client-side rendering vs server-side rendering</p>
  <p>👉 Props: pass Props to component/Props syntax</p>
  <p>👉 Conditional Rendering with **&&** and **?:** operators</p>
  <p>👉 Rendering a list with map()</p>
  <p>Practice Project to refer: </p>  
    [Practice Project](https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Essential%20Core%20Concepts/Core%20Concept%20Practice/01-starting-project)
## Day 3: ReactJS Key Concepts
<p>👉 Manage states with useState(): how useState() works?</p>
<p>👉 Responding to an event/event handling </p>
<p>👉 More about component: Lifting-up-states technique (share states between components), Passing Props which are functions to child component, 'children' prop, forwarding props to inner component, make resuable components </p>
<p>Practice Project to refer: </p>  
    [Practice Project](https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Essential%20Core%20Concepts/Tic%20Tac%20Toe/07-tic-tac-toe-starting-project)
## Day 4: Styling ReactJS (**Optional**)
<p>👉Dynamic & Conditional Styling (Inline and CSS files)</p>
<p>👉Scoping CSS with CSS module</p>
<p>👉TailwindCSS</p>
<p>Practice Project to refer: </p>  
    [Practice Project](https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Styling/01-starting-project)
## Day 5: Ref - Portal
<p>👉Working with Ref and Portal</p>
<p>Practice Project to refer: </p>  
    [Practice Project](hhttps://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Ref%20Portal)

## Day 6 + 7 + 8 + 9 + 10 + 11: Practice Core Concepts of React
<p>👉useEffect() hook to handle side effect, clean up function
<p>Practice Project to refer: </p>  
    [Practice Project 1](https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Practice%20Projects/Essentials/Task%20Management/01-starting-project)
    [Practice Project 2](https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Practice%20Projects/Essentials/QuizzApp/01-starting-project)
  
## Day 12: Advanced State Management with Context
<p>👉Props drilling problem</p>
<p>👉Creating and Providing Context/Consuming Context</p>
<p>👉useReducer hook</p>
<p>Practice Project to refer: </p>  
    [Practice Project](https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Context%20useReducer/01-starting-project)

## Day 13: Http Request + Custome React Hook
<p>👉Sending Http Request with methods GET, POST, DELETE, PATCH to backend</p>
<p>👉Handling loading state/Http errors</p>
<p>👉Why to build custom hooks?Rules to build custom React hooks</p>
<p>Practice Project to refer: </p>  
    [Practice Project](https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/HttpRequest/01-starting-project)

## Day 14: Working with form and user's input
<p>👉Diferent Techniques to work with form and user' input</p>
<p>Practice Project to refer: </p>  
    [Practice Project](https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Forms/01-starting-project)

## Day 15 + 16: Practice Context, useReducer, Ref, Portal, HttpRequest, Custom Hook, Form
<p>Practice Project to refer: </p>  
    [Practice Project](https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Practice%20Projects/FoodOrderApp/01-starting-project)

## Day 17 + 18: Redux
<p>👉What is Redux</p>
<p>👉Context vs Redux</p>
<p>👉Redux Store, Actions, Spliting to Slices...</p>
<p>Practice Project to refer: </p>  
    [Practice Project 1](https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Practice%20Projects/Anvanced%20Redux/01-starting-project)

## Day 19 + 20: React Router

## Day 21: Authentication

## Day 22 + 23: React Query

## Day 24 + 25 + 26: Expanding to NextJS

## Day 27: React with Typescript

## Day 28: Practice

## Day 29: Practice

## Day 30: Wrap up

