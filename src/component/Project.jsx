import {TfiCup} from "react-icons/tfi"
import {AiFillLike} from "react-icons/ai"
import {PiUserListFill} from "react-icons/pi"
import {AiOutlineTeam} from "react-icons/ai"
import {AiOutlineDown} from "react-icons/ai"


function Project() {
  return (
    <div className=" relative min-h-[60vb] py-5 mb-5">
        <div className="flex justify-between bg-mainColor p-[10px] md:p-[30px] w-2/3 min-h-[50px] relative -top-[50px] left-1/2 -translate-x-[50%] ">
            <p className=" text-white font-bold text-md md:text-xl ">WE UNDERSTAND YOUR NEEDS ON CONSTRUCTION</p>
            <div className=" uppercase hover:bg-black duration-300 cursor-pointer py-[10px] px-[20px] bg-[#23282d] rounded-md text-white font-bold  ">request quote</div>
        </div>
        <div className="flex md:flex-row flex-col md:items-center gap-6 mx-5 md:mx-[100px]">
            <div className="md:w-1/2 w-full">
                <span className=" font-[300] uppercase text-[18px]">about us</span>
                <h3 className="text-3xl md:text-4xl font-bold my-3">WE DELIVER LANDMARK PROJECTS</h3>
                <p className=" opacity-70 mb-3">We are rethoric question ran over her cheek When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>
                <ul className="mt-[40px] grid grid-cols-2 grid-rows-2 gap-2">
                    <li className=" flex items-center gap-4">
                        <TfiCup className=" text-mainColor text-5xl"/>
                        <p className=" text-md font-bold">WE HAVE REPUTION FOR EXCELLENCE</p>
                    </li>
                    <li className=" flex items-center gap-4">
                        <AiFillLike className=" text-mainColor text-5xl"/>
                        <p className=" text-md font-bold">GUIDED BY COMMITMENT</p>
                    </li>
                    <li className=" flex items-center gap-4">
                        <PiUserListFill className=" text-mainColor text-5xl"/>
                        <p className=" text-md font-bold">WE BUILD PARTNERSHIPS</p>
                    </li>
                    <li className=" flex items-center gap-4">
                        <AiOutlineTeam className=" text-mainColor text-5xl"/>
                        <p className=" text-md font-bold">A TEAM OF PROFESSIONALS</p>
                    </li>
                </ul>
            </div>
            <div className="md:w-1/2 w-full">
                <h3 className="text-3xl md:text-4xl font-bold mb-[50px]">our values</h3>
                <p className=" opacity-70 -mt-[20px] mb-5">Minim Austin 3 wolf moon scenester aesthetic, umami odio pariatur bitters. Pop-up occaecat taxidermy street art, tattooed beard literally.</p>
                <ul className="flex flex-col gap-3">
                    <li className=" border-2 border-solid border-[rgba(0,0,5,0.1)]">
                        <div className="p-2 flex items-center justify-between mx-3">
                            <span className="font-bold">safety</span>
                            <span><AiOutlineDown className=" bg-black text-white text-[10px] w-[25px] h-[25px] cursor-pointer rounded-md"/></span>
                        </div>
                    </li>
                    <li className=" border-2 border-solid border-[rgba(0,0,5,0.1)]">
                        <div className="p-2 flex items-center justify-between mx-3">
                            <span className="font-bold">customer service</span>
                            <span><AiOutlineDown className=" bg-black text-white text-[10px] w-[25px] h-[25px] cursor-pointer rounded-md"/></span>
                        </div>
                    </li>
                    <li className=" border-2 border-solid border-[rgba(0,0,5,0.1)]">
                        <div className="p-2 flex items-center justify-between mx-3">
                            <span className="font-bold">integrity</span>
                            <span><AiOutlineDown className=" bg-black text-white text-[10px] w-[25px] h-[25px] cursor-pointer rounded-md"/></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Project