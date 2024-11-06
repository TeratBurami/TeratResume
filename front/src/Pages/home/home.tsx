import Nav from "../../components/nav/nav";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Slide from "../../components/slide";
import Footer from "../../components/footer";
import Data from '../../json/home.json'
import OpenInNew from '@mui/icons-material/OpenInNew';
import { Button } from "@mui/joy";
import Skills from "../../components/skills";

export default function Home() {

  return (
    <div>
      {/* header */}
      <Nav></Nav>

      <Slide></Slide>
      {/* personal information */}
      <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap p-10 mt-20 justify-center gap-20">
        <div className="p-4 bg-cyan-950 shadow-inner shadow-black rounded-full">
          <img className="rounded-full" src="public/assets/profile.png" alt="" />
        </div>
        <div className="w-full md:w-1/3 my-auto shadow-inner shadow-slate-900 p-4 rounded-xl">
          <h1 className="mt-4 font-bold text-4xl text-center text-cyan-300">
            Terat Burami
          </h1>
          <p className="mt-4 text-lg text-center text-cyan-600">
            I’m{" "}
            <span className="text-xl font-bold text-sky-400">Terat Burami</span>
            , a cyber security and junior developer.
I enjoy trying new things, finding new interests, acquiring experiences, and am constantly eager to grow as a person.
          </p>
        </div>
      </div>
      

      <div className="flex justify-start md:justify-center mt-20 gap-20 bg-cyan-900/25 flex-wrap md:flex-nowrap w-11/12 md:w-2/3 mx-auto rounded-3xl shadow-lg shadow-slate-900 p-10">
        <div className="languages">
          <h1 className="text-2xl font-bold text-cyan-300">
            Languages
          </h1>
          <ul className="text-lg font-semibold text-cyan-400 list-inside mt-4">
            <li className="my-4 text-base">Thai - Native</li>
            <li className="text-base">English - Intermediate</li>
          </ul>
        </div>
        <div className="contacts">
          <h1 className="text-2xl font-bold text-cyan-300">
            Contacts
          </h1>
          <ul className="text-lg font-semibold text-cyan-400 list-inside mt-4">
            <li className="my-4">
              <CallIcon fontSize="medium"></CallIcon>
              <a className="pl-6 text-base" href="tel:+66994539941">
                +66 99-453-9941
              </a>
            </li>
            <li>
              <EmailIcon fontSize="medium"></EmailIcon>
              <a className="pl-6 text-base" href="mailto:beamterat@gmail.com">
                beamterat@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* education */}
      <div className="w-5/6 mx-auto mt-10 md:mt-16">
        <h1 className="text-white md:text-2xl">Education</h1>
        <div className="md:flex justify-between mt-4 gap-24">
          {Data.education.map((item)=> (
                <div className="h-40 w-full bg-white rounded-lg shadow-lg shadow-slate-900 md:mb-0 mb-4">
                  <div className="flex justify-around py-4 place-items-center">
                    <img src={item.img} className="w-20 h-20 md:w-24 md:h-24 shadow shadow-slate-500 rounded-full" alt="" />
                    <div>
                      <h1 className="text-cyan-700 font-bold">{item.name}</h1>
                      <p className="text-cyan-700">{item.detail}</p>
                      <p className="text-cyan-500 mb-4">{item.year}</p>
                      <Button sx={{width:"100%"}} target="_blank" component="a" href={item.url} startDecorator={<OpenInNew />}><p>Explore</p></Button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>

      {/* skill */}
      <Skills></Skills>

      <Footer></Footer>
    </div>
  );
}
