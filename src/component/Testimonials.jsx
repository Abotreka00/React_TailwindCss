import testimonial2 from "../image/testimonial2.png"
import client1 from "../image/client1.png"
import client2 from "../image/client2.png"
import client3 from "../image/client3.png"
import client4 from "../image/client4.png"
import client5 from "../image/client5.png"
import client6 from "../image/client6.png"
import {FaCommentDots} from "react-icons/fa"

function Testimonials() {
  return (
    <div className="grid mx-[50px] my-[60px] grid-cols-1 md:grid-cols-2 gap-3">
        <div className="relative">
            <h3 className="text-2xl font-bold">Testimonials</h3>
            <div className="mt-[20px] flex items-center mb-[20px] gap-3">
                <FaCommentDots className="text-8xl text-mainColor "/>
                <p className="opacity-80 leading-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam numquam, dolor magnam quo vero similique nam recusandae id cumque repellendus labore, fuga amet veritatis. Esse atque cum temporibus aliquam!</p>
            </div>
            <div className="flex items-center justify-center mt-7 gap-6">
                <img src={testimonial2} className="rounded-lg" />
                <div className="flex flex-col gap-1">
                    <span className="text-mainColor text-xl font-bold">Wedon Cash</span>
                    <h3 className="opacity-80">CFO, First Choice</h3>
                </div>
            </div>
            <div className="flex items-center gap-[20px] justify-center mt-[60px]">
                <span className="block w-[10px] h-[10px] opacity-50 cursor-pointer hover:bg-mainColor hover:opacity-100 duration-300 rounded-full bg-black "></span>
                <span className="block w-[10px] h-[10px] opacity-50 cursor-pointer hover:bg-mainColor hover:opacity-100 bg-mainColor duration-300 rounded-full"></span>
                <span className="block w-[10px] h-[10px] opacity-50 cursor-pointer hover:bg-mainColor hover:opacity-100 duration-300 rounded-full bg-black "></span>
            </div>
        </div>
        <div>
            <h3 className="text-2xl font-bold">Happy Clients</h3>
            <div className="mt-[50px] grid grid-cols-2 md:grid-cols-3 gap-10">
                <img src={client1} className=" border-2 p-2 border-[#dadada] w-full h-full" />
                <img src={client2} className=" border-2 p-2 border-[#dadada] w-full h-full" />
                <img src={client3} className=" border-2 p-2 border-[#dadada] w-full h-full" />
                <img src={client4} className=" border-2 p-2 border-[#dadada] w-full h-full" />
                <img src={client5} className=" border-2 p-2 border-[#dadada] w-full h-full" />
                <img src={client6} className=" border-2 p-2 border-[#dadada] w-full h-full" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials