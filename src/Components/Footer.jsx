import React from 'react'
import {FaInstagram, FaFacebook, FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

function Footer() {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-800 to-black w-full p-10">
        <h1 className="text-lime-50 text-center text-2xl md:pt-0">GitHub and Linkedin Links:
        </h1>
        <div className="text-blue-300 flex justify-center gap-11 pt-6 ">
            <a href="https://www.linkedin.com/in/amritsharma056/" target="_blank"><FaLinkedinIn/></a>
            <a href="https://github.com/Amritsharma111" target='_blank'><AiFillGithub/></a>
        </div>
      </div>
    </>
  )
}

export default Footer
