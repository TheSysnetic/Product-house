"use client"
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import React from "react"
function TopNavbar() {
  return (
    <section className="bg-primary1 hidden lg:block px-5 xl:px-0">
        <div className="max-w-[1200px] mx-auto  py-1.5">
            <nav className="flex items-center justify-between px-6 lg:px-0" aria-label="Global">
                <div className="flex gap-24">
                    <div className="flex gap-x-4 text-white justify-center items-center font-light text-[15px]">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Montclair, New Jersey</span>
                    </div>
                    <div className="flex gap-x-4 text-white justify-center items-center font-light text-[15px]">
                        <FontAwesomeIcon icon={faPhone} />
                        <a href="tel:+12012904909">+1 (201) 290-4909</a>
                    </div>
                </div>
                <div className="flex gap-x-7">
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
            </nav>
        </div>
    </section>
  )
}

export default TopNavbar
