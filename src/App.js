import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Instructors from './components/Instructors/Instructors';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Switch, Route, NavLink, } from 'react-router-dom';

function App() {
  const activeStyle = {
    fontWeight: "bold",
    color: "red"
  }
  return (
    <div className="App">


      <BrowserRouter>

        <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
        <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
        <NavLink activeStyle={activeStyle} to="/service">Service</NavLink>
        <NavLink activeStyle={activeStyle} to="instructors">Instructors</NavLink>



        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/Instructors">
            <Instructors></Instructors>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </BrowserRouter>







      {/* <Home></Home>
      <About></About>
      <Service></Service>
      <Instructors></Instructors>
      <NotFound></NotFound> */}
    </div>
  );
}

export default App;
