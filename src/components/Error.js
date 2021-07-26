import React from 'react'

export default function Error(props) {
    // if there is no error, show nothing
    if(!props.isError) {
        return null
    }
    // else display the error div
    return (
        <div>
           <p className='error'>{props.text}</p> 
        </div>
    )
}
