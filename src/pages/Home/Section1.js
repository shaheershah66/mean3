import React from "react";

export default function Section1(){
    return(
        <div className="Section1 w-full">
            <div className="section1-container w-full relative h-[800px]"> 
                <img className="w-full h-full object-cover object-top absolute top-0 left-0 -z-10" src="mean3-bg-picture.jpg"></img>
                <div className="text-white flex w-1/2 h-full justify-center flex-col">
                    <div className="flex whitespace-nowrap">
                        <h3 className="text-2xl p-4 opacity-70 w-[64%] text-right bg-black rounded-r-lg">WE DELIVER<strong> Results</strong></h3>
                        <a className="text-2xl text-center p-4 w-[35%] opacity-70 rounded-r-lg ml-2 bg-[#cd2122]">See Portfolio</a>
                    </div>
                    <h3 className="text-base w-[80%] p-4 opacity-70 text-right bg-black rounded-r-lg mt-2">FOR HUNDREDS OF SUCCESSFUL BUSINESSES WORLDWIDE</h3>
                </div> 
            </div>
        </div>
    );
}