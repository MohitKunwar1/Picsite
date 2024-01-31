import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav className=' w-full h-20 flex flex-col md:flex md:flex-row justify-around items-center border-b-2 border-amber-600  ' >
            <div className='  font-bold text-2xl md:text-4xl text-amber-600'><Link to="/">PICSITE</Link></div>
            <ul className=' flex gap-4 text-sm font-semibold md:gap-10 md:font-semibold md:text-lg text-gray-700'>
                <NavLink to="/" className={ ({isActive})=> isActive?"text-amber-600":"text-gray-700"}><li>Home</li></NavLink>
                <NavLink to="/about" className={({isActive})=> isActive?"text-amber-600":"text-gray-700"}><li>About</li></NavLink>
                <NavLink to="/gallery" className={({isActive})=> isActive?"text-amber-600":"text-gray-700"}><li>Gallery</li></NavLink>
                <NavLink to="/contact" className={({isActive})=> isActive?"text-amber-600":"text-gray-700"}><li>Contact</li></NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default Header