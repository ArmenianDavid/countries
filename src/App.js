import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state ={
       countries : [],
       loading : false ,
    }
  }


  render(){
    return(
      <div>
        Hello my friends
      </div>
    )
  }
}

export default App;
