import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useMediaQuery } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SmartToyIcon from '@mui/icons-material/SmartToy';

export default function Footer(){

    const match_media = useMediaQuery("(min-width:600px)");

    return(
        <div className="bg-sky-950 border-t-2 border-[floralwhite] pt-8">
            <div className="md:flex justify-around">
                <ul className="flex justify-around md:block mb-6 md:mb-0 mx-12 md:mx-0">
                    <li className="text-[floralwhite] text-xl md:text-base font-semibold"><Link className="md:flex md:place-items-center" to='/'>{match_media? <HomeIcon></HomeIcon>:""}<p className="ml-2">Home</p></Link></li>
                    <li className="text-[floralwhite] text-xl md:text-base font-semibold md:py-4"><Link className="md:flex md:place-items-center" to='/experiences'>{match_media? <EmojiEventsIcon></EmojiEventsIcon>:""}<p className="ml-2">Experiences</p></Link></li>
                    <li className="text-[floralwhite] text-xl md:text-base font-semibold"><Link className="md:flex md:place-items-center" to='/projects'>{match_media? <SmartToyIcon></SmartToyIcon>:""}<p className="ml-2">Projects</p></Link></li>
                </ul>
                <div hidden={match_media} className="w-3/4 h-0.5 bg-[floralwhite] mx-auto mb-2"></div>
                <ul className="flex justify-around mx-16 md:mx-0 md:grid grid-cols-2 gap-10">
                    <li><a href="#"><EmailIcon fontSize={match_media? "medium":"large"} sx={{color:"floralwhite"}}></EmailIcon></a></li>
                    <li><a href="#"><LocalPhoneIcon fontSize={match_media? "medium":"large"} sx={{color:"floralwhite"}}></LocalPhoneIcon></a></li>
                    <li><a href="#"><LinkedInIcon fontSize={match_media? "medium":"large"} sx={{color:"floralwhite"}}></LinkedInIcon></a></li>
                    <li><a href="#"><GitHubIcon fontSize={match_media? "medium":"large"} sx={{color:"floralwhite"}}></GitHubIcon></a></li>
                </ul>
            </div>
            <div className="pt-10 md:pt-8 pb-4 opacity-50">
                <p className="text-lg md:text-2xl font-bold text-[floralwhite]/50 text-center">Terat Burami <br hidden={match_media} />
                <span className="ml-4 text-xs md:text-lg text-[floralwhite]/50 text-center">Copyright <CopyrightIcon fontSize="inherit" sx={{color:"floralwhite",opacity:"50%"}}></CopyrightIcon> 2024 - All Rights Reserved</span></p>
            </div>
        </div>
    )
}