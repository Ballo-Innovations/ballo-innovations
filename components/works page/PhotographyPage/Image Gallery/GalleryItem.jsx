import Image from "next/image"
import Link from "next/link"

const GalleryItem = ({ photo, title, text, rotation }) => {
  return (
    <Link href={photo.src} className={`gallery-item relative card ${rotation === 'left' ? 'rotate-left' : rotation === 'right' ? 'rotate-right' : ''}`}>
      <div class="card__content flex justify-center items-center md:justify-start md:items-center">
        <p class="card__title">{title}</p>
        <p class="card__description hidden md:d-flex">{text}</p>
      </div>
      <Image
        id="works-default-bg"
        src={photo}
        alt=""
        quality={100}
        className="img-responsive"
        placeholder="blur"
      />
    </Link>
  )
}

export default GalleryItem