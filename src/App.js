import React from 'react';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import Products from "./pages/Products"
import Reports from "./pages/Reports"


function App() {
  return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/products' component={Products}/>
            <Route path='/reports' component={Reports}/>
          </Switch>
        </BrowserRouter>
      </>
  );
}

export default App;