import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='mb-20 flex item-center justify-between py-6'>
        <div className='flex flex-shrink-0 item-center'>
        {/* <img className='mx-2 h-10 mt-5 ' src={logo} alt='logo'></img> */}
        <div className='text-2xl mx-2 h-10 mt-6'>DP</div>
        
        </div>
        <div className='m-8 flex item-center justify-center gap-4 text-2xl'>
            <FaLinkedin/>
            <FaGithub/>
            <FaSquareXTwitter/>
            <FaInstagram/>
        </div>

    </nav>
  )
}

export default Navbar
