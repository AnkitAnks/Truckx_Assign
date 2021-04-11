import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser"
import Login from "./components/Login";


function App() { 
  return (
  
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Switch>
      
      <Route excat path="/AddUser" component={AddUser}/>
      <Route excat path="/EditUser/:id" component={EditUser}/>
      <Route excat path="/Home" component={Home}/>
      <Route excat path="/" component={Login}/>
      
      
     
     
      
    </Switch>
    
    </div>
    </BrowserRouter>
  )
}

export default App;
