'use client'

import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';
import './style.css'
import { Download, Fullscreen, Minimize, ZoomIn, ZoomOut } from 'lucide-react';
import Link from 'next/link';

const FlipBook = ({ pages, url }) => {
  const flipbookRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);      
      document.querySelector('#ballo-mag-canvas-container').classList.add('ballo-mag-fullscreen')
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
      document.querySelector('#ballo-mag-canvas-container').classList.remove('ballo-mag-fullscreen')
    }
  };

  // Zoom controls
  const increaseZoom = () => setZoom((prev) => Math.min(prev + 0.2, 2));
  const decreaseZoom = () => setZoom((prev) => Math.max(prev - 0.2, 1));

  return (
    <div
      id='ballo-mag-canvas-container'
      className="blue-black-bg-grandient relative flex flex-col md:flex-row gap-5 justify-center items-center min-h-screen pb-20"
    >
      <div        
        className="shadow-lg flex justify-center mt-48"
        style={{
          width: isFullscreen ? '90vw' : "75vw",
          height: "fit-content",
          transform: `scale(${zoom})`,
          transformOrigin: "center center",
          overflow: "visible", // Prevents overflow when scaling
        }}
      >
        <HTMLFlipBook
          size="stretch"
          width={600}
          height={600}
          autoSize={true}
          className="ballo-mag-canvas"
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          ref={flipbookRef}
          flippingTime={500} // Adjust flipping speed
          usePortrait={true}
        >
          {pages.map((page, index) => (
            <div key={index} className="flex items-center justify-center bg-white ballo-mag-page">
              <Image src={page} alt='Ballo Mag page' className='h-auto w-full object-fill' fill   />
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {/* Controls */}
      <div className="mt-4 flex md:flex-col gap-4">
        <button onClick={toggleFullscreen} className="p-2 bg-gray-800 text-white rounded">
          {isFullscreen ? <Minimize /> : <Fullscreen />}
        </button>
        {/* <button onClick={increaseZoom} className="p-2 bg-gray-800 text-white rounded">
          <ZoomIn />
        </button>
        <button onClick={decreaseZoom} className="p-2 bg-gray-800 text-white rounded">
          <ZoomOut />
        </button> */}

        <Link
          href={url}
          target="_blank"
          className="p-2 bg-gray-800 text-white rounded"
        >
          <Download />
        </Link>
      </div>
    </div>
  );
};

export default FlipBook;
