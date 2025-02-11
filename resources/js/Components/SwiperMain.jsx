import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'; // Import required modules


export default function SwiperMain()
{
    return (
        <div>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]} // Enable modules
            spaceBetween={50} // Space between slides
            slidesPerView={1} // Number of slides visible
            pagination={{ clickable: true }} // Enable pagination
            scrollbar={{ draggable: true }} // Enable draggable scrollbar
            onSlideChange={() => console.log('Slide changed')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className=" h-screen w-screen">
                <div className=" w-screen h-screen flex justify-center items-center">
                        <h1 className=" text-9xl text-center font-bold">Hello World</h1>
                </div>
            </SwiperSlide>
            
            <SwiperSlide className=" h-screen w-screen">
                <div className=" w-screen h-screen flex justify-center items-center">
                        <h1 className=" text-9xl text-center font-bold">Hello World</h1>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" h-screen w-screen">
                <div className=" w-screen h-screen flex justify-center items-center">
                        <h1 className=" text-9xl text-center font-bold">Hello World</h1>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" h-screen w-screen">
                <div className=" w-screen h-screen flex justify-center items-center">
                        <h1 className=" text-9xl text-center font-bold">Hello World</h1>
                </div>
            </SwiperSlide>
            
        </Swiper>
    </div>
    )
}