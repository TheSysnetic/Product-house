import React from "react"

function WhatWeOffer() {
  return (
    <section className="bg-black" id="what-we-offer">
      <div className="max-w-[1200px] mx-auto py-20 px-5 xl:px-0">
        <div className="flex flex-col gap-y-10">
            <div className="text-white font-bold text-[30px]">
                Our winning playbook
            </div>
            <div className="text-white font-normal text-[20px]">
                We don&apos;t just play the game - we change it. Our winning playbook is designed to transform your startup from a mere 
                player into the MVP of your industry. Here&apos;s what we offer
            </div>
            {/* Card one */}
            <div className="bg-secondary rounded-2xl p-5">
              <div className="flex flex-col lg:flex-row  gap-x-32 justify-between">
                <div className="flex flex-col gap-y-5">
                    <div className="text-primary2 font-bold text-[40px]">
                        Digital Design
                    </div>
                    <div>
                        <ul className="ml-5">
                            <li className="text-white list-disc font-semibold text-lg">UI/UX Design</li>
                            <li className="text-white text-lg">We create interfaces so intuitive, your grandmother could use them.</li>
                        </ul>
                    </div>
                    <div>
                      <ul className="ml-5">
                          <li className="text-white list-disc font-semibold text-lg">Discovery Workshops</li>
                          <li className="text-white text-lg">Defining and conceptualising your business by identify user needs, goals through 
                              collaborative sessions, ensuring effective and user-centred design solutions.
                          </li>
                        </ul>
                    </div>
                    <div>
                      <ul className="ml-5">
                          <li className="text-white list-disc font-semibold text-lg">Brand Identity Development</li>
                          <li className="text-white text-lg"> 
                            We don&apos;t just design logos; we craft visual empires that burn themselves into the public consciousness.
                          </li>
                        </ul>
                    </div>
                    <div className="mb-12">
                      <ul className="ml-5">
                          <li className="text-white list-disc font-semibold text-lg">User Journey and UX Research</li>
                          <li className="text-white text-lg"> 
                            We don&apos;t just map the user journey; we pave it with gold and line it with proper conceptual models, rationales and frameworks.
                          </li>
                        </ul>
                    </div>                    
                </div>
                <img className="w-[300px] flex items-center lg:w-auto h-auto" src="/assets/card-1.svg"/>
              </div>
            </div>
            {/* Card two */}
            <div className="bg-secondary rounded-2xl p-5">
              <div className="flex flex-col lg:flex-row  gap-x-32 justify-between">
                <div className="flex flex-col gap-y-5">
                    <div className="text-primary2 font-bold text-[40px]">
                      Hardware Product Development
                    </div>
                    <div>
                        <ul className="ml-5">
                            <li className="text-white list-disc font-semibold text-lg">Concept Refinement</li>
                            <li className="text-white text-lg">We take your idea and inject it with a dose of reality and a shot of ambition.</li>
                        </ul>
                    </div>
                    <div>
                      <ul className="ml-5">
                          <li className="text-white list-disc font-semibold text-lg">Prototyping</li>
                          <li className="text-white text-lg">
                            We move fast and break things, so your final product is unbreakable.
                          </li>
                        </ul>
                    </div>
                    <div>
                      <ul className="ml-5">
                          <li className="text-white list-disc font-semibold text-lg">Engineering & Manufacturing</li>
                          <li className="text-white text-lg"> 
                            Our network of partners means your product gets built right, on time, and on budget.
                          </li>
                        </ul>
                    </div>
                    <div className="mb-12">
                      <ul className="ml-5">
                          <li className="text-white list-disc font-semibold text-lg">Quality Assurance</li>
                          <li className="text-white text-lg"> 
                            We&apos;re perfectionists, because in hardware, second chances are for the weak.
                          </li>
                        </ul>
                    </div>                    
                </div>
                <img className="w-[300px] flex items-center lg:w-auto h-auto" src="/assets/card-2.svg"/>
              </div>
            </div>
            {/* Card Three */}
            <div className="bg-secondary rounded-2xl p-5">
                <div className="flex flex-col lg:flex-row  gap-x-32 justify-between">
                  <div className="flex flex-col gap-y-5">
                      <div className="text-primary2 font-bold text-[40px]">
                        Startup Strategy
                      </div>
                      <div>
                          <ul className="ml-5">
                              <li className="text-white list-disc font-semibold text-lg">Market Analysis</li>
                              <li className="text-white text-lg">We dissect your market with surgical precision, identifying opportunities others miss.</li>
                          </ul>
                      </div>
                      <div>
                        <ul className="ml-5">
                            <li className="text-white list-disc font-semibold text-lg">Competitive Edge Definition</li>
                            <li className="text-white text-lg">
                              We don&apos;t just help you compete; we position you to render the competition irrelevant.
                            </li>
                          </ul>
                      </div>
                      <div>
                        <ul className="ml-5">
                            <li className="text-white list-disc font-semibold text-lg">Financial Modeling</li>
                            <li className="text-white text-lg"> 
                              Our financial strategies aren&apos;t just about staying afloat; they&apos;re about building an empire.
                            </li>
                          </ul>
                      </div>
                      <div className="mb-12">
                        <ul className="ml-5">
                            <li className="text-white list-disc font-semibold text-lg">Pitch Deck Mastery</li>
                            <li className="text-white text-lg"> 
                              We craft pitches that don&apos;t just impress investors; they make them fight for the privilege of funding you.
                            </li>
                          </ul>
                      </div>                    
                  </div>
                  <img className="w-[300px] flex items-center lg:w-auto h-auto" src="/assets/card-3.svg"/>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer
