import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Default} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

//delete the following component definition before use
function Default(props){
  return(
    <h1>Default Component/App/Router Works!</h1>
  );
}

export default App;
