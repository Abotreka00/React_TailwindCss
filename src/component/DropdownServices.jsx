function DropdownServices() {
  return (
    <div className=" z-50 border-t-2 border-mainColor absolute left-[110px] top-[135px] bg-white text-black shadow-md px-4">
        <ul>
            <li className='hover:text-mainColor cursor-pointer duration-300 pt-3 uppercase'>Services All</li>
            <li className='hover:text-mainColor cursor-pointer duration-300 py-3 uppercase'>Services Single</li>
        </ul>
    </div>
  )
}

export default DropdownServices