import React from 'react';
import logo from './logo.svg';
import ComponentOne from './components/ComponentOne/ComponentOne';
import EventsDemo from './components/EventsDemo/EventsDemo';
import ListDemo from './components/ListDemo/ListDemo';
import ParentComponent from './components/PropsDemo/ParentComponent/ParentComponent';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
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
  return (
    <div className='App'>
      {/* <ComponentOne/>
      <ComponentOne/>
      <ComponentOne/>
      <ComponentOne/>
      <ComponentOne/>
      <EventsDemo/>
      <ListDemo/>
      <ParentComponent/> */}
      <NavBar/>
      <Routes>
        <Route path="/" element={<ComponentOne/>}></Route>
        <Route path="/events" element={<EventsDemo/>}></Route>
        <Route path="/lists" element={<ListDemo/>}></Route>
        <Route path="/props" element={<ParentComponent/>}></Route>
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
