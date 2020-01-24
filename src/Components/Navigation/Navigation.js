import React from 'react'
import { Link } from 'react-router-dom'
// Material ui
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
 
const Navigation = () =>{
  return(
    <div>
      <ButtonGroup >  
          <Link style={{textDecoration : 'none'}} to='/'> 
            <Button color="primary" aria-label="outlined primary ">
              Countries
            </Button> 
          </Link>
          <Link style={{textDecoration : 'none'}} to='/material-ui' > 
            <Button color="primary" aria-label="outlined primary ">
              MaterialUi
              </Button> 
          </Link>
      </ButtonGroup>
    </div>
  )
}

export default Navigation