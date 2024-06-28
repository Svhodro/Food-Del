import React, { useContext } from 'react'
import { menu_list } from '../../assets/assets'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { StoreContext } from '../../context/StoreContext';

function ExploreMenu({category,setcategory}) {

  return (
    <div className='border-b-2 border-zinc-300 '>
        <div className='w-full flex flex-col gap-2 py-4'>
            <h1 className='font-bold text-2xl sm:text-4xl ' >Explore Menu</h1>
            <p> Choose your food from a diverse manu featuring from there...</p>
        </div>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            0: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {menu_list.map((item,index)=>{
            return <SwiperSlide key={index}>
                <div className='py-10 text-center text-base font-semibold flex flex-col gap-2'  onClick={()=>setcategory(prev=>prev===item.menu_name?'All':item.menu_name)}  >
                    <img className={category===item.menu_name?'border-8 border-amber-600 rounded-full ':'border-none'}  src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            </SwiperSlide>
        })}
       
   
      </Swiper>
    </div>
  )
}

export default ExploreMenu