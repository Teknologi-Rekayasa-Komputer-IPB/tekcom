import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'; // Tambah Autoplay
import NewsCard from './NewsCard';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import 'swiper/css/scrollbar'; 

export default function SwiperMain() {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Tambah Autoplay ke modules
                spaceBetween={50} 
                slidesPerView={1} 
                pagination={{ clickable: true }} 
                scrollbar={{ draggable: true }} 
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Konfigurasi autoplay
                onSlideChange={() => console.log('Slide changed')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className="h-auto w-screen">
                    <div className="w-screen h-5/6 p-10 flex justify-center items-center space-x-5">
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-auto w-screen">
                    <div className="w-screen h-5/6 p-10 flex justify-center items-center space-x-5">
                    <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-auto w-screen">
                    <div className="w-screen h-5/6 p-10 flex justify-center items-center space-x-5">
                    <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-auto w-screen">
                    <div className="w-screen h-5/6 p-10 flex justify-center items-center space-x-5">
                    <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
