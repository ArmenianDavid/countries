import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state ={
       countries : [],
       loading : false ,
       error : '',
    }
  }
  
  componentDidMount(){
     fetch('https://restcountries.eu/rest/v2/all')
       .then(res => res.json())
       .then(json => {
         this.setState({
           countries : json,
         })
       })
       .catch(error =>{
         this.setState({
           error : error.errorMessage, 
         })
       })
  }
  
  render(){
    console.log(this.state.countries)
    return(
      <div>
        Hello my friends
      </div>
    )
  }
}

export default App;
