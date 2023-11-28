import React from 'react'
import { categories } from '../data/data'

const Categories = () => {
    return (
        <div className='max-w-[1520-px] m-auto px-4 py-4'>
            <h1 className='py-2 text-2xl font-bold text-center text-orange-500 '>
                Trending Categories
            </h1>
            <div
                className='grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2'>
                {categories.map((item) => {
                    return <div key={item.id} className='p-4 flex justify-center items-center hover:scale-105 duration-200'>
                        <img
                            alt={item.name}
                            src={item.image} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Categories