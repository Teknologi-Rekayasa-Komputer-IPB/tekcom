import React from 'react';

export default function CardContainer({ reverse = false }) {
    return (
        <div className="my-12 mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
            <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} space-y-8 md:space-y-0 ${reverse ? 'md:space-x-reverse' : ''} md:space-x-60 justify-center items-center`}>
                {/* Text Container */}
                <div className="text-center md:text-left max-w-md space-y-4">
                    <h2 className="uppercase font-semibold text-xl text-blue-900">Study Program</h2>
                    <h1 className="font-bold text-3xl md:text-4xl my-4">Sarjana Kecerdasan Buatan</h1>
                    <p className="text-justify">
                        Menguasai teori dan praktik Kecerdasan Buatan (AI) untuk mendukung transformasi digital dalam pertanian, kelautan, dan biosains tropika yang berkelanjutan demi kesejahteraan masyarakat.                    </p>
                    <div className="text-gray-700 my-6 space-y-4">
                        <div className=' flex'> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><path d="M18.3353 7.28753L10.63 2.15069C10.5245 2.08029 10.4005 2.04272 10.2736 2.04272C10.1468 2.04272 10.0228 2.08029 9.91727 2.15069L2.21201 7.28753C2.12405 7.34622 2.05194 7.42572 2.00209 7.51897C1.95225 7.61223 1.9262 7.71635 1.92627 7.82209V16.1695C1.92627 16.51 2.06157 16.8367 2.30241 17.0775C2.54324 17.3184 2.86989 17.4537 3.21048 17.4537H17.3368C17.6774 17.4537 18.004 17.3184 18.2449 17.0775C18.4857 16.8367 18.621 16.51 18.621 16.1695V7.82209C18.6211 7.71635 18.595 7.61223 18.5452 7.51897C18.4953 7.42572 18.4232 7.34622 18.3353 7.28753ZM7.763 12.3168L3.21048 15.5273V9.06857L7.763 12.3168ZM9.07691 12.9589H11.4704L16.0157 16.1695H4.53161L9.07691 12.9589ZM12.7843 12.3168L17.3368 9.06857V15.5273L12.7843 12.3168Z" fill="#023880"></path></svg>
                            <p className=' ml-2'>spanlikom@apps.jpb.ac.id</p>
                        </div>
                        <div className=' flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M20.5474 18.0813H19.6134V8.74161H15.8775V6.487L10.2737 0.883179L4.66985 6.487V8.74161H0.933971V18.0813H0V19.9493H20.5474V18.0813ZM4.66985 18.0813H2.80191V10.6096H4.66985V18.0813ZM15.8775 10.6096H17.7454V18.0813H15.8775V10.6096ZM9.33971 11.5435H11.2077V18.0813H9.33971V11.5435Z" fill="#023880"></path></svg>
                            <p className=' ml-2'>*Departemen Ilmu Komputer Jl Meranti Wing 20 Level 5</p>
                        </div>
                    </div>
                    <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition duration-300">
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
                        className={`absolute w-64 h-48 md:w-80 md:h-60 object-cover rounded-lg shadow-lg bottom-0 ${reverse ? 'left-0 transform translate-x-[150px] translate-y-6' : 'right-0 transform -translate-x-[150px] translate-y-6'
                            }`}
                    />
                </div>
            </div>
        </div>
    );
}