# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### The Need for State

. create count variable
. display value in JSX
. add button and increase value
. the reason for bug - we don't trigger re-render(reference next lecture)

## useState :

. returns an array with two elements; the current state value and a function that we can use to update the state.
. accepts default value as an argument
. state update triggers re-render

### Initial Render and Re-Renders

===> The initial render is the first time that the component tree is rendered to the DOM. It happens when the application first loads, or when the root component is first rendered. This is also known as 'mounting' the components.

===> Re-renders on the other hand, happen when the component's state or props change and the component needs to be updated in DOM to reflect these changes. React uses a virtual DOM to optimize the process of updating the actual DOM, so that only the necessary changes are made.
===> Few ways that we can trigger a re-render in a React component:

1. By changing the component's state or props. When the component's state or props change, React will re-render the component to reflect these changes.
2. When the parent element re-render, even if the component's state or props have not changed.

### General Rules of Hooks

1. starts with 'use'
2. component must be uppercase
3. invoke inside function/component body
4. don't call hooks conditionally
5. set functions don't update state immediately

<!-- Rendering the list -->

### Auto Batching

===> Batching refers to the process of grouping multiple state updates into a single update. This can be useful in certain case because it allows React to optimize the rendering of our components by minimizing the number of DOM updates that it has to perform.

By default, React uses a technique called "auto-batching" to group state updates that occur within the same event loop into a single update. This means if you call the state update function multiple times in a short period of time, React will only perform a single re-render for all of the updates.

React 18 ensures that state updates invoked from any location will be batched by default. This will batch state updates, including native event handlers, asynchronous operations, timeouts and intervals

###Gotcha
===> The state update function does not immediately mutate the state. It schedules an update to the state and tells React that it needs to re-render the component. The actual state update will be performed as part of the next rendering cycle. When we need to set the state values based on the state value so we have to be mindful.

## to update the state immediately and synchronously

We can pass a function to setState that receives the previous state as an arguments and returns the new state.

##### UseEffect :

    - is a hook in React that allows to perform side effects in a function components. Some examples of side effects are : subscriptions, fetching data directly updating DOM, event listeners, timers etc;

-- It accepts two arguments second one is optional.
-- First argument is callback function and second argument is dependency array.
-- by default runs on each render (initial and re-render)
-- if dependency array empty [] then it runs only on initial render.

#### Fetch DAta:

setup UseEffect(make sure it runs only on initial render) and stateValue
-- In the callback function, create a function which performs fetch functionality.
//Url provided and can use either .then or async
set users equal to result
iterate over the list and display image, user name and link

### Multiple Returns -Fetch Data

Setting up the challenge : ,practice on setting up state values and data fetching
.create state variable
.fetch data from the url
. if we see our user object in the console

## Data Fetching

..Usually three options

1. loading- waiting for data to arrive (display loading state);
2. error - there was an error (display error message)
3. success - received data (display data);

#### Fetch Errors Gotcha

Unlike for example axios, by default, the fetch() API does not consider HTTP status codes in the 4XX or 5XX range to be errors. Instead it considers these status codes to be indicative of a successful request.

## React Hook Rule

Don't call the hooks conditionally
do not place after the return

#### Truty and Falsy values:

Vanilla JS:
In Javascript, a value is considered "truthy" if it is evaluated to true when used in a boolean context. A value is considered "falsy" if it is evaluated to false when used in a boolean context.

false 0 (zero) "" (empty string) null undefined NaN (Not a Number ). All other values, including objects and arrays are considered truthy.

### Short Circuit Evaluation:

Short-circuit evaluation is a technique that allows you to use logical operators (such as && and ||) to perform conditional evaluations in a concise way.
The && operator (logical AND ) returns the first operand if it is "falsy", or the second operand if the first operand is "truthy".
The || operator (logical OR) returns the first operand if it is "truthy", or the second operand if the first operand is "falsy".

Short-circuit evaluation can be useful in cases where we want to perform a certain action only if a certain condition is met, or we want to return default value if the certain condition is not met.

## Ternary Operator:

In JavaScript, the ternary operator is a way to concisely express a simple conditional statement, often called conditional operator or ternary conditional operator.
condition ? exp1 : exp2
If condition is true, operator returns exp1 and if false return exp2

## Default Values

In JavaScript, when a function is defined we can specify default values for its parameters which if a caller of the function does not provide a value for a particular parameter, the default value will be used instead. Default parameters are defined by assigning a value to the parameter in function definition.

## Controlled Inputs

The official documentation defines controlled input as:

> > The React Component that renders an element also controls what happens in that element on subsequent user input. An input form element whose value is controlled by React in this way is called 'controlled inputs'
> >
> > > Two different concepts are important to make controlled inputs work:

Component state
onChange methods
To change the properties of React components, the creation of a new component object to replace the original is necessary.

## FormData API

-- It is a great solution when you have bunch of inputs
-- For this, inputs mush have name attribute
The FormData Interface provides a way to construct a set of key/values pairs representing form fields and their values, which can be sent using the fetch() or XMLHttpRequest.send() method. It uses the same format a form would use if the encoding type were set .

### Props Drilling:

      Passing props to the components that uses it is a great way to explicitly pipe data through your UI tree, but in the long run it will be verbose and inconvenient if we have to pass some prop deeply through the tree, or if many components need the same prop.
         The nearest common ancestor could be far removed from the components that need data and lifting state up that high can lead to prop drilling.

### Context API:

-- Context lets parent component make some information available to any component in the tree below it -- no matter how deep-- without passing it explicitly through props.

--- This can be done in three steps 1. Create a context. 2. Use that context from the component that needs the data. 3. Provide that context from the component that specifies data.

### UseReducer:

---- It is a hook in React that allows you to add a reducer to the component. It takes in the reducer function and an initialState as arguments. The useReducer also returns an array of the current state and a dispatch function.

     const [state, dispatch] = useReducer(reducer, initialState);


       .state: It represents the current value and is set to initialize value during the initial render
       .dispatch: It is a function that updates the state value and  always triggers a re-render, just like the updater function in useState.
       .reducer : is a function that houses all the logic of how the state gets updated, it takes state and action as arguments and returns the next state.
       .initialState: houses the initial value and can be of any type.

#### Lower State Challenge

When the component re-renders:

- when the component's state or props change, React will re-render the component to reflect these changes.
- when the parent element re-renders, even if the component's state or props have not changed.
- lower state

#### React.memo()

- It is a higher-order component (HOC) in React that allows you to memoize a component. This means that if the input props to the component have not changed, the memoized component will return the same result from the previous render by avoiding unnecessary render cycles.
- The React.memo function takes a functional component as its argument and returns a new component that has the same behavior, but with the added optimization of checking if the props have changed. If the props have not changed, the memoized component will return the cached result from the previous render.
- React.memo(Component)- returns memoized component

#### useCallBack Hook:

- It is a hook in react that allows us to memoize a function. It takes two arguments: the first is the function that we want to memoize and the second is an array of dependencies. The hook will return a memoized version of the function that only changes if one of the values in dependency array changes.
- By memoizing the function, we can avoid unnecessary re-renders and improve the performance of your React application. The function will only be recreated if one of its dependencies changes, otherwise the same instance of the function will be returned. This can be useful in situations where you have an expensive function that you only want to recompute when its dependencies changes.

#### UseMemo Hook:

- It is a hook in React
