import React from 'react';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import Monitoring from "./pages/Monitoring"
import SystemInfo from "./pages/SystemInfo"


function App() {
  return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/monitoring' component={Monitoring}/>
            <Route path='/systeminfo' component={SystemInfo}/>
          </Switch>
        </BrowserRouter>
      </>
  );
}

export default App;