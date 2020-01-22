import React from 'react'

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
    const { countries } = this.state
    let str = 'gg'
    let result = str.sup();
    console.log(countries)
    return(
      <div>
        <table>
          <thead>
            <tr>
              <td>name</td>
              <td>capital</td>
              <td>population</td>
              <td>area</td>
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
                    <td>{country.area}<span>{result}</span></td>
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