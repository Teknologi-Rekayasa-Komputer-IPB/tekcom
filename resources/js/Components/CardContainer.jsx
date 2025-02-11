import React from 'react';

export default function CardContainer({ reverse = false }) {
    return (
        <div className="my-12 mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
            <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} space-y-8 md:space-y-0 ${reverse ? 'md:space-x-reverse' : ''} md:space-x-60 justify-center items-center`}>
                {/* Text Container */}
                <div className="text-center md:text-left max-w-md space-y-4">
                    <h2 className="uppercase font-bold text-2xl">Study Program</h2>
                    <h1 className="font-bold text-3xl md:text-4xl my-4">Lorem ipsum dolor sit amet</h1>
                    <p className="text-justify">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, asperiores laudantium accusantium fugiat ducimus, sed quia aspernatur sit tenetur voluptatem ex non nesciunt in temporibus nisi. Quas delectus quis suscipit!
                    </p>
                    <div className="text-gray-700 my-6 space-y-4">
                        <p>*likom@apps.jpb.ac.id</p>
                        <p>*Departemen Ilmu Komputer Jl Meranti Wing 20 Level 5</p>
                        <p>*Kampus IPB Darmaga 16680</p>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                        Baca Selengkapnya
                    </button>
                </div>

                {/* Image Container */}
                <div className="relative w-96 max-w-md h-96">
                    {/* Main image */}
                    <img
                        src="images.jpg"
                        alt="Image 1"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                    />
                    {/* Overlay image */}
                    <img
                        src="images.jpg"
                        alt="Image 2"
                        className={`absolute w-64 h-48 md:w-80 md:h-60 object-cover rounded-lg shadow-lg bottom-0 ${
                            reverse ? 'left-0 transform translate-x-20 translate-y-6' : 'right-0 transform -translate-x-20 translate-y-6'
                        }`}
                    />
                </div>
            </div>
        </div>
    );
}