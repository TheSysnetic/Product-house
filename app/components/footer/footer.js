"use client"
import Link from 'next/link'
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

function Footer() {
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
    <section className='bg-primary1'>
        <div className="max-w-[1200px] mx-auto bg-image object-contain bg-no-repeat md:bg-right-bottom px-5 xl:px-0">
            <div className="grid grid-col-reverse lg:grid-cols-3 gap-32 min-h-[390px] items-center py-10">
                <div className='flex flex-col gap-5 lg:order-none order-last'>
                    <img src="/assets/logo-v2.svg" className='lg:w-auto w-[300px]'/>
                    <p className='text-white font-inherit font-normal'>Hello, we are Product House. We empower design + technology solutions.</p>
                    <div className='flex gap-x-7 mt-12'>
                    <Link href={'https://www.behance.net/producthouse'} target="_blank">
                        <img src="/assets/behance.svg" />
                    </Link>
                    <Link href={'https://www.instagram.com/producthouse__/'} target="_blank">
                        <img src="/assets/instagram.svg" />
                    </Link>
                    <Link href={'https://www.linkedin.com/company/product-house1/about/'} target="_blank">
                        <img src="/assets/linkedin.svg" />
                    </Link>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='text-white font-inherit text-lg font-medium'>Quick Links</p>
                    <a
                        href="#banner"
                        onClick={() => scrollToSection("banner")}
                        className='text-white font-inherit text-lg font-normal opacity-50'
                    >
                        Home
                    </a>
                    <a
                        href="#what-we-do"
                        onClick={() => scrollToSection("what-we-do")}
                        className='text-white font-inherit text-lg font-normal opacity-50'
                    >
                        What we do
                    </a>
                    <a
                        href="#what-we-offer"
                        onClick={() => scrollToSection("what-we-offer")}
                        className='text-white font-inherit text-lg font-normal opacity-50'
                    >
                        What we offer
                    </a>
                    <a
                        href="#contact"
                        onClick={() => scrollToSection("contact")}
                        className='text-white font-inherit text-lg font-normal opacity-50'
                    >
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
