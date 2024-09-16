import React from 'react'

function Banner() {
  return (
    <section className="bg-primary1">
        <div className="max-w-[1200px] mx-auto py-20">
            <div className="flex gap-x-15 items-center justify-between">
                <div className="flex flex-col gap-6">
                    <div className="text-white font-bold text-4xl">
                        When you play the Startup game, You play to Win
                    </div>
                    <div className="text-white font-normal text-lg">
                        In the world of startups, second place is just the first loser. 
                        That's why at Product House, we're not interested in participation trophies. 
                        We're here to close deals, crush competition, and create market leaders.
                    </div>
                    <button className="rounded text-primary1 bg-primary2 w-[212px] h-[52px] font-bold text-[16px] mt-3">Let’s build together</button>
                </div>
                
                <img src="/assets/banner.svg" className="min-w-[600px]"/>
                
            </div>
        </div>
    </section>
  )
}

export default Banner
