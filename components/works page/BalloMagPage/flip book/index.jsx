'use client'

import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';
import './style.css'
import { ArrowLeft, ArrowRight, Download, Fullscreen, Minimize } from 'lucide-react';
import Link from 'next/link';

const FlipBook = ({ pages, url }) => {
  const flipbookRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);      
      document.querySelector('#ballo-mag-canvas-container').classList.add('ballo-mag-fullscreen');
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
      document.querySelector('#ballo-mag-canvas-container').classList.remove('ballo-mag-fullscreen');
    }
  };

  return (
    <div
      id='ballo-mag-canvas-container'
      className="blue-black-bg-grandient relative hidden md:flex flex-col md:flex-row gap-5 justify-center items-center min-h-screen pb-20"
    >
      <div        
        className="shadow-lg flex justify-center mt-48"
        style={{
          width: isFullscreen ? '90vw' : "75vw",
          height: "fit-content",
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
            <div key={index} className="flex items-center justify-center bg-white ballo-mag-page cursor-grab">
              <Image src={page} alt='Ballo Mag page' className='h-auto w-full object-fill' fill />
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {/* Controls */}
      <div className="mt-4 flex md:flex-col gap-4">        
        {/* Fullscreen Toggle */}
        <button onClick={toggleFullscreen} className="p-2 bg-gray-800 text-white rounded">
          {isFullscreen ? <Minimize /> : <Fullscreen />}
        </button>

        {/* Download Link */}
        <Link
          href={url}
          target="_blank"
          className="p-2 bg-gray-800 text-white rounded"
        >
          <Download />
        </Link>

        {/* Navigation Buttons */}        
        <button 
          onClick={() => flipbookRef.current?.pageFlip().flipNext()} 
          className="p-2 bg-gray-800 text-white rounded"
        >
          <ArrowRight />
        </button>

        <button 
          onClick={() => flipbookRef.current?.pageFlip().flipPrev()} 
          className="p-2 bg-gray-800 text-white rounded"
        >
          <ArrowLeft />
        </button>
      </div>
    </div>
  );
};

export default FlipBook;
