import { ImSearch } from 'react-icons/im';
import { AiOutlineDown } from 'react-icons/ai';
import { useState } from 'react';
import DropdownServices from './DropdownServices';
import DropdownInput from './DropdownInput';

function Navbar() {
    let [open , setopen] = useState(false)
    let [openinput , setopeninput] = useState(false)
    
  return (
    <>
    <div className='bg-[#23282d] px-[50px] justify-between gap-5 py-5 pb-[100px] min-h-[70px] text-white font-bold flex flex-col md:flex-row items-center'>
        <div>
            <ul className='flex flex-col md:flex-row gap-5 items-center relative'>
                <li className=" hover:text-mainColor cursor-pointer duration-300 uppercase mr-4">Home</li>
                <li className=" hover:text-mainColor cursor-pointer duration-300 uppercase mr-4">Company</li>
                <li className=" hover:text-mainColor cursor-pointer duration-300 uppercase mr-4">Projects</li>
                <li onClick={() => {setopen(!open)}} className=" hover:text-mainColor cursor-pointer duration-300 uppercase mr-4 flex items-center gap-2">Services <AiOutlineDown/></li>
                {open && <DropdownServices/> }
                <li className=" hover:text-mainColor cursor-pointer duration-300 uppercase mr-4">Features</li>
                <li className=" hover:text-mainColor cursor-pointer duration-300 uppercase mr-4">News</li>
                <li className=" hover:text-mainColor cursor-pointer duration-300 uppercase mr-4">Contact</li>
            </ul>
        </div>
        <div>
            <ImSearch onClick={() => {setopeninput(!openinput)}} className='relative opacity-50 cursor-pointer' />
            {openinput && <DropdownInput/>}
        </div>
    </div>
    </>
  )
}

export default Navbar