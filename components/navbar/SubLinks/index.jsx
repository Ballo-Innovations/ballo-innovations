import Link from "next/link";
import "./style.css";

const SubLinks = ({ items }) => {
  return (
    <div className="sub-links-container">
      <ul className="sub-links">
        {items.map((item, index) => (
          <Link href={item.path} key={index}>
            <li>{item.name}</li>
          </Link>
        ))}
        <Link href="/works/ballo-mag">
          <li>Ballo Mag</li>
        </Link>
      </ul>
    </div>
  );
};

export default SubLinks;
