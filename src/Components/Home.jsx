import React from 'react'
import heroImage from "../assets/heroImage.jpg";

function Home() {
  return (
    <>
       <div
      name="home"
      className="md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
     <div className="max-w-screen-lg mx-auto flex flex-col items-center h-full md:px-4 px-1 sm:flex-row">
        <div className="flex flex-col justify-center h-full w-[65%]">
          <h2 className="text-5xl sm:text-7xl font-bold text-white pt-5">
            I'm a Web Designer
          </h2>
          <p className="text-gray-500 md:py-4 md:max-w-[420px] w-[100%] ">
          I am a passionate web designer who thrives in the dynamic world of web development. Although my journey is just beginning, I am deeply enthusiastic about crafting digital experiences. I am excited to continue expanding my skills and creating engaging, user-centered websites.
          </p>
        </div>
        <div className="md:w-[35%] w-100">
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-[80%]  md:w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
