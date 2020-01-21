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
    return(
      <div>
        <table>
          <thead>
            <th>
              <td>name</td>
              <td>capital</td>
              <td>population</td>
            </th>
          </thead>

          <tbody>
              
          </tbody>
        </table>
      </div>
    )
  }
}

export default List