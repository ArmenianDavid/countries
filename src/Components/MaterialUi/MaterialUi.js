import React from 'react'

class MaterialUi extends React.Component{
  constructor(props){
    super(props)
    this.state={
       loading : false,
    }
  }

  render(){
    console.log('hello')
    return(
      <div>
        Barev debilner
      </div>
    )
  }
}

export default MaterialUi