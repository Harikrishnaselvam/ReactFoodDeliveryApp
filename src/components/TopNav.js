import react, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsPerson } from 'react-icons/bs'
import {TbTruckReturn} from 'react-icons/tb'
import { FaGoogleWallet} from 'react-icons/fa'
import {MdHelp, MdOutlineFavorite} from 'react-icons/md'

const TopNav = () => {
    const [sideNav, setSideNav] = useState(false)
    return (
    <div>
        <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center'>
                <div onClick={() => setSideNav(!sideNav)} className='cursor-pointer'>
                    <AiOutlineMenu size={25} />
                </div>
                <h1 className='px-2 text-2xl sm:text-3xl lg:text-4xl'>Yum
                    <span>Eats</span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='p-2 text-white bg-orange-700 rounded-full font-bold'>Free</p>
                    <p className='p-2 font-bold'>Delivery</p>
                </div>
            </div>
            <div className='bg-gray-200 rounded-full flex items-center px-2 sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25} />
                <input className='w-full p-2 bg-transparent outline-none focus:'
                    type='text'
                    placeholder='search meals'
                />
            </div>
            <button className='items-center hidden py-2 text-white bg-orange-700 rounded-full md:flex'>
                <BsFillCartFill /> Cart
            </button>
            {
                sideNav ? (
                    <div className='fixed top-0 left-0 z-10 w-full h-screen bg-black/60' onClick={() => setSideNav(!sideNav)}></div>
                ) : ("")
            }
            </div>

            <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose onClick={() => setSideNav(!sideNav)} size={25}
        className='absolute cursor-pointer right-4 top-4'
        />
        <h2 className='p-4 text-2xl'>Yum <span className='font-bold text-orange-700'>Eats</span></h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-900">
               <li className="flex py-4 text-xl">
                <BsPerson size={25}
                className='mr-4 text-white bg-black rounded-full'
                />
                My Account
               </li>
               <li className="flex py-4 text-xl">
                <TbTruckReturn size={25}
                className='mr-4 text-white bg-black rounded-full'
                />
                Delivery
               </li>
               <li className="flex py-4 text-xl">
                <MdOutlineFavorite size={25}
                className='mr-4 text-white bg-black rounded-full'
                />
                My Favourite
               </li>
               <li className="flex py-4 text-xl">
                <FaGoogleWallet size={25}
                className='mr-4 text-white bg-black rounded-full'
                />
                My Wallet
               </li>
               <li className="flex py-4 text-xl">
                <MdHelp size={25}
                className='mr-4 text-white bg-black rounded-full'
                />
                Help
               </li>
            </ul>
          </nav>
      </div>
    </div>
    )
}

export default TopNav