import React, { useRef } from 'react';
import { FaPlay } from 'react-icons/fa'; // Using FontAwesome Play icon

const ModernGallery = ({scrollToJobs}) => {
  // Ref to control the video element
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full mx-auto h-auto gap-6 mb-4">
      
      {/* --- Left Side: Image (70%) --- */}
      {/* 'group' is added here to control inner elements on hover */}
    
      <div className="relative w-full  md:h-full rounded-3xl overflow-hidden shadow-2xl group transition-all duration-500 ease-in-out">
        <img
          src="/career/super30.jpg"
          alt="Modern Architecture"
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
     
        {/* Overlay Content */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
          <h2 className="text-white text-3xl md:text-5xl font-light mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            Design
          </h2>
          <p className="text-gray-300 text-sm md:text-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
            Minimalist architecture for the modern era.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ModernGallery;


    // <div 
    //     className="relative w-full md:w-[18%] h-[400px] md:h-full rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
    //     onMouseEnter={handleMouseEnter}
    //     onMouseLeave={handleMouseLeave}
    //   >
    //     <video
    //       ref={videoRef}
    //       className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
    //       muted
    //       loop
    //       playsInline
    //       poster="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1000&auto=format&fit=crop"
    //     >
    //       <source src="/career/super30video.mp4" type="video/mp4" />
    //       Your browser does not support the video tag.
    //     </video>

    //     {/* --- Play Button (Glassmorphism UI) --- */}
    //     {/* 'group-hover' classes make it fade out and scale up when hovering the container */}
    //     <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-500 group-hover:opacity-0 group-hover:scale-150">
    //       <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-lg">
    //         <FaPlay className="text-white text-2xl ml-1" />
    //       </div>
    //     </div>

    //   </div>


        // {/* <header className="header">
        //         <div className="banner">
        //             <div className="overlay">
        //                 <div className="banner-text animated-text">
        //                     <h1>
        //                         <span className="banner-text-highlight">
        //                             <svg className="border-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        //                                 <rect
        //                                     x="2"
        //                                     y="2"
        //                                     width="96"
        //                                     height="96"
        //                                     rx="8"
        //                                     ry="8"
        //                                     fill="none"
        //                                     stroke="#7c3aed"
        //                                     strokeWidth="1.5"
        //                                     strokeDasharray="400"
        //                                     strokeDashoffset="400"
        //                                 />
        //                             </svg>
        //                             Turn Dreams
        //                         </span>{" "}
        //                         Into Action
        //                     </h1>
        //                     <div className="check-banner-div">
        //                         <button className="check-banner-btn" onClick={scrollToJobs}>Check Current Openings</button>
        //                     </div>
        //                 </div>
        //                 <img
        //                     className="banner-img"
        //                     src="/career-banner1.jpg"
        //                     alt="Banner"
        //                 />
        //             </div>
        //         </div>
        //     </header> */}