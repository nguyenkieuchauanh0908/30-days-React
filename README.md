# About ReactJS and this repo:

<p>👉 React is a widely used library for web and native user interfaces allowing developers to build user interfaces out of individual pieces called components and then combine them into entire screens, pages, and apps. </p>
<p>👉 This repo records my 30-day journey with ReactJS (from core concepts like components, hooks, props drilling, ref and portal, working with forms and HTTP requests, etc... to more advanced ones such as Context, Redux, React Router, React Query, JWT Authentication, NextJS) 
It can also be used as a reference for anyone who needs a detailed plan to learn React quickly. </p>

👉**_Important note:_** This repo is not a ReactJS official doc but only for reference purposes. I highly recommend you visit the latest doc released from the <a href='https://react.dev/'>React official doc</a> and their <a href='https://github.com/reactjs/react.dev'>GitHub repo</a>. Besides, contents that are marked as **Optional** can be skipped if you've been already familiar while ones that are marked as **Extended** are not necessary to study immediately (you can skip them if you don't have time now but you can come back later)

# Content

## Day 1: Javascript, HTML, CSS Refresher (**Optional**)

- Because React is a library built from Javascript, having foundational knowledge in JS is a must. However, you don't need to be an expert in JS to start with React. For those who have been already working around with other languages and get used to the core concepts of programming
  such as variables, loops, functions, modules, etc... You can jump into React quite in just a day or two. For beginners who have no prior programming experience, this can take a bit longer. I highly recommend this <a href='https://github.com/Asabeneh/30-Days-Of-JavaScript'>30-Days-Of-Javascript</a> (you don't need to follow all of these to start with React).
  You should also know HTML and CSS for styling purposes (These can be taken along the way but prior experience is a benefit)
- Outcome: Make sure you know at least these concepts of JS before jumping into React:
  <div>
    <p>👉 Global and Local Variables (the difference of var, let, const in terms of scope): </p>
    <p><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let'>Read more about let</a> and <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const'>Read more about const</a></p>
  </div>
   
  <div>
    <p>👉 Functions in Javascript: </p>
    <p>- Function Declaration</p>
    <p>- Function Expression</p>
    <p>- Arrow Function</p>
    <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions'>Official doc</a> and <a href='https://www.w3schools.in/javascript/types-of-functions'>here</a>
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
    <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'>See more here</a>
  </div>

   <div>
    <p>👉 Import and Export module: You would work with components a lot in React so knowing how to import and export is a must</p>
    <p>- Named Import/Export</p>
    <p>- Default Import/Export</p>
    <a href='https://medium.com/@heshramsis/understanding-the-difference-between-export-default-and-export-with-named-exports-in-javascript-f0569c221a3'>
    See more here</a>  (You can also check it out in the official doc but I feel this can be fuzzy sometimes)
  </div>

  <div>
    <p>👉 Spread and Destructuring: New feature in ES6 but need to know</p>
    See more here: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax'>Spread</a> and here <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'>Destructuring</a
  </div>

  <div>
     <p>👉 Classes: (Optional) You can skip this if you already have a foundation in OOP or are beginners (In fact, not a lot of projects in Reacts use classes after the advent of hooks so you can come back to it later)</p>
    <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes'>See more here</a>
  </div>

## Day 2: ReactJS Key Concepts

- For configuration and installation of a React project, please follow from <a href='https://react.dev/learn/installation'>Installation</a>
- Outcome: Make sure to grab the core concepts of React (You'll see the concepts in all React projects later on):
    <p>👉 JSX and React Components: <a href='https://react.dev/learn/importing-and-exporting-components'>Create/Import/Export a component</a> and <a href='https://react.dev/learn/writing-markup-with-jsx'>writing markup with JSX/Writing JS in JSX</a></p>
    <p>👉 The building process of a React app: the <App /> components/ client-side rendering vs server-side rendering</p>
    <p>👉 Props: pass Props to component/Props syntax</p>
    <p>👉 <a href='https://react.dev/learn/conditional-rendering'>Conditional Rendering</a></p>
    <p>👉 <a href='https://react.dev/learn/rendering-lists'>Rendering a list with map()</a></p>
    <p><a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Essential%20Core%20Concepts/Core%20Concept%20Practice/01-starting-project'>Practice Project to refer</a></p>  

## Day 3: ReactJS Key Concepts
- Outcome:
    <div>
    <p>👉 Manage states with useState(): <a href='https://react.dev/learn/managing-state'>Managing State</p>
    <p>👉 Responding to an <a href='https://react.dev/learn/responding-to-events'>event/event handling </a></p>
    <p>👉 More about component: Lifting-up-states technique (<a href='https://react.dev/learn/sharing-state-between-components'>share states between components</a>), <a href='https://react.dev/learn/passing-props-to-a-component'>Passing Props which are functions to child component, 'children' prop, forwarding props to inner component, make resuable components</a></p>
    <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Essential%20Core%20Concepts/Tic%20Tac%20Toe/07-tic-tac-toe-starting-project'>Practice Project to refer</a>  
    </div>

## Day 4: Styling ReactJS (**Optional**)

- Outcome:
    <div>
    <p>👉Dynamic & Conditional Styling (Inline and CSS files)</p>
    <p>👉Scoping CSS with CSS module</p>
    <p>👉<a href='https://tailwindcss.com/docs/installation'><TailwindCSS</a></p>
    <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Styling/01-starting-project'>Practice Project to refer</a>  
    </div>

## Day 5: Ref - Portal

- Outcome:
    <div>
    <p>👉Working with <a href='https://react.dev/learn/referencing-values-with-refs'>Ref</a> and <a href='https://react.dev/reference/react-dom/createPortal'>Portal</a></p>
    <p><a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Ref%20Portal'>Practice Project to refer </p>  
    </div>

## Day 6 + 7 + 8 + 9 + 10 + 11: Practice Core Concepts of React

- Outcome:
    <div>
    <p>👉<a href='https://react.dev/reference/react/useEffect'>useEffect </a> to handle side effect, clean up function</p>
    <p>👉Practice React Key Concepts</p>
    <p>Practice Project to refer: <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Practice%20Projects/Essentials/Task%20Management/01-starting-project'>Practice Project 1</a> <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Practice%20Projects/Essentials/QuizzApp/01-starting-project'>Practice Project 2</a></p>  
    </div>

## Day 12: Advanced State Management with Context

- Outcome:
    <div>
    <p>👉<a href='https://react.dev/learn/passing-data-deeply-with-context#the-problem-with-passing-props'>Props drilling</a> problem</p>
    <p>👉Creating and Providing Context/Consuming <a href='https://react.dev/learn/passing-data-deeply-with-context'> Context</a></p>
    <p>👉<a href='https://react.dev/learn/scaling-up-with-reducer-and-context'>useReducer</a> hook</p>
    <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Context%20useReducer/01-starting-project'>Practice Project to refer</a>
    </div>

## Day 13: Http Request + Custome React Hook

- Outcome:
    <div>
    <p>👉Sending Http Request with methods GET, POST, DELETE, PATCH to backend</p>
    <p>👉Handling loading state/Http errors</p>
    <p>👉Why to build custom hooks? <a href='https://react.dev/reference/rules/rules-of-hooks'>Rules</a> to build custom React hooks</p>
    <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/HttpRequest/01-starting-project'>Practice Project to refer</a>  
    <div>

## Day 14: Working with form and user's input

- Outcome:
    <div>
    <p>👉Diferent Techniques to work with form and user' input: Generic Handler with useState, Getting Input Values via Ref, Geeting Input values via FormData and Browser API </p>
    <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Forms/01-starting-project'>Practice Project to refer </a>  
    </div>

## Day 15 + 16: Practice Context, useReducer, Ref, Portal, HttpRequest, Custom Hook, Form

- Outcome:
    <div>
    <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Practice%20Projects/FoodOrderApp/01-starting-project'>Practice Project to refer </a>  
    </div>

## Day 17 + 18: <a href='https://redux.js.org/introduction/getting-started'>Redux</a> (**Extended**)

- Outcome:
    <div>
    <p>👉What is Redux</p>
    <p>👉Context vs Redux</p>
    <p>👉Redux Store, Actions, Spliting to Slices...</p>
    <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Practice%20Projects/Anvanced%20Redux/01-starting-project'>Practice Project to refer</a>
    </div>

## Day 19 + 20: <a href='https://reactrouter.com/en/main/start/tutorial'>React Router</a>

- Outcome:
    <div>
    <p>👉 Defining <a href='https://reactrouter.com/en/main/route/route'>Route</p>
    <p>👉 Working with important concepts like: <a href='https://reactrouter.com/en/main/route/loader'>loader</a>, <a href='https://reactrouter.com/en/main/route/action'>action</a>, <a href='https://reactrouter.com/en/main/route/error-element'>error element</a>, <a href='https://reactrouter.com/en/main/route/lazy'>lazy loading</a>, <a href='https://reactrouter.com/en/main/guides/deferred'> defer data</a></p>
    <p>👉 Get familiar with hooks in router such as <a href='https://react.dev/learn/sharing-state-between-components'>useActionData</a>, <a href='https://reactrouter.com/en/main/hooks/use-form-action'>useFormActionData</a>, <a href='https://reactrouter.com/en/main/hooks/use-loader-data'>useLoaderData</a>, <a href='https://reactrouter.com/en/main/hooks/use-location'>useLocation</a>, <a href='https://reactrouter.com/en/main/hooks/use-location'>useNavigate</a>, <a href='https://reactrouter.com/en/main/hooks/use-navigation'>useNavigation</a>, <a href='https://reactrouter.com/en/main/hooks/use-outlet'>useOutlet</a>, <a href='https://reactrouter.com/en/main/hooks/use-params'>useParam</a>, <a href='https://reactrouter.com/en/main/hooks/use-search-params'>useSearchParams</a>, <a href='https://reactrouter.com/en/main/hooks/use-submit'>useSubmit</a>,  <a href='https://reactrouter.com/en/main/hooks/use-routes'>useRoutes</a>, <a hre='https://reactrouter.com/en/main/hooks/use-submit'>useSubmit</a></p>
    <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/4fd475dd3f33ea055b47f90b8c02ba06de53780b/Essential%20Core%20Concepts/Tic%20Tac%20Toe/07-tic-tac-toe-starting-project'>Practice Project to refer</a>  
    </div>

## Day 21: Authentication (**Extended**)

- Outcome
    <div>
    <p>👉 Understand <a href='https://jwt.io/introduction'>Json Web Token (JWT) and why it is used for authentication</a>
    <p>👉 Using token from BE to validate user and send token along with API to get permission to access resources</p>
    <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/main/Authentication/01-starting-project'>Practice Project to refer</a>  
    </div>

## Day 22 + 23: <a href='https://tanstack.com/query/latest/docs/framework/react/installation'>React Query</a> (**Extended**)

- Outcome
    <div>
    <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/main/React%20Query/starting-project'>Practice Project to refer</a>  
    </div>

## Day 24 + 25 + 26: Expanding to <a href='https://nextjs.org/docs'>NextJS</a> (**Extended**)

- Outcome
    <div>
    <a href='https://github.com/nguyenkieuchauanh0908/30-days-React/tree/main/Expanding%20to%20NextJS'>Practice Project to refer</a>  
    </div>

## Day 27: React with <a href='https://www.typescriptlang.org/docs/'>Typescript</a> (**Optional**)

## Day 28: Best Practices (**Extended**)

## Day 29: Practice

## Day 30: Practice

# Guide to run practice projects
