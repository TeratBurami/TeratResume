import {  useRef } from 'react';
import './scrollingImg.css'

interface Prop{
    image:string[]
}

export default function scrollingImg({image}:Prop){

    const bannerRef=useRef<HTMLDivElement | null>(null);

    const handleMouseOver=()=>{
      if(bannerRef.current){
        bannerRef.current.style.animationPlayState='paused';
      }
    }
  
    const handleMouseOut=()=>{
      if(bannerRef.current){
        bannerRef.current.style.animationPlayState='running';
      }
    }


    return(
        <div className='banner-container' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div id='banner' ref={bannerRef}>
                {image.map((item, index) => (
                    <img src={item} className='w-96 h-96 object-cover' alt="" key={index} />
                ))}
                {image.map((item, index) => (
                    <img src={item} className='w-96 h-96 object-cover' alt="" key={index} />
                ))}
            </div>
        </div>
    )
}