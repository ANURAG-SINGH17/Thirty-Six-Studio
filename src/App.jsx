import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import data from "./data";
import Canvas from "./canvas";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const App = () => {
  const [showCanvas , setCanvas] = useState(false);
  const headingRef = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useGSAP(() => {
    headingRef.current.addEventListener("click" , (e) => {
      setCanvas(!showCanvas);
      if (!showCanvas) {
        gsap.set(growingSpan.current,{
          position:"fixed",
          top: e.clientY,
          left: e.clientX,
        });
        gsap.to("body",{
          color:"black",
        })
        gsap.to(growingSpan.current , {
          duration: 1,
          scale:1000,
          ease: "power2.inOut",
         
        })
      }
      else{
        gsap.to("body",{
          duration:2,
          color:"white",
         
        })
        gsap.to(growingSpan.current , {
          duration:1,
          scale:0,
          ease: "power2.inOut",
         
        })
      }
    })
  
  },[showCanvas])

  return (
    <>
    <span ref={growingSpan} className="growing block fixed top-[-10%] left-0 w-5 h-5 rounded-full"></span>
      <div className="w-full min-h-screen relative">
      {showCanvas &&
          data[0].map((canvasdets, index) => (
            <Canvas key={index} details={canvasdets} />
          ))}
        <div className="w-full min-h-screen  ">
          <nav className="  top-0 left-0 w-full py-2 px-2 z-50 flex justify-between items-center border-b-[1px] border-zinc-700">
            <div>
              <h1>Thirtysixstudio</h1>
            </div>
            <div>
              <button>on/off</button>
            </div>
            <div className="flex gap-[2vw]">
              <h3>What we do</h3>
              <h3>Who we are</h3>
              <h3>How we give back</h3>
              <h3>Talk to us</h3>
            </div>
            <div className="h-8 w-8 rounded-full border-gray-500 border-[1px] "></div>
          </nav>
          <div>
            <div className="ml-[25.5vw] mt-[3.7vw] w-[24vw]  ">
              <h1 className="text-4xl tracking-tight leading-[2.6vw] z-10">
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h1>
              <p className="pt-9 leading-[1.3vw]">
                We’re a boutique production studio focused on design, motion,
                and creative technology, constantly reimagining what digital
                craft can do for present-time ads and campaigns.
              </p>
              <h4 className="pt-9">Scroll</h4>
            </div>
            <div className="w-full px-4">
              <h1 ref={headingRef} className="text-[15vw] border-b-[1px] border-zinc-700 ">Thirtysixstudio</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen relative">
         {showCanvas && data[1].map((canvasdets , index) => (
    <Canvas key={index} details={canvasdets} />
   ))}
      <div className='h-screen w-full  flex p-5'>
          <div className="w-1/2 flex justify-center p-5">
            <h1 className="text-[2vw]">01 - What We Do</h1>
          </div>
          <div className="h-full w-1/2 pl-5 py-5 flex flex-col justify-between">
            <h2 className=" text-[2.2vw] w-[22vw] leading-none">We aim to revolutionize digital production in the advertising space, brinding your ideas to life.</h2>
            <div className=" w-[25vw] flex flex-col leading-none gap-8">
              <p>As a contemporary studio, we use cutting-edge design practices and the latest technologies to deliver seamless digital work.</p>
              <p>Our commitment to creativity, innovation, and simplicity, paired with our agile approach, ensures your journey with us is smooth and enjoyable from start to finish.</p>
            </div>

          </div>
        </div>
        </div>
    </>
  );
};

export default App;
