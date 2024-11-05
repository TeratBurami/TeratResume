import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useMediaQuery } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(){

    const match_media = useMediaQuery("(min-width:600px)");

    return(
        <div className="bg-sky-950 border-t-2 border-white pt-8">
            <div className="md:flex justify-around place-items-center">
                <ul className="flex justify-around md:block mb-6 md:mb-0 mx-12 md:mx-0 gap-7">
                    <li className="text-white text-lg md:text-base font-base"><Link className="md:flex md:place-items-center" to='/'>{match_media? <HomeIcon></HomeIcon>:""}<p className="ml-2">Home</p></Link></li>
                    <li className="text-white text-lg md:text-base font-base md:py-4"><Link className="md:flex md:place-items-center" to='/experiences'>{match_media? <EmojiEventsIcon></EmojiEventsIcon>:""}<p className="ml-2">Experiences</p></Link></li>
                    <li className="text-white text-lg md:text-base font-base"><Link className="md:flex md:place-items-center" to='/projects'>{match_media? <SmartToyIcon></SmartToyIcon>:""}<p className="ml-2">Projects</p></Link></li>
                </ul>
                <div hidden={match_media} className="w-3/4 h-0.5 bg-white mx-auto mb-2"></div>
                <div className="">
                    <p className="text-center text-white text-base mb-4 md:mb-2">Follow me</p>
                    <ul className="flex justify-around mx-16 md:mx-0 md:grid grid-cols-2 gap-4">
                        <li className="mx-auto"><a target="_blank" href="https://www.linkedin.com/in/teratburami"><LinkedInIcon fontSize="medium" sx={{color:"white"}}></LinkedInIcon></a></li>
                        <li className="mx-auto"><a target="_blank" href="https://github.com/TeratBurami"><GitHubIcon fontSize="medium" sx={{color:"white"}}></GitHubIcon></a></li>
                        <li className="mx-auto"><a target="_blank" href="https://www.facebook.com/terat.burami.92"><FacebookIcon fontSize="medium" sx={{color:"white"}}></FacebookIcon></a></li>
                        <li className="mx-auto"><a target="_blank" href="https://www.instagram.com/beam.tbm/"><InstagramIcon fontSize="medium" sx={{color:"white"}}></InstagramIcon></a></li>
                    </ul>
                </div>
            </div>
            <div className="pt-10 md:pt-8 pb-4 opacity-50">
                <p className="text-sm md:text-base text-white/50 text-center font-bold">Terat Burami <br hidden={match_media} />
                <span className="ml-4 text-xs md:text-base text-white/50 text-center font-normal">Copyright <CopyrightIcon fontSize="inherit" sx={{color:"white",opacity:"50%"}}></CopyrightIcon> 2024 - All Rights Reserved</span></p>
            </div>
        </div>
    )
}