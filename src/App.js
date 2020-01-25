import React from 'react';
import { Route , Switch  } from 'react-router-dom'
// components
import Header from './Components/Header';
import List from './Components/List/List';
import TableUi from './Components/MaterialUi/TableUi'
import CountriesWithFilter from './Components/CountriesWithFilter/CountriesWithFilter'
// material ui
import Navigation from './Components/Navigation/Navigation'

class App extends React.Component{
  
  render(){
    return(
      <div className='container'>
        <Header title='countries' />
        <Navigation />

        <Switch>
          <Route path='/countries-with-filter' component={CountriesWithFilter} />
          <Route  path='/material-ui' component={TableUi} />
          <Route path='/' component={List} exact />
        </Switch>
      </div>
    )
  }
}

export default App;
