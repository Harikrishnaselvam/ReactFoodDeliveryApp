import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { topPicks } from '../data/data'
import '@splidejs/react-splide/css';
const TopPicks = () => {
  return (
    <>
      <h1 className='py-2 text-2xl font-bold text-center text-orange-500 '>TopPicks</h1>
      <div className='hidden lg:flex max-[1520px] py-2 px-2'>
        <Splide options={{ perPage: 4, gap: "0.5rem", drag: 'free', arrows: false }}>
          {
            topPicks.map((item) => {
              return (
                <SplideSlide key={item.id}>
                  <div className='relative rounded-3xl'>
                    <div className='absolute w-full h-full text-white bg-black/50 rounded-3xl'>
                      <p className='px-2 pt-4 text-2xl font-bold'>{item.title}</p>
                      <p className='px-2'>{item.price}</p>
                      <button className='absolute mx-2 text-white border-white border-dotted bottom-4'>Add To Cart</button>
                    </div>
                    <img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300'
                      src={item.img}
                      alt={item.title}
                    />
                  </div>
                </SplideSlide>
              )
            })
          }
        </Splide>
      </div>
    </>
  )
}

export default TopPicks