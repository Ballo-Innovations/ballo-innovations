// compress ballo logo pattern
import background from '@/public/Backgrounds/bi-logo-pattern.png'
import underConstruction from '@/public/Backgrounds/under-construction.png'
import Image from 'next/image'

const PackagesPage = () => {
  return (
    <main className='max-w-[w-100vw] overflow-hidden'>
      <section className='text-white nav-padding bg-[var(--brand-color-1)]' style={{ padding: '25vh 0 0 0' }}>
        <Image
          src={underConstruction}
          alt="background"
          quality={100}
        />
        {/* <Image
          src={background}
          alt="background"
          quality={100}
          // className="md:hidden absolute top-[80vh] -right-[20%] z-0 w-1/2 opacity-80"
        />
        <h2 className='subheading mb-10 lg:mb-0 lg:text-start'>
          Business Starter Packages
        </h2>

        <div className="packages-container">
          <div className="package">
            <h3>Tiye Tiye</h3>
            <div>
              <p>Logo Architecture Letterhead design Email Signature Design & Set up Business Cards Design (100 Print) Social Media Starter Kit</p>
              <p>K7,000</p>
            </div>
          </div>

          <div className="package">
            <h3>Laka Laka</h3>
            <div>
              <p>Logo Architecture Letterhead design Email Signature Design & Set up Business Cards Design (100 Print) Social Media Starter Kit Powerpoint Presentation Template Company Profile Brand Manual</p>
              <p>K12,500</p>
            </div>
          </div>

          <div className="package">
            <h3>Best Best</h3>
            <div>
              <p>Logo Architecture Letterhead design Email Signature Design & set up Business Cards Design (100 Print) Social Media Starter Kit Powerpoint Presentation Template Company Profile Brand Manual Website Design and Development</p>
              <p>K25,000</p>
            </div>
          </div>
        </div> */}
      </section>
    </main>
  )
}

export default PackagesPage