import React from 'react'
import { Link } from 'react-router-dom'

function ButtonHeader() {
    return (
        <div >
            <Link to='/Jam3ya'>
            <button  className='btn btn-light btn-lg btn-block button-header active-focus'>Join Now</button>
        </Link>
        </div>
    )
}

export default ButtonHeader
