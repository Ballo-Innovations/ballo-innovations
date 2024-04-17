import './balloAds.css'
import background from '@/public/Backgrounds/hero-bg.png'
// NOTE: Use the image bellow to animate effects
// import balloAds from '@/public/elements small/1.png'
// import playStore from '@/public/elements small/18.png'
// import appleStore from '@/public/elements small/19.png'

import balloAdsPhone from '@/public/elements small/1.png'
import appIcon from '@/public/Ballo Logo New/App icon 1.png'

import Image from 'next/image'

const BalloAdsDemo = () => {
  return (
    <section
      className='min-h-screen text-white py-14'
      style={{ background: `url(${background.src})`, backgroundSize: 'cover' }}
    >
      <div className="flex-center flex-col md:flex-row md:px-10 gap-10 md:gap-0">
        <div className='flex justify-center items-center md:items-start flex-col text-center gap-10'>
          <Image
            src={appIcon}
            alt="Ballo Ads"
            quality={100}
            className="w-28"
          />
          <h2 className='subheading mb-5 leading-[0.9em] md:text-[4.5em] md:text-left'>
            Advertise your brand in only a few seconds.
          </h2>
          <button className='hidden md:block rounded-full px-10 py-2 bg-[var(--brand-color-4)] text-[var(--brand-color-1)] font-semibold text-xl'>
            Coming Soon
          </button>
        </div>
        
        <Image
          src={balloAdsPhone}
          alt="Ballo Ads"
          quality={100}
          className="w-full md:w-1/2"
        />

          <button className='block mt-5 md:hidden rounded-full px-10 py-2 bg-[var(--brand-color-4)] text-[var(--brand-color-1)] font-semibold text-2xl'>
            Coming Soon
          </button>
      </div>
    </section>
  )
}

export default BalloAdsDemo
