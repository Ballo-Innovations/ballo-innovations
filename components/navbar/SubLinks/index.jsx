import Link from "next/link"
import './style.css'

const SubLinks = ({items}) => {
  return (
    <div className="sub-links-container">
      <ul className="sub-links">
        { items.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        )) }
      </ul>
    </div>
  )
}

export default SubLinks