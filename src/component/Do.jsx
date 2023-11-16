import {CgSmartHomeBoiler} from "react-icons/cg"
import mohandessTwo from "../image/mohandesTwo.jpg"

function Do() {
  return (
    <div className="mt-[100px]">
        <div className="mb-[50px] text-center">
            <span className=" uppercase font-[300] text-xl">we are specialists in</span>
            <h3 className="text-5xl mt-3 font-bold">what we do</h3>
        </div>
        <div className="grid mx-3 md:mx-[100px] md:grid-cols-3 gap-3">
            <div>
                <div className="flex items-center mb-8 gap-2">
                    <CgSmartHomeBoiler className="text-8xl text-mainColor"/>
                    <div>
                        <h4 className="hover:text-mainColor cursor-pointer duration-300 font-bold mb-2">HOME CONSTRUCTION</h4>
                        <p className="opacity-80">Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                    </div>
                </div>
                <div className="flex items-center mb-8 gap-2">
                    <CgSmartHomeBoiler className="text-8xl text-mainColor"/>
                    <div>
                        <h4 className="hover:text-mainColor cursor-pointer duration-300 font-bold mb-2">HOME CONSTRUCTION</h4>
                        <p className="opacity-80">Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                    </div>
                </div>
                <div className="flex items-center mb-8 gap-2">
                    <CgSmartHomeBoiler className="text-8xl text-mainColor"/>
                    <div>
                        <h4 className="hover:text-mainColor cursor-pointer duration-300 font-bold mb-2">HOME CONSTRUCTION</h4>
                        <p className="opacity-80">Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                    </div>
                </div>
            </div>

            <img src={mohandessTwo}/>

            <div>
                <div className="flex items-center mb-8 gap-2">
                    <CgSmartHomeBoiler className="text-8xl text-mainColor"/>
                    <div>
                        <h4 className="hover:text-mainColor cursor-pointer duration-300 font-bold mb-2">HOME CONSTRUCTION</h4>
                        <p className="opacity-80">Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                    </div>
                </div>
                <div className="flex items-center mb-8 gap-2">
                    <CgSmartHomeBoiler className="text-8xl text-mainColor"/>
                    <div>
                        <h4 className="hover:text-mainColor cursor-pointer duration-300 font-bold mb-2">HOME CONSTRUCTION</h4>
                        <p className="opacity-80">Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                    </div>
                </div>
                <div className="flex items-center mb-8 gap-2">
                    <CgSmartHomeBoiler className="text-8xl text-mainColor"/>
                    <div>
                        <h4 className="hover:text-mainColor cursor-pointer duration-300 font-bold mb-2">HOME CONSTRUCTION</h4>
                        <p className="opacity-80">Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Do