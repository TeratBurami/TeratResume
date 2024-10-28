// import html from '../../assets/images/web_dev icon/html.jpg'
// import html from '../assets/images/web_dev_icon/html.jpg'

import { useMediaQuery } from "@mui/material";


interface Props{
    src:string
    title:string
}

export default function SkillDisplay({src,title}:Props){

    const match_media = useMediaQuery("(min-width:600px)");

    return(
        <div className="my-2 w-fit">
            {/* <img className="w-40 h-40" src={src} alt={title} /> */}
            <div className="mx-auto w-10 h-10 md:w-20 md:h-20 rounded-full bg-cyan-600"></div>
            <p hidden={!match_media} className="text-center text-cyan-900 text-xs md:text-md font-bold">{title}</p>
        </div>
    )
}