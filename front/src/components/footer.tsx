import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer(){
    return(
        <div className="flex justify-evenly">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/activity'>Activities</Link></li>
                <li><Link to='/project'>Project</Link></li>
            </ul>
            <ul>
                <li><a href="#"><EmailIcon></EmailIcon></a></li>
                <li><a href="#"><LocalPhoneIcon></LocalPhoneIcon></a></li>
                <li><a href="#"><LinkedInIcon></LinkedInIcon></a></li>
                <li><a href="#"><GitHubIcon></GitHubIcon></a></li>
            </ul>
        </div>
    )
}