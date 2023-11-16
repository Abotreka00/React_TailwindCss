import mohandess from "../image/mohandess.jpg"
console.log(mohandess);
function Landing() {
  return (
    <div className=" relative min-h-[100vb] bg-no-repeat bg-cover text-white" style={{ backgroundImage: `url(${mohandess})` }}>
        <div className=" absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.80)] ">
        <div className="top-[50px] left-5 absolute md:top-2/4 md:left-2/4 md:-translate-x-[70%] md:-translate-y-2/4">
            <h3 className=" text-lg md:text-2xl mb-[20px] font-normal uppercase">meet our engineers</h3>
            <h1 className=" text-2xl md:text-5xl mb-[20px] font-bold uppercase">we believe sustainablilty</h1>
            <p className=" opacity-70 uppercase">we will deal with your failure that determines how you achieve success.</p>
            <div className="flex gap-4 mt-[40px]">
                <div className="bg-mainColor py-3 px-5 uppercase cursor-pointer hover:bg-[black] hover:rounded-md duration-300">get free quote</div>
                <div className=" bg-transparent border-2 uppercase border-mainColor py-3 px-5 cursor-pointer hover:bg-mainColor hover:rounded-md duration-300">learn more</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Landing