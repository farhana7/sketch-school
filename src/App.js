import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Instructors from "./components/Instructors/Instructors";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/service">
            <Service></Service>
          </Route>
          <Route exact path="/Instructors">
            <Instructors></Instructors>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
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
