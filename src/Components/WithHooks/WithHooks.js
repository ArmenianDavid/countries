import React , {useState} from 'react'

function WithHooks(){
  const [ count , setCount ] = useState(0)
  return(
    <div>
      <span>{count}</span>
      <button onClick={() => setCount( count + 1 )}>
        incriment
      </button>
    </div>
  )
}

export default WithHooks