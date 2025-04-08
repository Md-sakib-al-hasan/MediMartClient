

export default function Loading() {
    return (
      
      <div className=" ">
      <div className="relative inline-flex">
          <div className="w-8 h-8 bg-[#24aeb1] rounded-full"></div>
          <div className="w-8 h-8 bg-[#24aeb1] rounded-full absolute top-0 left-0 animate-[ping_1s_cubic-bezier(0,0,0.2,1)_infinite] scale-150"></div>
          <div className="w-8 h-8 bg-[#24aeb1] rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
    </div>
    );
  }
  