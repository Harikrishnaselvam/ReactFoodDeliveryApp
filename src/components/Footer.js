import React from 'react'
import { FaDribbbleSquare, FaInstagram, FaFacebookSquare, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-[1520-px] m-auto px-4 py-2 bg-[#24262b]'>
        <div className='grid gap-8 px-6 py-16 text-gray-300 lg:grid-cols-3 '>
            <div>
                <h1 className='w-full text-3xl font-bold text-orange-500'>YumEats</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                    molestiae delectus culpa hic assumenda, voluptate reprehenderit
                </p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaDribbbleSquare size={30}/>
                </div>
            </div>
            <div className='flex justify-between my-6 lg:col-span-2'>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                    <li className='py-2 text-sm'>New York</li>
                    <li className='py-2 text-sm'>USA</li>
                    <li className='py-2 text-sm'>India</li>
                    <li className='py-2 text-sm'>Canada</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                    <li className='py-2 text-sm'>New York</li>
                    <li className='py-2 text-sm'>USA</li>
                    <li className='py-2 text-sm'>India</li>
                    <li className='py-2 text-sm'>Canada</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                    <li className='py-2 text-sm'>New York</li>
                    <li className='py-2 text-sm'>USA</li>
                    <li className='py-2 text-sm'>India</li>
                    <li className='py-2 text-sm'>Canada</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                    <li className='py-2 text-sm'>New York</li>
                    <li className='py-2 text-sm'>USA</li>
                    <li className='py-2 text-sm'>India</li>
                    <li className='py-2 text-sm'>Canada</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer