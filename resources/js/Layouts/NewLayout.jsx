import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Components/Footer';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useState } from 'react';

export const AcmeLogo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export default function NewLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="sticky top-0 bg-white shadow-md py-4 px-6 space-x-20 flex items-center justify-center z-50">
                {/* Logo & Title */}
                <div className="flex items-center space-x-3">
                    <img
                        src="komipb.png"
                        alt="IPB Logo"
                        className="h-10 w-auto"
                    />
                    <div>
                        <h1 className="text-blue-700 font-semibold text-lg">
                            IPB University
                        </h1>
                        <span className="text-orange-700 text-sm font-bold">
                            Program Studi Ilmu Komputer
                        </span>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-3 text-gray-700">
                    {["Profil", "Fasilitas", "Program Studi", "Penelitian", "Data dan Infografis", "Berita", "SDGs"].map((item) => (
                        <div key={item} className="relative group">
                            <button className="hover:text-blue-500">
                                {item} <span className="text-xs">▼</span>
                            </button>
                            {/* Dropdown (if needed) */}
                            <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md hidden group-hover:block">
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-100">Submenu 1</li>
                                    <li className="px-4 py-2 hover:bg-gray-100">Submenu 2</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
                        <ul className="py-4 px-6 space-y-3">
                            {["Profil", "Fasilitas", "Program Studi", "Penelitian", "Data dan Infografis", "Berita", "SDGs"].map(
                                (item) => (
                                    <li key={item} className="border-b py-2">
                                        <button className="w-full text-left">{item}</button>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                )}
            </nav>

            {children}

            <footer>
                <Footer />
            </footer>
        </>
    );
}
    