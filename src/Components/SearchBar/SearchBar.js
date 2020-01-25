import React from 'react';
import './SearchBar.css';

const  letters = [ 'a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' ,
'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 
's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z' ];

class SearchBar extends React.Component{

  render(){
    return(
      <div className='letters-container'>
         {letters.map( letter =>{
           return(
             <div key={letter} id={letter} onClick={this.props.filterCountries} >
                <span className='letter'>{letter}</span>
             </div>
           )
         })}
      </div>
    )
  }
}

export default SearchBar