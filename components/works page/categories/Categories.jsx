import { categoryPaths } from '@/constants/services'
import CategoryLinks from './categoryLinks/CategoryLinks'
import "./style.css"

const Categories = () => {
  
  return (
    <div className='flex-center flex-wrap gap-5 pb-[20vh]' id='categories-container'>
      {
        categoryPaths.map((category, index) => (
          <CategoryLinks key={index} category={category} />
        ))
      }
    </div>
  )
}

export default Categories