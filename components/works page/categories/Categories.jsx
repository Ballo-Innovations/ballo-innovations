import { categoryPaths } from '@/constants/services'
import CategoryLinks from './categoryLinks/CategoryLinks'

const Categories = () => {
  
  return (
    <div className='flex-center flex-wrap gap-5 pb-[20vh]'>
      {
        categoryPaths.map((category, index) => (
          <CategoryLinks key={index} category={category} />
        ))
      }
    </div>
  )
}

export default Categories