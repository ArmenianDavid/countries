import React from 'react';
import { Route , Switch, Router ,  } from 'react-router-dom'
// components
import Header from './Components/Header';
import List from './Components/List/List';
import MaterialUi from './Components/MaterialUi/MaterialUi';
import Navigation from './Components/Navigation/Navigation'

class App extends React.Component{
  
  render(){
    return(
      <div className='container'>
        <Header title='countries' />
        <Navigation />

        <Switch>
          <Route path='/material-ui' >
            <MaterialUi />
          </Route>
          <Route path='/'>
            <List />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;
