import imgthree from "../image/imgthree.png"
import "./works.css"

function Works() {
  return (
    <div className="mt-[100px] bg-[#f9f9f9] py-6">
        <div className="mb-[20px] text-center">
            <span className=" uppercase font-[300] text-xl">work of excellence</span>
            <h3 className="text-5xl mt-3 font-bold">recent projects</h3>
        </div>
        <ul className="flex flex-col md:flex-row items-center border-b-4 border-mainColor w-fit gap-5 md:gap-[60px] mx-auto my-[50px]">
            <li className="bg-mainColor cursor-pointer p-[10px] rounded-md font-bold uppercase">show all</li>
            <li className="font-bold uppercase cursor-pointer">commercial</li>
            <li className="font-bold uppercase cursor-pointer">education</li>
            <li className="font-bold uppercase cursor-pointer">government</li>
            <li className="font-bold uppercase cursor-pointer">infrastructure</li>
            <li className="font-bold uppercase cursor-pointer">residential</li>
            <li className="font-bold uppercase cursor-pointer">healthcare</li>
        </ul>
        <div className="grid md:grid-cols-3 grid-cols-1 space-x-16 over md:gap-3 gap-6 mx-9">
            <div className="relative image">
                <img className="w-full" src={imgthree} />
                <div className="overlay">
                    <div className="absolute top-[50%] -translate-x-[50%] -translate-y-[50%] left-[50%]">
                        <h3 className="hover:text-mainColor duration-300 text-xl uppercase text-white font-bold">Saleh Hossam</h3>
                        <div className="p-[10px] text-white text-md bg-mainColor mt-6 rounded-md uppercase font-bold">Commercial interiors</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Works