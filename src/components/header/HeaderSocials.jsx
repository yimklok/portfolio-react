import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header-socials">
        <a href="https://linkedin.com" target="_bank"><BsLinkedin/></a>
        <a href="https://github.com" target="_bank"><FaGithub/></a>
        <a href="https://dribbble.com" target="_bank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials