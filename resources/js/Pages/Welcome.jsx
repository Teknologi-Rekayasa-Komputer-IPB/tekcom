import NewLayout from "@/Layouts/NewLayout";
import React from 'react';
import CardContainer from "@/Components/CardContainer";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperMain from "@/Components/SwiperMain";
import 'swiper/css';
import 'swiper/css/pagination';
import NewsCard from "@/Components/NewsCard";

export default function Welcome() {
    return (
        <NewLayout>
            <section>
                <div
                    className="w-full h-screen bg-[url('/images.jpg')] bg-cover bg-center flex flex-col justify-center items-center relative"
                >
                    {/* Gradient Overlay */}
                    <div className="w-full h-screen absolute inset-0 bg-gradient-to-b from-white/0 to-white/100"></div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-center items-center w-full max-w-4xl text-center z-10 px-4">
                        <h1 className=" text-5xl font-extrabold">Teknologi Rekayasa Komputer</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam, sit voluptatibus quae, earum facilis ad dolorum adipisci voluptate quo minus, a repellendus illum laborum. Blanditiis labore temporibus assumenda cum!</p>
                    </div>
                </div>
            </section>

            <section>
                <CardContainer  />
            </section>

            <section>
                <CardContainer reverse="true"/>
            </section>

            <section>
                <CardContainer />
            </section>
            <section>
                <div className=" flex justify-center space-x-5">
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />

                </div>
            </section>
            <section>
                <SwiperMain />

            </section>

        </NewLayout>
    );
}