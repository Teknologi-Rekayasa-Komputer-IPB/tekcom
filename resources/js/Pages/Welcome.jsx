import NewLayout from "@/Layouts/NewLayout";
import React from 'react';
import CardContainer from "@/Components/CardContainer";
import SwiperMain from "@/Components/SwiperMain";;
import NewsCard from "@/Components/NewsCard";
import 'swiper/css';
import 'swiper/css/pagination'


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
                    <div className="flex flex-col justify-center items-center w-full  text-center z-10 px-4">
                        <h2 className=" text-5xl font-semibold">Selamat Datang di</h2>
                        <h1 className=" text-6xl font-extrabold">Teknologi Rekayasa Komputer</h1>
                        <p className=" mt-6 text-lg">Pelopor Global Dalam Pengembangan Ilmu Komputer untuk
                            Pertanian, Kelautan, dan Biosains Tropika Modern.</p>
                    </div>
                </div>
            </section>

            <section className=" h-screen">
                <CardContainer />
            </section>

            <section className=" h-screen">
                <CardContainer reverse="true" />
            </section>

            <section className=" h-screen">
                <CardContainer />
            </section>
            <section className=" h-[672px]">
                <div className=" bg-[url(bg-blue.svg)] h-[672px] py-10">
                    <h1 className=" text-white text-[60px] font-semibold text-center mb-5">
                        Teknologi Untuk Masa Depan
                    </h1>
                    <div className=" flex justify-center space-x-10">
                        <div className=" w-[328px] h-[432px] p-10 bg-white rounded-lg hover:bg-blue-900 hover:border-1 hover:border-white hover:shadow-white shadow-lg transform transition-all">

                        </div>
                        <div className=" w-[328px] h-[432px] p-10 bg-white rounded-lg hover:bg-blue-900 hover:border-1 hover:border-white hover:shadow-white shadow-lg transform transition-all">

                        </div>
                        <div className=" w-[328px] h-[432px] p-10 bg-white rounded-lg hover:bg-blue-900 hover:border-1 hover:border-white hover:shadow-white shadow-lg transform transition-all">

                        </div>




                    </div>
                </div>
                <br />

            </section>
            <section className="">
                <div className=" flex justify-center items-center flex-col">
                    <div className=" w-full flex items-center flex-col justify-center mt-20 h-[100px]">
                        <h1 className=" text-[60px] font-extrabold font-poppins text-center max-w-[900px]">Prestasi Cemerlang Tingkat</h1>
                        <h1 className="text-[60px] font-extrabold font-poppins text-center max-w-[900px] -translate-y-8"> Nasional & Internasional</h1>

                    </div>
                    <p className=" text-center  max-w-[700px] text-slate-500">
                        Mahasiswa & Dosen Ilmu Komputer secara konsisten meraih prestasi dan penghargaan di tingkat nasional maupun internasional.
                    </p>
          

                </div>
                <SwiperMain />

            </section>
            <section>

            </section>
            <section>
                {/* <CuratorFeed/> */}
            </section>

        </NewLayout>
    );
}