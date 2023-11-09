import React from 'react'
import img2 from '../assets/portfolio/corporate.jpg'
import {Link} from 'react-router-dom'
function Portfolio() {
    const portfolios = [
        {
          id: 1,
          src: img2,
          code:'https://github.com/Amritsharma111/ecommerce',
          demo: 'https://ecommerce-kohl-chi.vercel.app/',
        },
        {
          id: 2,
          src: img2,
          code: 'https://github.com/Amritsharma111/ngosite' ,
          demo: 'https://ngosite.vercel.app/',
        },
        {
          id: 3,
          src: img2,
          code: 'https://github.com/Amritsharma111/tour' ,
          demo: 'https://tour-azure.vercel.app/',
        },
        {
          id: 4,
          src: img2,
          code: 'https://github.com/Amritsharma111/Corporate' ,
        },
      ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20"
    >
      <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here </p>
          <p className='py-6'>(All these themes are taken from the internet.)</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-[100%]"

              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <Link to={demo} target="_blank">Demo</Link> 
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <Link to={code} target="_blank">Code</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
