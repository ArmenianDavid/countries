import React from 'react';
// components
import Header from './Components/Header';
import List from './Components/List/List';

class App extends React.Component{
  
  render(){
    return(
      <div className='container'>
        <Header title='countries' />
        <List />
      </div>
    )
  }
}

export default App;
