"use client"
import React, { useState } from 'react';

function BottomNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <section className='max-w-[1200px] mx-auto'>
      <header className="sticky inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between lg:py-6" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/assets/logo-v1.png" alt="" />
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
          <div className="hidden lg:flex lg:gap-x-20 navigation">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Home</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">What we do</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">What we offer</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Contact</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a className="bg-primary1 rounded-lg px-11 py-1 font-semibold leading-7 text-white text-sm cursor-pointer">Get in touch</a>
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
                  <img className="h-8 w-auto" src="/assets/logo-v1.png" alt="" />
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
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">What we do</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">What we offer</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact</a>
                  </div>
                  <div className="py-6">
                    <a className="bg-primary1 rounded-lg px-11 py-2 font-semibold leading-7 text-white text-sm cursor-pointer">Get in touch</a>
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
