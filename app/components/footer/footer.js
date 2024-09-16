import React from 'react'

function Footer() {
  return (
    <section className='bg-primary1'>
        <div className="max-w-[1200px] mx-auto bg-image object-contain bg-no-repeat bg-right-bottom">
            <div className="grid grid-cols-3 gap-32 min-h-[390px] items-center">
                <div className='flex flex-col gap-5 '>
                    <img src="/assets/logo-v2.svg" className='w-full'/>
                    <p className='text-white font-inherit font-normal'>Hello, we are Product House. We empower design + technology solutions.</p>
                    <div className='flex gap-x-7 mt-12'>
                        <img src="/assets/behance.svg" />
                        <img src="/assets/instagram.svg" />
                        <img src="/assets/linkedin.svg" />
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='text-white font-inherit text-lg font-medium'>Quick Links</p>
                    <p className='text-white font-inherit text-lg font-normal opacity-50'>Home</p>
                    <p className='text-white font-inherit text-lg font-normal opacity-50'>What we do</p>
                    <p className='text-white font-inherit text-lg font-normal opacity-50'>What we offer</p>
                    <p className='text-white font-inherit text-lg font-normal opacity-50'>Contact</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
