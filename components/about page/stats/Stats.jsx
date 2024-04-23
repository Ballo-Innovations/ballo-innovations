import Image from "next/image"
import chart from '@/public/elements small/chart.png'
import Counter from "./counter/Counter"

const Stats = () => {
  return (
    <section className="bg-[var(--brand-color-1)] text-white pt-20 pb-14 px-5 md:px-32">
      <div className="flex flex-col">
        <h2 className='subheading mb-10 lg:mb-0 lg:text-start'>
          Grow Your Audience
        </h2>

        <p className="text-center md:text-start">We help you reach the full potential of your brand with our marketing expertise. We specialise in growing your audience across all platforms, from social media to search engines, ensuring maximum visibility and engagement. Let us help you reach new heights and connect with your target audience like never before!</p>

        <div className="flex-center mt-32 md:mt-0">
          <Image
            src={chart}
            alt='statistics'
            quality={100}
            className="scale-[1.5] md:scale-0 md:w-4/5 -ml-16 md:-ml-10"
          />
        </div>

        <Counter />
      </div>
    </section>
  )
}

export default Stats