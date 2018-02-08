import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Home from '../containers/Home';
import AboutUs from '../containers/AboutUs.jsx';
import OurTeam from '../containers/OurTeam.jsx';

function App(){
  return (
    <div>
      <style global jsx>{`
      html, body, h1, h2, h3, h4, p, ul, li {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
      }
    `}</style>
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
