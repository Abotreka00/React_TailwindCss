import CountUp from 'react-countup';
import {ImHome} from "react-icons/im"
import {FcBusinessman} from "react-icons/fc"
import {AiFillClockCircle} from "react-icons/ai"
import {BiWorld} from "react-icons/bi"
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
function Skills() {
  let [scrollOn, setscrollon] = useState(false)

  console.log(scrollOn);

  return (
    <ScrollTrigger onEnter={() => {setscrollon(true)}} onExit={() => {setscrollon(false)}}>
      <div className="w-full bg-nestColor min-h-[200px] py-[40px]">
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mx-[50px]'>
          <div className='text-center'>
            <ImHome className='mx-auto text-6xl text-mainColor mb-[20px]'/>
            {scrollOn && <CountUp start={0} end={1780} duration={5} className='text-4xl text-white font-bold'/>}
            <p className='text-[18px] uppercase text-mainColor mt-5 font-bold'>total projects</p>
          </div>
          <div className='text-center'>
          <FcBusinessman className='mx-auto text-6xl text-mainColor mb-[20px] '/>
            {scrollOn && <CountUp start={0} end={650} duration={5} className='text-4xl text-white font-bold'/>}
            <p className='text-[18px] uppercase text-mainColor mt-5 font-bold'>staff members</p>
          </div>
          <div className='text-center'>
          <AiFillClockCircle className='mx-auto text-6xl text-mainColor mb-[20px] '/>
            {scrollOn && <CountUp start={0} end={4000} duration={5} className='text-4xl text-white font-bold'/>}
            <p className='text-[18px] uppercase text-mainColor mt-5 font-bold'>hours of work</p>
          </div>
          <div className='text-center'>
          <BiWorld className='mx-auto text-6xl text-mainColor mb-[20px] '/>
            {scrollOn && <CountUp start={0} end={45} duration={5} className='text-4xl text-white font-bold'/>}
            <p className='text-[18px] uppercase text-mainColor mt-5 font-bold'>countries experience</p>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  )
}

export default Skills