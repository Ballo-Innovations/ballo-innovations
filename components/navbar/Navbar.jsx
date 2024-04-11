'use client'

// Import Modules
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

// Import assets
import './navbar.css'
import logo from '@/public/Ballo Logo New/Ballo logo new copy white.png'
import logo_sm from '@/public/Ballo Logo New/png/Ballo logo new-06.png'
import logo_sm_2 from '@/public/Ballo Logo New/png/Ballo logo new -01.png'

const Navbar = () => {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Scrolled page logic
    const onScroll = () => {
      const positionY = window.scrollY;
      if (positionY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    // Attach the scroll event listener
    window.addEventListener('scroll', onScroll);
  
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      if(window.innerWidth >= 1024){
        document.querySelector('body').style.position = 'relative';
        setShowMenu(false);
      }
    };

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Annimation logic
  useGSAP(() => {
    gsap.to('#blue-mobile-logo', {
      opacity: 1,
      ease: 'power1.in',
      delay: 0.15,
      duration: 0.25,
    })

    gsap.fromTo('.nav-item', {
      // From object
      y: -50,
      x: 50,
      opacity: 0,
    },
    {
      // To object
      y: 0,
      x: 0,
      opacity: 1, 
      ease: 'sine.inOut',
      stagger: {
        // Stagger options
        each: 0.1,
        from: "start",
      },
    })
  }, {
    dependencies: [showMenu],
    revertOnUpdate: true
  })

  // Function to toggle menu
  const toggleMenu = () => {
    const body = document.querySelector('body');
    if(!showMenu){
      body.style.position = 'fixed';
      setShowMenu(true);
    }
    else {
      body.style.position = 'relative';
      setShowMenu(false);
    }
  };
  
  return (
    <nav id='navbar' className={`flex items-center flex-col lg:flex-row text-white ${(scrolled || showMenu) ? 'nav-scrolled' : ''}`}>
      <div id="animate-mobile-menu" className={`fixed top-0 right-0 bg-white rounded-bl-full ${showMenu ? 'w-[calc(100vh+100vw)] h-[calc(100vh+100vw)]': 'w-0 h-0'}`} />
      <div className='w-screen lg:w-1/4 flex justify-between items-center max-sm:pt-2'>
        <Link href='/' className='z-[3]'>
          <Image
            src={logo}
            alt="Logo"
            quality={100}
            className="hidden lg:block logo-white w-11/12"
          />

          <Image
            src={logo_sm}
            alt="Logo"
            quality={100}
            className={`w-12 lg:hidden logo-white m-2 ${showMenu ? 'hidden' : ''}`}
          />

          <Image
            src={logo_sm_2}
            alt="Logo"
            quality={100}
            id='blue-mobile-logo'
            className={`w-12 lg:hidden logo-white m-2 pt-1 opacity-0 ${!showMenu ? 'hidden' : ''}`}
          />
        </Link>

        <button className="flex lg:hidden mx-5 z-[3]" onClick={toggleMenu}>
          {!showMenu && (<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="-5 -7 24 24"><path fill="white" d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"></path></svg>)}
          { showMenu && (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className='mt-2' viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="#04095c" d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"></path></g></svg>)}
        </button>  
      </div>

      <div className={`w-3/4 nav-links ${showMenu ? 'openMenu' : 'closedMenu'}`}>
        <ul id="main-menu" className="w-100 justify-center mt-2 nav-menu flex m-0 items-center gap-8 lg:gap-16">
          <li className={`nav-item ${pathname === '/' ?  'active': ''}`}>
            <Link href="/" className="nav-link" onClick={() => setShowMenu(false)}>Home</Link>
          </li>

          <li className={`nav-item ${pathname === '/about' ?  'active': ''}`}>
            <Link href="/about" className="nav-link" onClick={() => setShowMenu(false)}>About</Link>
          </li>

          <li className={`nav-item ${pathname === '/works' ?  'active': ''}`}>
            <Link href="/works" className="nav-link" onClick={() => setShowMenu(false)}>Works</Link>
          </li>

          <li className={`nav-item ${pathname === '/packages' ?  'active': ''}`}>
            <Link href="/packages" className="nav-link" onClick={() => setShowMenu(false)}>Packages</Link>
          </li>

          <li className={`nav-item ${pathname === '/contact' ?  'active': ''}`}>
            <Link href="/contact" className="nav-link" onClick={() => setShowMenu(false)}>Contact Us</Link>
          </li>
        </ul>
      </div> 
    </nav>
  )
}

export default Navbar;
