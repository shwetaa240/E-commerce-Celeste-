import React from "react";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter,faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-2 mt-20 text-sm bg-gray-600 text-white p-5">
      <div>
        <img src={assets.logo2} className="mb-5 w-40" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          blanditiis quod culpa modi dolores, unde, natus neque obcaecati quidem
          dolor pariatur hic! A itaque provident quo amet libero nobis deleniti.
        </p>
        <p className='mt-4 iconn'>
            <FontAwesomeIcon icon={faXTwitter} className="mr-4 ic"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faInstagram} className="mr-4 ic"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faFacebookF} className="mr-4 ic"></FontAwesomeIcon>
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
        <ul className="list-none mb-4 ">
            <li className="mb-2">Home</li>
            <li className="mb-2">About</li>
            <li className="mb-2">Contact</li>
           <li className="mb-2">Delivery</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Get In Touch</h3>
        <ul className="list-none mb-4">
            <li className="mb-2">+91-955529XXX1</li>
            <li className="mb-2">shwsrivastava07@gmail.com</li>
        </ul>
      </div>
      </div>
      <div className="flex flex-col items-center bg-gray-600 text-white pb-1">
      <p className="w-full h-[1px] bg-white"></p>
      <p className="copy">Copyright@Shweta Srivastava &emsp;&emsp;All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
