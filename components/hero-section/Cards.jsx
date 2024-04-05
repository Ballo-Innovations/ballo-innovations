import Image from 'next/image'
import services from '@/constants/services'

const Cards = () => {
  return (
    <div id='service-cards-wrapper' className='mt-52'>
      <div id="services-cards-container" className='w-max flex gap-5 lg:gap-10 px-5 lg:px-0'>
        {services.map((service) => {
          return (
            <div key={service.name} className='service-card flex flex-col text-white w-80 lg:w-[30vw] justify-between p-5 rounded-[50px] shadow-2xl'>
              <div className="fex flex-col">
                <Image
                  src={service.img}
                  alt={service.name}
                  quality={100}
                  className='w-16'
                />

                <h2 className='font-bold text-[1.6em] py-2 w-8/12 leading-7'>
                  {service.name}
                </h2>
              </div>

              <p className='text-sm text-center'>
                {service.summary}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cards