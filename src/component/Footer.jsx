import footer from '../image/footer-logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiSolidSend } from "react-icons/bi";
function Footer() {
  return (
    <>
    <div className='bg-[#0d0d0d] gap-[30px] relative py-[40px] grid grid-cols-1 md:grid-cols-3 px-10'>
        <div className='text-white'>
            <h2 className='text-xl uppercase font-bold pl-3 border-l-4 border-mainColor mb-5'>about us</h2>
            <img className='w-[200px] mb-5' src={footer} alt="footer" />
            <p className='mb-5 opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minima ipsum fugit tempora eligendi voluptate magni, non molestias expedita odio.</p>
            <div className='flex justify-start gap-10 mt-[40px]'>
                <FaFacebookF className=' cursor-pointer hover:text-mainColor duration-300'/>
                <FaLinkedinIn className=' cursor-pointer hover:text-mainColor duration-300'/>
                <FaFacebookMessenger className=' cursor-pointer hover:text-mainColor duration-300'/>
                <FaGithub className=' cursor-pointer hover:text-mainColor duration-300'/>
            </div>
        </div>
        <div className='text-white'>
            <h2 className='text-xl uppercase font-bold pl-3 border-l-4 border-mainColor mb-5'>working hours</h2>
            <p className='mb-5 opacity-50'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid eos quis reiciendis modi aut omnis quidem error eveniet accusantium rem.</p>
            <div className='opacity-50 flex justify-between mb-3'>
                <span>Monday-Friday:</span>
                <span>10.00-16.00</span>
            </div>
            <div className='opacity-50 flex justify-between mb-3'>
                <span>Saturday:</span>
                <span>12.00-15.00</span>
            </div>
            <div className='opacity-50 flex justify-between mb-3'>
                <span>Sunday and holidays:</span>
                <span>9.00-12.00</span>
            </div>
        </div>
        <div className='text-white'>
            <h2 className='text-xl uppercase font-bold pl-3 border-l-4 border-mainColor mb-5'>services</h2>
            <ul className='flex flex-col gap-3'>
                <li className='flex items-center gap-5 opacity-50 hover:opacity-100 hover:text-mainColor duration-300 cursor-pointer'><BiSolidSend /> Pre-Construction</li>
                <li className='flex items-center gap-5 opacity-50 hover:opacity-100 hover:text-mainColor duration-300 cursor-pointer'><BiSolidSend /> General Contracting</li>
                <li className='flex items-center gap-5 opacity-50 hover:opacity-100 hover:text-mainColor duration-300 cursor-pointer'><BiSolidSend /> Construction Management</li>
                <li className='flex items-center gap-5 opacity-50 hover:opacity-100 hover:text-mainColor duration-300 cursor-pointer'><BiSolidSend /> Design and Build</li>
                <li className='flex items-center gap-5 opacity-50 hover:opacity-100 hover:text-mainColor duration-300 cursor-pointer'><BiSolidSend /> Self-Perform Construction</li>
            </ul>
        </div>
    </div>
    <div className='bg-mainColor flex flex-col md:flex-row justify-between px-5 pt-5 md:px-[100px] items-center '>
        <p>Copyright 2024 Designed & Developed by Themefisher</p>
        <ul className='flex min-h-[60px] items-center gap-5'>
            <li className='cursor-pointer hover:text-white duration-300'>About</li>
            <li className='cursor-pointer hover:text-white duration-300'>Our pepole</li>
            <li className='cursor-pointer hover:text-white duration-300'>Faq</li>
            <li className='cursor-pointer hover:text-white duration-300'>Blog</li>
            <li className='cursor-pointer hover:text-white duration-300'>Pricing</li>
        </ul>
    </div>
    </>
  )
}

export default Footer