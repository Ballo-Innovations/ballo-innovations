'use client'

// Import Assets
import background from '@/public/Backgrounds/hero-bg.png'
import ring from '@/public/elements small/15.png'
import bi from '@/public/elements small/16.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import Cards from './cards/Cards'
import Clients from './clients/Clients'

const HeroSection = () => {
  const Hero = () => {
    // Animation Logic
    useGSAP(() => {
      gsap.fromTo('#header-text', {
        // From object
        opacity: 0,
      },
      {
        // To object
        opacity: 1,
        duration: 1,
        ease: 'circ.inOut'
      })
    }, [])
  }

  return (
    <section
      className='min-h-screen text-white'
      style={{
        minWidth: '100vw',
        background: `url(${background.src})`,
        backgroundSize: 'cover',
        padding: '45vh 0 0 0'
      }}>
      <div id="hero-content-wrapper">
        <h1 id='header-text' className='relative z-[4] opacity-0 text-center text-[3rem] lg:text-[6vw] font-bold uppercase max-sm:text-5xl'>
          Rebranding the Future
        </h1>
        <Cards />

        <div className="mt-40 px-5 md:px-32">
          <h2 className='subheading mb-5'>
            What We’re About
          </h2>

          <p className='font-semibold text-base md:w-[41%]'>
            Ballo is a word derived from the business streets of Lusaka
            that means &quot;a bag full of things&quot;. We are an omnichannel
            (digital) marketing company that obsesses on giving the
            very best to our clients to ensure the utmost customer
            satisfaction and return on investment. 
          </p>
        </div>

        <Clients />
      </div>

      <div className='h-max ml-5 -mt-5 w-[92vw] absolute top-[20vh] md:top-40'>
        <Image
          src={ring}
          alt="Logo"
          quality={100}
          className="logo-ring absolute -left-[12%] lg:left-[2.5%] z-[3] w-[calc(52.5%-0.3em)] md:w-[calc(29%-0.3em)]"
        />

        <Image
          src={bi}
          alt="Logo"
          quality={100}
          className="bi-logo w-auto min-w-[80vh] md:min-w-0 md:w-[calc(88%-1em)] -ml-[20%] md:-ml-6 opacity-50 z-[2]"
        />

        <div className="svg-container hidden">
          <svg id='bi-1' width="568" height="734" viewBox="0 0 568 734" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='xMidYMax meet'>
            <path d="M3 731.5V3H24C37.1481 4.255 44.9532 6.09117 59.5 11C74.0458 16.292 82.8515 21.0188 99.5 32C113.754 42.9253 121.158 50.2407 133.5 65C150.118 87.9102 158.123 101.664 170.5 127.5C178.234 143.857 181.822 154.299 187 175C194.313 202.109 197.157 217.463 200 245C203.159 283.095 203.726 304.441 203.5 342.5V585C222.795 584.769 233.048 583.957 250.5 581.5C286.353 575.48 304.848 568.463 335 549.5C352.84 537.914 362.4 529.931 378.5 512.5C387.235 501.312 391.026 495.203 396.5 484.5C402.906 469.719 405.856 459.801 409.5 438C410.6 421.227 409.915 410.585 407 390C403.564 375.287 400.699 366.978 393 352C382.543 332.187 373.863 321.743 353.5 304.5C339.322 294.289 331.433 289.671 317.5 284L311.5 281.5L305.5 280L291.5 276.5L280 271.5L271 265C258.808 255.107 254.043 248.439 249.5 234.5C245.845 216.834 245.892 206.786 251 188.5C258.396 170.946 263.649 162.983 275.5 153C289.962 141.19 298.531 137.196 314.5 134C329.506 132.319 338.303 132.914 354.5 136C384.411 145.683 403.507 155.733 441.5 181.5C477.627 210.349 496.63 229.533 525 277C545.518 314.825 553.603 337.354 561.5 380C566.171 416.49 566.301 436.364 563 471C555.574 509.488 550.257 530.424 534 564C510.347 606.332 495.319 626.316 465 654.5C430.772 684.31 410.971 696.673 374.5 710.5C348.211 718.669 332.47 722.105 302 725.5C269.103 729.355 251.93 730.721 224 731.5H3Z" stroke="#71FAF8" strokeWidth="5"/>
          </svg>

          <svg id='bi-2' width="605" height="771" viewBox="0 0 605 771" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='xMidYMax meet'>
            <g filter="url(#filter0_ddf_11_23)">
            <path d="M21 749.5V21H42C55.1481 22.255 62.9532 24.0912 77.5 29C92.0458 34.292 100.851 39.0188 117.5 50C131.754 60.9253 139.158 68.2407 151.5 83C168.118 105.91 176.123 119.664 188.5 145.5C196.234 161.857 199.822 172.299 205 193C212.313 220.109 215.157 235.463 218 263C221.159 301.095 221.726 322.441 221.5 360.5V603C240.795 602.769 251.048 601.957 268.5 599.5C304.353 593.48 322.848 586.463 353 567.5C370.84 555.914 380.4 547.931 396.5 530.5C405.235 519.312 409.026 513.203 414.5 502.5C420.906 487.719 423.856 477.801 427.5 456C428.6 439.227 427.915 428.585 425 408C421.564 393.287 418.699 384.978 411 370C400.543 350.187 391.863 339.743 371.5 322.5C357.322 312.289 349.433 307.671 335.5 302L329.5 299.5L323.5 298L309.5 294.5L298 289.5L289 283C276.808 273.107 272.043 266.439 267.5 252.5C263.845 234.834 263.892 224.786 269 206.5C276.396 188.946 281.649 180.983 293.5 171C307.962 159.19 316.531 155.196 332.5 152C347.506 150.319 356.303 150.914 372.5 154C402.411 163.683 421.507 173.733 459.5 199.5C495.627 228.349 514.63 247.533 543 295C563.518 332.825 571.603 355.354 579.5 398C584.171 434.49 584.301 454.364 581 489C573.574 527.488 568.257 548.424 552 582C528.347 624.332 513.319 644.316 483 672.5C448.772 702.31 428.971 714.673 392.5 728.5C366.211 736.669 350.47 740.105 320 743.5C287.103 747.355 269.93 748.721 242 749.5H21Z" stroke="#1FA9C6" strokeWidth="6" shapeRendering="crispEdges"/>
            </g>
            <defs>
            <filter id="filter0_ddf_11_23" x="0.200001" y="0.200001" width="603.871" height="770.1" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.443137 0 0 0 0 0.984314 0 0 0 0 0.980392 0 0 0 1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_23"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="effect1_dropShadow_11_23" result="effect2_dropShadow_11_23"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_11_23" result="shape"/>
              <feGaussianBlur stdDeviation="8.9" result="effect3_foregroundBlur_11_23"/>
            </filter>
            </defs>
          </svg>

          <svg id='bi-3' width="566" height="732" viewBox="0 0 566 732" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='xMidYMax meet'>
            <path d="M2 730.5V2H23C36.1481 3.255 43.9532 5.09117 58.5 10C73.0458 15.292 81.8515 20.0188 98.5 31C112.754 41.9253 120.158 49.2407 132.5 64C149.118 86.9102 157.123 100.664 169.5 126.5C177.234 142.857 180.822 153.299 186 174C193.313 201.109 196.157 216.463 199 244C202.159 282.095 202.726 303.441 202.5 341.5V584C221.795 583.769 232.048 582.957 249.5 580.5C285.353 574.48 303.848 567.463 334 548.5C351.84 536.914 361.4 528.931 377.5 511.5C386.235 500.312 390.026 494.203 395.5 483.5C401.906 468.719 404.856 458.801 408.5 437C409.6 420.227 408.915 409.585 406 389C402.564 374.287 399.699 365.978 392 351C381.543 331.187 372.863 320.743 352.5 303.5C338.322 293.289 330.433 288.671 316.5 283L310.5 280.5L304.5 279L290.5 275.5L279 270.5L270 264C257.808 254.107 253.043 247.439 248.5 233.5C244.845 215.834 244.892 205.786 250 187.5C257.396 169.946 262.649 161.983 274.5 152C288.962 140.19 297.531 136.196 313.5 133C328.506 131.319 337.303 131.914 353.5 135C383.411 144.683 402.507 154.733 440.5 180.5C476.627 209.349 495.63 228.533 524 276C544.518 313.825 552.603 336.354 560.5 379C565.171 415.49 565.301 435.364 562 470C554.574 508.488 549.257 529.424 533 563C509.347 605.332 494.319 625.316 464 653.5C429.772 683.31 409.971 695.673 373.5 709.5C347.211 717.669 331.47 721.105 301 724.5C268.103 728.355 250.93 729.721 223 730.5H2Z" stroke="white" strokeWidth="3"/>
          </svg>
        </div>
      </div>

    </section>
  )
}

export default HeroSection