import React from 'react'
import './Cell.css'
interface Props {
    status: number
}

const Cell: React.FC<Props> = (props)=>{
    const background = props.status === 0 ? 'white' : 'black'

    return(
        <div style={{backgroundColor: background}} 
         data-custom ={props.status}> 
          </div>  
    )
}
export default Cell