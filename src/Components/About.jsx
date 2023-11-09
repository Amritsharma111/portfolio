import React from 'react'

function About() {
  return (
    <>
      <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello, I'm Amrit Sharma, a passionate web designer based in Kathmandu. I believe in the power of design to transform online experiences, and I'm here to help you create a digital presence that leaves a lasting impression.My journey into web design began during my college years when I discovered my fascination with combining aesthetics and functionality. I pursued a degree in Bsc.Csit.
        </p>

        <br />

        <p className="text-xl">
          I believe in the power of simplicity, user-centric design, and staying on the cutting edge of technology trends. My goal is to create websites that not only look stunning but also deliver exceptional user experiences.
        </p>
      </div>
    </div>
    </>
  )
}

export default About
