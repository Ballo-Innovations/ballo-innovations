import Image from 'next/image'
import phone from '@/public/elements small/phone.png'
import CategoryLinks from './categoryLinks/CategoryLinks'

const Categories = () => {
  const categories = [
    {
      name: 'Social Media Management',
      cover: phone,
    },
    {
      name: 'Graphic Design',
      cover: phone,
    },
    {
      name: 'Photography',
      cover: phone,
    },
    {
      name: 'Web Development ',
      cover: phone,
    },
    {
      name: 'Adversting',
      cover: phone,
    },
  ]
  return (
    <div className='flex-center flex-wrap gap-5 pb-[20vh]'>
      {
        categories.map((category, index) => (
          <CategoryLinks key={index} name={category.name} cover={category.cover} />
        ))
      }
    </div>
  )
}

export default Categories