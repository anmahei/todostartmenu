import React, { useState }  from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Mytodos from './Mytodos';
import Home from './Home';
import Tab from '@material-ui/core/Tab';

function App() {


  return (
    <div className="App">

<BrowserRouter>
<div>

<Tab label="Home" to="/" component={Link} />
<Tab label="My Todos" to="/Mytodos" component={Link} />



<Switch>
 <Route exact path="/" component={Home} /> 
 <Route exact path="/Mytodos" component={Mytodos} /> 

</Switch>

</div>

</BrowserRouter>
</div>
  );
  }
export default App;
