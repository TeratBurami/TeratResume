import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Data from '../json/image_slide.json'


export default function SlideShow(){
    
    const divStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      height: '400px',
    }

    return (
      <div className="slide-container">
        <Fade>
         {Data.img.map((slideImage, index)=> (
            <div key={index}>
              {/* <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div> */}
              <img className='w-full h-96 object-cover flex' src={slideImage} alt="" />
            </div>
          ))} 
        </Fade>
      </div>
    )
}