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
