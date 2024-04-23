import Image from 'next/image'
import arrow from '@/public/elements small/10.png'
import Link from 'next/link'

const CategoryLinks = ({ name, cover }) => {
  return (
    <div className="flex-center flex-col md:w-[30%] mt-10">
      <Link href='#' className='w-1/2 flex-center'>
        <Image
          src={cover}
          alt="Mission and Values"
          quality={100}
          className="md:-ml-10"
        />
      </Link>

      <Link href='#' className='flex relative gap-5 mt-3 ml-10 md:ml-0'>
        <h2 className='font-bold text-3xl break-words w-min text-center'>{name}</h2>
        <span className="arrow flex-center">
          <Image
            src={arrow}
            alt={name}
            quality={100}
            className='w-10'
          />
        </span>
      </Link>
    </div>
  )
}

export default CategoryLinks