
function AddNewItem() {
  return (
      <div className="z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex items-center justify-center h-[50vh] w-[50vw] bg-adminbgColor border-2 border-adminblueColor text-white ">
        <form className="flex flex-col gap-5">
            <input placeholder="Name" className=" pb-2 outline-none bg-transparent border-b-[1px] border-adminblueColor" type="text" />
            <input placeholder="Weight" className=" pb-2 outline-none bg-transparent border-b-[1px] border-adminblueColor" type="text" />
            <input placeholder="Price" className=" pb-2 outline-none bg-transparent border-b-[1px] border-adminblueColor" type="text" />
            <button className="transition-all  bg-adminblueColor hover:shadow hover:scale-[1.05] text-[12px] border-[1px] border-adminblueColor mt-3 py-2 px-10 ">Add</button>
        </form>
      </div>
  )
}

export default AddNewItem
