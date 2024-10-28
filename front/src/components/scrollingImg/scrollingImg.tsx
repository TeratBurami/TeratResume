import { useEffect, useRef } from 'react';
import './scrollingImg.css'

interface Prop{
    element:any[]
}

export default function scrollingImg({element}:Prop){

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

    const imageDisplay=()=>{
        const banner=document.getElementById("banner");
        // Create two sets of elements for seamless scrolling
        element.forEach(element => {
            let div = document.createElement("div");
            div.setAttribute("class", element.className);
            banner!.appendChild(div);
        });
        // Duplicate elements for continuous scrolling
        element.forEach(element => {
            let div = document.createElement("div");
            div.setAttribute("class", element.className);
            banner!.appendChild(div);
        });
    }

    useEffect(()=>{
        imageDisplay()
        // Cleanup function to prevent multiple appends on re-render
        return () => {
            const banner = document.getElementById("banner");
            if (banner) {
                banner.innerHTML = '';
            }
        }
    }, []) // Empty dependency array to run only once

    return(
        <div className='banner-container' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div id='banner' ref={bannerRef}></div>
        </div>
    )
}