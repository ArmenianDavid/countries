import React from 'react'

class CountriesWithFilter extends React.Component{
  constructor(){
    super();
    this.state={
      loading : false ,
      data : [] ,
    }
  }

  render(){
    return(
      <div>
        Hello from CountriesWithFilter
      </div>
    )
  }
}

export default CountriesWithFilter