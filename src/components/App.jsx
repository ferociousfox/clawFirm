import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Home from '../containers/Home';
import AboutUs from '../containers/AboutUs.jsx';
import OurTeam from '../containers/OurTeam.jsx';

function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={AboutUs} />
        <Route path='/team' component={OurTeam} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}


export default App;
