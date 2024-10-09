import Nav from "../../components/nav";
import Card from "../../components/card";
import Mahidol from '../../assets/images/mahidol.png';
import Suankularb from '../../assets/images/Suankularb_Wittayalai_School_emblem.png';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Profile from '../../assets/images/profile.png';

export default function Home() {
  return (
    <>
      {/* header */}
      <Nav></Nav>
      <h1 className="text-center text-8xl font-bold text-cyan-500 font-mono mt-8">Resume</h1>
      {/* personal information */}
      <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap p-10 mt-20 justify-center gap-20">
        <div className="p-4 bg-cyan-900 shadow-inner shadow-black rounded-full">
          <img className="rounded-full" src={Profile} alt="" />
        </div>
        <div className="w-full md:w-1/3 my-auto shadow-inner shadow-slate-900 p-4 rounded-xl">
          <h1 className="mt-4 font-mono font-bold text-4xl text-center text-cyan-300">
            Terat Burami
          </h1>
          <p className="mt-4 font-mono text-lg text-center text-cyan-600">
            I’m{" "}
            <span className="text-xl font-bold text-sky-400">Terat Burami</span>
            , a junior developer and cyber security. <br />I love doing new things,
            have new passions, gain experiences, and am always ready to develop
            myself.
          </p>
        </div>
      </div>


      <div className="flex justify-start md:justify-center mt-20 gap-20 bg-sky-800 flex-wrap md:flex-nowrap w-fit mx-auto rounded-3xl shadow-lg shadow-slate-900 p-24">
        <div className="languages">
          <h1 className="underline underline-offset-4 text-2xl md:text-4xl font-bold text-cyan-300">Language</h1>
          <ul className="text-xl md:text-2xl font-semibold text-cyan-400 list-inside mt-4">
            <li className="my-4">Thai - Native</li>
            <li>English - Intermediate</li>
          </ul>
        </div>
        <div className="contacts">
          <h1 className="underline underline-offset-4 text-2xl md:text-4xl font-bold text-cyan-300">Contacts</h1>
          <ul className="text-lg md:text-2xl font-semibold text-cyan-400 list-inside mt-4">
            <li className="my-4"><CallIcon fontSize="medium"></CallIcon><a className="pl-6" href="tel:+66994539941">+66 99-453-9941</a></li>
            <li><EmailIcon fontSize="medium"></EmailIcon><a className="pl-6" href="mailto:beamterat@gmail.com">beamterat@gmail.com</a></li>
          </ul>
        </div>
      </div>

      {/* education */}
      <div className="bg-sky-700 py-12 mt-24">
        <h1 className="underline underline-offset-8 font-mono font-bold text-4xl text-center text-cyan-300">
          Education
        </h1>
        <div className="mt-14 flex justify-center md:flex-nowrap flex-wrap gap-10 md:gap-16">
          <Card link="https://www.ict.mahidol.ac.th/" year="2022 - Present" title="Mahidol University" description="Bachelor of Science in ICT (International Program)" image={Mahidol}></Card>
          <Card link="http://www.sk.ac.th/" year="2017 - 2022" title="Suankularb Wittayalai" description="Math Science program" image={Suankularb}></Card>
        </div>
      </div>

      {/* skill */}
      <div className="skill">
        <h1 className="underline underline-offset-8 font-mono font-bold text-4xl text-center text-cyan-300 mt-20">Skills</h1>
        {/* Web Programming: HTML, CSS, JavaScript, React.js, Node.js, Next.js, Express.js, Django, Flask, Bootstrap, Tailwind
        Database: MySQL, MongoDB
        Computer languages: C, C#, C++, Java, JavaScript, Python, Dart, GO
        Application: React Native, Flutter
        Cyber security: Kali Linux, Burp suite, Wireshark, Nmap, Aircrack-ng, John the ripper,  Cain and Abel, Metasploit
        Tools: VS Code, Cloudflare, Firebase */}
        
      </div>
    </>
  );
}
