import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Navigator from './Navigator';
import { LandingPage } from './pages/Landing';
import { HowPage } from './pages/HowItWorks';
import { WhyPage } from './pages/WhyTalam';
import { PricingPage } from './pages/Pricing';
import { SupportPage } from './pages/Support';

function App() {
  return (
    <>
     
        <BrowserRouter>
        <Navigator/>
        <div className="App">
        <Route exact path ="/" component={LandingPage}/>
        <Route exact path ="/how" component={HowPage}/>
        <Route exact path ="/why" component={WhyPage}/>
        <Route exact path ="/pricing" component={PricingPage}/>
        <Route exact path ="/support" component={SupportPage}/>
                {/* <Route exact path ="/support" component={SupportPage}/> */}
        </div>
        </BrowserRouter>
      
  
    </>
  );
}

export default App;