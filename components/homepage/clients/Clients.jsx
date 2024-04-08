import clientLogos from "@/constants/clientLogos"
import Image from "next/image"

const Clients = () => {
  return (
    <div>
      <h2 className="subheading mt-16 mb-10 px-5 md:px-32">
        Clients & Partners
      </h2>

      <div className="logos">
        <div className="logos-slide flex w-max gap-2">
          {clientLogos.map((logo) => {
            return(
              <div key={logo.name} style={{ width: `${logo.width}em`}} className="flex-center">
                <Image
                  src={logo.img}
                  alt={logo.name}
                  quality={100}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Clients