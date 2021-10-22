import React from 'react'
import { Link } from 'react-router-dom'

function ButtonHeader() {
    return (
        <Link to='/Jam3ya'>
        <div >
            <button  className='btn btn-light btn-lg btn-block button-header'>Join</button>
        </div>
        </Link>
    )
}

export default ButtonHeader
