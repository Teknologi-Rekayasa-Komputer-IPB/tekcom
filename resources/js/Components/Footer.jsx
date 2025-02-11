import React from "react";
// import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 ">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-12">
          <div>
            <img src="ipb.png" alt="IPB University" className="w-52 mb-4" />
            <h3 className="font-bold">Kontak</h3>
            <p>📞 0251-8625584</p>
            <p>📠 0251-8625584</p>
            <p>✉️ <a href="mailto:ilkom@apps.ipb.ac.id" className="underline">ilkom@apps.ipb.ac.id</a></p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-xl">Calon Mahasiswa</h3>
            <p><a href="#" className="hover:underline ">Penerimaan Mahasiswa Baru</a></p>
            <p><a href="#" className="hover:underline">Media Promosi Ilmu Komputer IPB</a></p>
          </div>

          <div className=" space-y-2">
            <h3 className="font-bold text-xl">Mahasiswa</h3>
            <p><a href="#" className="hover:underline">Portal Aplikasi IPB University</a></p>
            <p><a href="#" className="hover:underline">Fakultas</a></p>
            <p><a href="#" className="hover:underline">SIMAK IPB</a></p>
            <p><a href="#" className="hover:underline">Jurnal</a></p>
            <p><a href="#" className="hover:underline">Student Service Center</a></p>
            <p><a href="#" className="hover:underline">Lecture Management System</a></p>
            <p><a href="#" className="hover:underline">Repository</a></p>
            <p><a href="#" className="hover:underline">Student Portal IPB</a></p>
          </div>

          <div className=" space-y-2x">
            <h3 className="font-bold text-xl">Alumni</h3>
            <p><a href="#" className="hover:underline">Himpunan Alumni IPB</a></p>
            <p><a href="#" className="hover:underline">Grup Himpunan Alumni IPB</a></p>
            <p><a href="#" className="hover:underline">LinkedIn Alumni Ilkom IPB</a></p>
            <p><a href="#" className="hover:underline">IPB University Store</a></p>
            <h3 className="font-bold mt-4">Ikuti Kami</h3>
            <div className="flex gap-4 mt-2">
              {/* <a href="#" className="text-white hover:text-gray-300"><FaFacebookF /></a>
              <a href="#" className="text-white hover:text-gray-300"><FaXTwitter /></a>
              <a href="#" className="text-white hover:text-gray-300"><FaYoutube /></a>
              <a href="#" className="text-white hover:text-gray-300"><FaLinkedinIn /></a>
              <a href="#" className="text-white hover:text-gray-300"><FaInstagram /></a> */}
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-6 border-t flex justify-center items-center p-4">
          <p className="">Ilmu Komputer IPB University © 2023. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
