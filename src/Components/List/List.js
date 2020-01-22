import React from 'react';
// components
import './List.css';

class List extends React.Component{
  constructor(){
    super();
    this.state = {
      countries : [],
      loading : false,
      error : '',  
    }
  }

  componentDidMount(){
    this.setState({
      loading : true,
    })
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(json => {
        this.setState({
          loading : false,
          countries : json,
        })
      })
      .catch(error =>{
        this.setState({
          loading : false,
          error : error.errorMessage, 
        })
      })
  }

  render(){
    const { countries , loading } = this.state
    console.log(countries)
    if(loading){
      return(
        <div>
          Loading...
        </div>
      )
    } 
    return(
      <div className='table-container'>
        <table className='table'>
            <thead className='table-header'>
              <tr className='table-header-row'>
                <td>name</td>
                <td>capital</td>
                <td>population</td>
                <td>area <span>km<sup>2</sup></span></td>
                <td>flag</td>
              </tr>
            </thead>
           <tbody>
              {countries.map( country =>{
                return(
                  <tr key={country.name}>
                    <td>{country.name}</td>
                    <td>{country.capital}</td>
                    <td>{country.population}</td>
                    <td>{country.area}<span></span></td>
                    <td><img src={country.flag} alt='flag' width='30px'/></td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default List