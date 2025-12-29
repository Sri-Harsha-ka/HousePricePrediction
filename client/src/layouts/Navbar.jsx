import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {



    return (
        <div className='fixed px-2 py-1'>
            <Link to='/'><span className='customFontNav'>HPP</span></Link>
        </div>
    )
}

export default Navbar
