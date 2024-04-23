import background from '@/public/Backgrounds/hero-bg.png'
import Categories from './categories/Categories'

const Works = () => {
  return (
    <main className='max-w-[w-100vw] overflow-hidden'>
      <section className='text-white nav-padding' style={{ background: `url(${background.src})`, backgroundSize: 'cover'}}>
        <h2 className='subheading mb-5 text-center md:text-left'>
          Our Works
        </h2>
        <Categories />
      </section>
    </main>
  )
}

export default Works