import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';

class CountriesWithFilter extends React.Component{
  constructor(){
    super();
    this.state={
      loading : false ,
      data : [] ,
    }
  }

  componentDidMount(){
    this.setState({
      loading : true,
    })
    setTimeout(() =>
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(json => json)
      .then(data =>  this.setState({ data : data , loading : false}))
      .catch(error => {
        this.setState({
          error : error.errorMessage,
          loading : false,
        })
      }),1000)
      
  }

  render(){
    const { data , loading } = this.state
    console.log(data)
    if(loading){
      return( <div>
                <LinearProgress variant="query" color="primary" />
              </div>
              )
    }
    return(
      <div>
        Hello from CountriesWithFilter
      </div>
    )
  }
}

export default CountriesWithFilter