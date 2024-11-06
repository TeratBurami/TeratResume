import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Data from '../json/image_slide.json'


export default function SlideShow(){
    

    return (
      <div className="slide-container">
        <Fade>
         {Data.img.map((slideImage, index)=> (
            <div key={index}>
              <img className='w-full h-96 md:h-[35vw] object-cover flex' src={slideImage} alt="" />
            </div>
          ))} 
        </Fade>
      </div>
    )
}