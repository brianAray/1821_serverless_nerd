import React from "react";
import logo from "./logo.svg";
import ComponentOne from "./components/ComponentOne/ComponentOne";
import EventsDemo from "./components/EventsDemo/EventsDemo";
import ListDemo from "./components/ListDemo/ListDemo";
import ParentComponent from "./components/PropsDemo/ParentComponent/ParentComponent";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HooksDemo from "./components/HooksDemo/HooksDemo";
import PokeDemo from "./components/PokeDemo/PokeDemo";
// import './App.css';

// What is JSX
// Javascript XML
// File format that lets us write HTML and JS in the same file

/**
 *
 * What is a component?
 *
 * - Snippet of HTML, CSS and JS
 * - Building block for the HTML page
 * - Two types
 *  - Functional Component
 *  - Class Component
 *    - Not deprecated, functional components are just having a major push by React
 */

function App(): JSX.Element {
  
  let pathArray = [
    {
      path: "/",
      buttonName: "Components Demo",
    },
    {
      path: "/events",
      buttonName: "Events Demo",
    },
    {
      path: "/lists",
      buttonName: "List Demo",
    },
    {
      path: "/props",
      buttonName: "Props Demo",
    },
    {
      path: "/hooks",
      buttonName: "Hooks Demo",
    },
    {
      path: "/poke",
      buttonName: "Poke Demo",
    },
  ];

  return (
    <div className="App">
      <NavBar pathArray={pathArray} />
      <Routes>
        <Route path="/" element={<ComponentOne />}></Route>
        <Route path="/events" element={<EventsDemo />}></Route>
        <Route path="/lists" element={<ListDemo />}></Route>
        <Route path="/props" element={<ParentComponent />}></Route>
        <Route path="/hooks" element={<HooksDemo />}></Route>
        <Route path="/poke" element={<PokeDemo />}></Route>
      </Routes>
    </div>
  );
}

// class App extends React.Component {
//   render(): React.ReactNode {
//     return (
//       <div>
//         Hello React
//       </div>
//     )
//   }
// }

export default App;
