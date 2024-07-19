import phone from '@/public/elements small/phone.png'
import Image from 'next/image'
import './style.css'

const SocialMediaPage = () => {
  const works = [
    phone,
    phone,
    phone,
    phone,
    phone,
    phone,
  ];
  return (
    <section className='pt-[30vh] bg-[var(--brand-color-5)] md:px-32'>
      <div className="flex flex-col">
        <div className='text-[var(--brand-color-1)] text-center lg:text-start'>
          <h1 className='subheading'>
            Our Works
          </h1>

          <h2 className='text-3xl font-bold my-6'>
            Social Media Management
          </h2>
        </div>
        
        <div className='socials-works flex-center flex-wrap gap-5 pb-[20vh]'>
          {works.map((work, index) => (          
            <Image
              key={index}
              src={work}
              alt="social media management"
              quality={100}
              className="flex-center flex-col md:w-[30%] mt-10 md:-ml-10"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialMediaPage