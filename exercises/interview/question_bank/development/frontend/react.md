# React Question Bank

## Level 1: Basic

<ol>
<li>What is React?</li>
<li>What are the advantages of using React?</li>
<li>What is JSX?</li>
<li>What is a component in React?</li>
<li>What are props in React?</li>
<li>What is the state in React?</li>
<li>What is the difference between props and state?</li>
<li>What is the virtual DOM in React?</li>
<li>What is the difference between React and Angular?</li>
<li>What is a React element?</li>
<li>What is the role of ReactDOM in React?</li>
<li>What is the role of Babel in React?</li>
<li>What is the difference between React and React Native?</li>
<li>What is the purpose of key in React?</li>
<li>What is the difference between a controlled and an uncontrolled component?</li>
<li>What is the purpose of ref in React?</li>
<li>How do you define a component in React?</li>
<li>What is a higher-order component (HOC) in React?</li>
<li>What is the purpose of the render() method in React?</li>
<li>What is the purpose of a constructor in a React component?</li>
</ol>
<details>
<summary>Answers</summary>
<ol>
<li>React is an open-source JavaScript library for building user interfaces.</li>
<li>React has a simple and intuitive API, a virtual DOM that allows for efficient updates, and a large and active community of developers.</li>
<li>JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.</li>
<li>A component in React is a modular, reusable piece of code that defines a part of a user interface.</li>
<li>Props (short for "properties") are a way to pass data from a parent component to a child component.</li>
<li>State is a way to store data in a component that can be updated over time.</li>
<li>Props are used to pass data down from a parent component to a child component, while state is used to manage data within a component.</li>
<li>The virtual DOM is a lightweight representation of the real DOM that allows React to efficiently update the UI when changes occur.</li>
<li>React is a library, while Angular is a framework.</li>
<li>A React element is a lightweight description of what the component should render.</li>
<li>ReactDOM is a library that provides an interface for rendering React components to the DOM.</li>
<li>Babel is a tool that allows you to write modern JavaScript and transpile it to code that can be run in older browsers.</li>
<li>React is a library for building user interfaces on the web, while React Native is a framework for building native mobile apps.</li>
<li>The key is a special attribute that should be included when rendering lists of elements. It helps React identify which elements have changed and should be updated.</li>
<li>In a controlled component, the value of the component is controlled by React, while in an uncontrolled component, the value is controlled by the user.</li>
<li>Ref is a way to access the underlying DOM node or React component instance of a component.</li>
<li>Components can be defined using a class that extends the React.Component class or using a function that returns a React element.</li>
<li>A higher-order component is a function that takes a component and returns a new component with additional functionality.</li>
<li>The render() method is used to define what the component should render.</li>
<li>The constructor is used to initialize the component's state and bind methods to the component instance.</li>
</ol>
</details>

## Level 2: Intermediate

<li>What is a lifecycle method in React?</li>
<li>What is the difference between a functional and a class component in React?</li>
<li>What is Redux and how does it work with React?</li>
<li>What are hooks in React?</li>
<li>What is the difference between useCallback and useMemo?</li>
<li>What is the purpose of the useEffect hook?</li>
<li>What is the difference between the useState and useReducer hooks?</li>
<li>How do you handle events in React?</li>
<li>How do you pass data between siblings in React?</li>
<li>What is the purpose of the context API in React?</li>
<li>What is a pure component in React?</li>
<li>What is server-side rendering in React?</li>
<li>What is the difference between client-side and server-side rendering in React?</li>
<li>What is the purpose of the shouldComponentUpdate() method?</li>
<li>What is the difference between a container component and a presentational component in React?</li>

<details>
<summary>Answers</summary>
<ol>
<li>A lifecycle method is a method that is called at different points during the lifetime of a component, such as when it is mounted, updated, or unmounted.</li>
<li>Functional components are simpler and more lightweight than class components, but they cannot use lifecycle methods or maintain their own state. Class components are more powerful and flexible, but they can be more complex and verbose.</li>
<li>Redux is a state management library that allows you to manage the state of your application in a centralized and predictable way. It works with React by providing a way to connect your components to the global state and dispatch actions to update the state.</li>
<li>Hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 as a way to simplify state management and reduce the need for class components.</li>
<li>useCallback is used to memoize a function so that it is only re-created when its dependencies change, while useMemo is used to memoize a value so that it is only re-computed when its dependencies change.</li>
<li>The useEffect hook is used to perform side effects in functional components, such as fetching data, updating the document title, or subscribing to events. It is called after every render and can be used to clean up after the component is unmounted.</li>
<li>useState is used to manage simple state in a component, while useReducer is used to manage more complex state that involves multiple values or actions. useReducer is also useful when the state update depends on the previous state.</li>
<li>Events in React are handled using event handlers, which are functions that are called when an event occurs on a component. Event handlers can be attached using JSX or using the addEventListener() method in a class component.</li>
<li>Data can be passed between siblings in React by lifting the state up to a common ancestor, using a global state management library like Redux or React context, or using a third-party library like PubSubJS.</li>
<li>The context API in React is a way to pass data down the component tree without having to pass props through every level. It allows you to create a global state that can be accessed by any component in the tree.</li>
<li>A pure component is a component that implements shouldComponentUpdate() with a shallow comparison of props and state to determine if the component needs to be updated. This can improve performance by reducing unnecessary re-renders.</li>
<li>Server-side rendering in React is the process of rendering a React application on the server and sending the HTML to the client, rather than sending a blank HTML file and relying on JavaScript to render the UI. This can improve performance, SEO, and accessibility.</li>
<li>Client-side rendering in React is the process of sending a blank HTML file to the client and relying on JavaScript to render the UI. This can be faster for small applications, but can lead to slower initial load times and poor SEO.</li>
<li>The shouldComponentUpdate() method is called before a component is updated to determine if it needs to be re-rendered. It can be used to optimize performance by preventing unnecessary re-renders.</li>
<li>A container component is a component that manages the state of one or more presentational components, while a presentational component is a component that only handles the rendering of data and receives data and event handlers as props. Container components are typically more complex and can be reused across multiple parts of the application, while presentational components are simpler and more specific to a particular UI element.</li>

</ol>
</details>

## Level 3: Advanced

<ol>
<li>What is the difference between server-side rendering and static site generation in React?</li>
<li>How do you handle authentication and authorization in a React application?</li>
<li>How do you optimize the performance of a React application?</li>
<li>What is the purpose of a portal in React?</li>
<li>What are the performance implications of using context in React?</li>
<li>How do you create a reusable component library in React?</li>
<li>What is the purpose of React Router?</li>
<li>What is the difference between React.PureComponent and React.memo?</li>
<li>How do you use React with TypeScript?</li>
</ol>

<details>
<summary>Answers</summary>
<ol>
<li>Server-side rendering involves rendering the React application on the server and sending the resulting HTML to the client, while static site generation involves generating a static HTML version of the application that can be served directly to the client. Server-side rendering is more flexible and dynamic, but requires more server resources and can lead to slower initial load times, while static site generation is faster and more reliable, but less dynamic.</li>
<li>Authentication and authorization in a React application can be handled using a variety of techniques, including server-side sessions, JSON Web Tokens (JWT), OAuth, and role-based access control (RBAC). The exact implementation depends on the specific requirements of the application.</li>
<li>Performance optimization in a React application can involve a variety of techniques, including code splitting, lazy loading, caching, memoization, and minimizing re-renders. It also requires careful management of state and props, and a deep understanding of the React lifecycle and rendering process.</li>
<li>A portal in React is a way to render a component outside of its normal parent hierarchy, allowing it to escape any ancestor components that may have z-index or overflow restrictions. This can be useful for creating modal dialogs, tooltips, and other UI elements that need to appear above other content.</li>
<li>Context in React can be a performance concern if it is overused or if the data being passed down is large or changes frequently. In general, it is best to use context sparingly and only for data that is truly global or deeply nested.</li>
<li>Creating a reusable component library in React involves careful planning and architecture, as well as the use of tools like Storybook and npm. It also requires a deep understanding of the best practices for component design and API surface area.</li>
<li>React Router is a library that provides a way to handle client-side routing in a React application, allowing you to create dynamic, multi-page applications with multiple views and URL paths. It also provides a way to pass data between pages and handle 404 errors.</li>
<li>React.PureComponent is a class component that implements a shallow comparison of props and state in shouldComponentUpdate(), while React.memo is a higher-order component that does the same for functional components. They are both used to optimize performance by preventing unnecessary re-renders.</li>
<li>Using React with TypeScript involves adding type annotations to your components and props, as well as configuring your build tools to handle TypeScript files. It also requires a deep understanding of the TypeScript language and its integration with React.</li>
</ol>
</details>