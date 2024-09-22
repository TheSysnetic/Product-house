"use client";
import React, { useState, useEffect, useRef } from "react";

// Custom smooth scroll function
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

function BottomNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("banner");

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

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
    <section className="sticky inset-x-0 top-0 z-50 bg-white shadow-md">
      <header className="max-w-[1200px] mx-auto px-5 xl:px-0">
        <nav className="flex items-center justify-between py-5 lg:py-6" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="w-auto" src="/assets/logo-v1.svg" alt="Logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-button"
              type="button"
              onClick={handleMobileMenuToggle}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-14 xl:gap-x-20 navigation">
            <a
              href="#banner"
              onClick={() => scrollToSection("banner")}
              className={`text-[16px] font-semibold leading-6 ${
                activeSection === "banner" ? "!text-primary2" : "text-gray-900"
              }`}
            >
              Home
            </a>
            <a
              href="#what-we-do"
              onClick={() => scrollToSection("what-we-do")}
              className={`text-[16px] font-semibold leading-6 ${
                activeSection === "what-we-do" ? "!text-primary2" : "text-gray-900"
              }`}
            >
              What we do
            </a>
            <a
              href="#what-we-offer"
              onClick={() => scrollToSection("what-we-offer")}
              className={`text-[16px] font-semibold leading-6 ${
                activeSection === "what-we-offer" ? "!text-primary2" : "text-gray-900"
              }`}
            >
              What we offer
            </a>
            <a
              href="#contact"
              onClick={() => scrollToSection("contact")}
              className={`text-[16px] font-semibold leading-6 ${
                activeSection === "contact" ? "!text-primary2" : "text-gray-900"
              }`}
            >
              Contact
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#contact" onClick={() => scrollToSection("contact")} className="bg-primary1 rounded-lg px-11 py-2 font-semibold leading-7 text-white text-[16px] cursor-pointer hover:bg-[#356760] focus:bg-[#112E2A]">
              Get in touch
            </a>
          </div>
        </nav>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto" src="/assets/logo-v1.svg" alt="" />
                </a>
                <button
                  id="mobile-menu-close"
                  type="button"
                  onClick={handleMobileMenuClose}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a
                      href="#banner"
                      onClick={() => {
                        scrollToSection("banner");
                        handleMobileMenuClose();
                      }}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                        activeSection === "banner" ? "!text-primary2" : "text-gray-900"
                      } hover:bg-gray-50`}
                    >
                      Home
                    </a>
                    <a
                      href="#what-we-do"
                      onClick={() => {
                        scrollToSection("what-we-do");
                        handleMobileMenuClose();
                      }}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                        activeSection === "what-we-do" ? "!text-primary2" : "text-gray-900"
                      } hover:bg-gray-50`}
                    >
                      What we do
                    </a>
                    <a
                      href="#what-we-offer"
                      onClick={() => {
                        scrollToSection("what-we-offer");
                        handleMobileMenuClose();
                      }}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                        activeSection === "what-we-offer" ? "!text-primary2" : "text-gray-900"
                      } hover:bg-gray-50`}
                    >
                      What we offer
                    </a>
                    <a
                      href="#contact"
                      onClick={() => {
                        scrollToSection("contact");
                        handleMobileMenuClose();
                      }}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                        activeSection === "contact" ? "!text-primary2" : "text-gray-900"
                      } hover:bg-gray-50`}
                    >
                      Contact
                    </a>
                  </div>
                  <div className="py-6">
                    <a href="#contact" onClick={() => {
                        scrollToSection("contact");
                        handleMobileMenuClose();
                      }} className="bg-primary1 rounded-lg px-11 py-2 font-semibold leading-7 text-white text-sm cursor-pointer hover:bg-[#356760] focus:bg-[#112E2A]">
                      Get in touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </section>
  );
}

export default BottomNavbar;
