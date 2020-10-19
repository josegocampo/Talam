import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Landing from './Landing';

function App() {
  return (
    <>
      <Nav/>
      <div className="App">
        <BrowserRouter>
        <Route exact path ="/" component={Landing}/>
        </BrowserRouter>
      
    </div>
    </>
  );
}

export default App;