import React from 'react'

function GetInTouch() {
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-10 py-24">
            <div className="text-black font-semibold text-2xl">
                Get in touch
            </div>
            <div className="text-black font-normal text-xl">
                Remember, in the world of startups, you&apos;re either disrupting or being disrupted. With Product House, 
                disruption isn&apos;t just a buzzword - it&apos;s a way of life.
            </div>
            <form>
                <div className="grid grid-cols-3 gap-5">
                    <input
                    type="text"
                    placeholder="Your Name"
                    className="border-b-2 border-[#C7C7C7]  focus:outline-none focus:border-primary1 w-full py-5 px-2 placeholder-black placeholder:font-medium placeholder:text-[17px]"/>

                    <input
                    type="text"
                    placeholder="Email Address"
                    className="border-b-2 border-[#C7C7C7] focus:outline-none focus:border-primary1 w-full py-5 px-2 placeholder-black placeholder:font-medium placeholder:text-[17px]"/>

                    <input
                    type="text"
                    placeholder="Phone Number (optional)"
                    className="border-b-2 border-[#C7C7C7] focus:outline-none focus:border-primary1 w-full py-5 px-2 placeholder-black placeholder:font-medium placeholder:text-[17px]"/>
                </div>
                <textarea
                    type="text"
                    placeholder="Message"
                    className="border-b-2 border-[#C7C7C7] focus:outline-none focus:border-primary1 w-full py-5 px-2 mt-10 placeholder-black placeholder:font-medium placeholder:text-[17px]"/>
                <button type="submit" className="rounded text-primary1 bg-primary2 w-[212px] h-[52px] font-bold text-[16px] mt-10">Leave us a message</button>
            </form>
      </div>
    </section>
  )
}

export default GetInTouch
