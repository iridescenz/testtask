import React from 'react';
import Page1 from './components/Page1';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Page1} />
        <Route path='/subscription-period' exact component={SecondPage} />
        <Route path='/purchase' exact component={ThirdPage} />
        <Route path='/success' exact component={FourthPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
