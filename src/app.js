import React from 'react';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom';
import { FaqsContainer } from './containers/faqs';
import { FooterContainer } from './containers/footer';
import { JumbotronContainer } from './containers/jumbotron';
import * as ROUTES from './constants/routes';



 export default function App() {
  return (

   
   <Router>
      <h1> This white screen error na waa ooo</h1>

      <Route exact path = {ROUTES.HOME}>
         <JumbotronContainer/>
         <FaqsContainer/>
         <FooterContainer/>
      </Route>
     
     
   </Router>
  
    
  );
}


