import background from '@/public/Backgrounds/About.png'
import Image from 'next/image'

import person1 from '@/public/elements small/11.png'
import ring from '@/public/elements small/12.png'

const MissionValues = () => {
  return (
    <section
      className='nav-paddin pt-[40vh] px-5 md:px-24 w-full relative'
      style={{ background: `url(${background.src})`, backgroundSize: 'cover' }}
    >
      <div className='absolute opacity-50 md:opacity-100 top-[40vh] md:top-auto md:bottom-0 left-10 w-[75vw]'>
        <div className='relative'>
          <Image
            src={person1}
            alt="Mission and Values"
            quality={100}
            className="w-1/2 relative z-[1] hidden md:block"
          />

          <Image
            src={ring}
            alt="Mission and Values"
            quality={100}
            className="-mt-20 md:mt-0 -ml-5 md:ml-0 md:absolute top-0 left-[6%] z-0 md:w-[26.5%] opacity-50 md:opacity-100"
          />

          <Image
            src={ring}
            alt="Mission and Values"
            quality={100}
            className="md:hidden absolute top-[80vh] -right-[20%] z-0 w-1/2 opacity-80"
          />

          <Image
            src={ring}
            alt="Mission and Values"
            quality={100}
            className="md:hidden absolute top-[120vh] -left-[10%] z-0 w-1/3 opacity-80"
          />          
        </div>       
      </div>
      <div className='relative z-[3]'>
        <h2 className='subheading mb-5 text-center md:text-left'>
          MISSION & VALUES
        </h2>
        <p className='md:w-[55%] text-[1.1em] leading-8 text-center md:text-left'>
          Ballo Innovations is built on the foundations of an ecosystem that is driven to make entities
          achieve maximum results through advertising, branding and progressive marketing solutions.
          We are a company that puts clients first and takes pride in building meaningful life-long relationships.
        </p>
      </div>

      <div className='self-end flex flex-col md:items-end mt-10 md:mb-36 relative z-[3]'>
        <h2 className='subheading mb-5 text-center md:text-right'>
          WHY BALLO?
        </h2>
        <p className='md:w-[55%] text-[1.1em] leading-8 text-center md:text-right'>
          We have a dedicated team of professionals who specialise in various aspects of marketing,
          such as branding, digital and  social media marketing, photography and videography, analytics
          and web development.  
          <br/>
          <br/>
          Our experts have the knowledge, skills, and experience to develop effective marketing strategies
          and campaigns that can help achieve your business objectives. Partnering with us will save you time
          and resources as we assure to give you service that is FAST, EXCELLENT and AFFORDABLE.
          This allows your business to focus on its core competencies and operations while leaving marketing
          to the experts.
        </p>
      </div>
    </section>
  )
}

export default MissionValues