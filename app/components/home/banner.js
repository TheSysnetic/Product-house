"use client"
import React, {useEffect, useState} from 'react'

const smoothScrollTo = (target, duration = 1000) => {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
  
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
  
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
  
    requestAnimationFrame(animation);
  };

function Banner() {
    const [activeSection, setActiveSection] = useState("banner");

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
        smoothScrollTo(section, 1500);
        setActiveSection(id); // Set active section when manually scrolling
        }
    };

    // Intersection Observer to detect when sections are in view
    useEffect(() => {
        const sections = ["banner", "what-we-do", "what-we-offer", "contact"];
        const observerOptions = {
        root: null,
        threshold: 0.5, // When 50% of the section is visible
        };

        const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    // Clean up the observer on component unmount
    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
    }, []);

  return (
    <section className="bg-primary1" id="banner">
        <div className="max-w-[1200px] mx-auto py-20 px-5 xl:px-0">
            <div className="flex flex-col lg:flex-row lg:gap-x-15 lg:gap-y-15 items-center justify-between">
                <div className="flex flex-col gap-6">
                    <div className="text-white font-bold text-4xl">
                        When you play the Startup game, You play to Win
                    </div>
                    <div className="text-white font-normal text-lg">
                        In the world of startups, second place is just the first loser. 
                        That&apos;s why at Product House, we&apos;re not interested in participation trophies. 
                        We&apos;re here to close deals, crush competition, and create market leaders.
                    </div>
                    <button onClick={() => scrollToSection("contact")} className="rounded text-primary1 bg-primary2 w-[212px] h-[52px] font-bold text-[16px] mt-3 hover:bg-[#47D5AC] focus:bg-[#13AF82]">Let&apos;s build together</button>
                </div>
                
                <img src="/assets/banner.svg" className="xl:min-w-[600px] xl:mt-0 mt-10"/>
                
            </div>
        </div>
    </section>
  )
}

export default Banner
