import React from "react";

const Banner=()=>{
    return (
        <div className="flex  w-full bg-black pl-[10vw] flex-col text-[#f7f8f9] py-10">
                <div className="flex text-left text-[48px] font-[650] flex-col mb-4">
                    Hire the best <br /> lawyers for any case <br /> Online.
                </div>
                <div>

                    <button className="rounded-md px-10 py-2 text-center bg-[#e60278] mx-[1vw] text-md font-[650]">
                        Hire a Lawyer
                    </button>
                    <button className="rounded-md px-10 py-2 text-center bg-[#e60278] text-md font-[650]">
                        Get a Case
                    </button>
                </div>

        </div>
    );
};
export default Banner;