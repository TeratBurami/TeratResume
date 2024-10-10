import Nav from "../../components/nav";
import Card from "../../components/card";
import Mahidol from "../../assets/images/mahidol.png";
import Suankularb from "../../assets/images/Suankularb_Wittayalai_School_emblem.png";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Profile from "../../assets/images/profile.png";
import Slide from "../../components/slide";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import { useState } from "react";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import LanguageIcon from "@mui/icons-material/Language";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SkillDisplay from "../../components/skills_display";

export default function Home() {
  const [index, setIndex] = useState(0);

  const web_dev=[{src:'https://i.pinimg.com/564x/ca/e1/b4/cae1b4f6b223fe5a7bb712b680cffa67.jpg',title:'HTML'},
    {src:'https://i.pinimg.com/564x/a5/d2/a9/a5d2a913006aee3504a6882ce38f7959.jpg',title:'CSS'},
    {src:'https://i.pinimg.com/564x/40/0f/22/400f22ce6f755ac476eb06c4cb45395c.jpg',title:'Javascript'},
    {src:'https://i.pinimg.com/564x/40/0f/22/400f22ce6f755ac476eb06c4cb45395c.jpg',title:'React.js'},
    {src:'https://i.pinimg.com/564x/40/0f/22/400f22ce6f755ac476eb06c4cb45395c.jpg',title:'Node.js'},
    {src:'https://i.pinimg.com/564x/40/0f/22/400f22ce6f755ac476eb06c4cb45395c.jpg',title:'Next.js'},
    {src:'https://i.pinimg.com/564x/40/0f/22/400f22ce6f755ac476eb06c4cb45395c.jpg',title:'Express.js'},
    {src:'https://i.pinimg.com/564x/40/0f/22/400f22ce6f755ac476eb06c4cb45395c.jpg',title:'Bootstrap'},
    {src:'https://i.pinimg.com/564x/40/0f/22/400f22ce6f755ac476eb06c4cb45395c.jpg',title:'Tailwind'}
  ]

  const database=[
    {src:"",title:"MySQL"},
    {src:"",title:"MongoDB"},
    {src:"",title:"SQLlite"},
    {src:"",title:"GraphQL"}
  ]

  return (
    <>
      {/* header */}
      <Nav></Nav>
      <h1 className="text-center text-8xl font-bold text-cyan-500 my-8 underline underline-offset-8">
        Resume
      </h1>
      <Slide></Slide>
      {/* personal information */}
      <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap p-10 mt-20 justify-center gap-20">
        <div className="p-4 bg-cyan-900 shadow-inner shadow-black rounded-full">
          <img className="rounded-full" src={Profile} alt="" />
        </div>
        <div className="w-full md:w-1/3 my-auto shadow-inner shadow-slate-900 p-4 rounded-xl">
          <h1 className="mt-4 font-bold text-4xl text-center text-cyan-300">
            Terat Burami
          </h1>
          <p className="mt-4 text-lg text-center text-cyan-600">
            I’m{" "}
            <span className="text-xl font-bold text-sky-400">Terat Burami</span>
            , a junior developer and cyber security. <br />I love doing new
            things, have new passions, gain experiences, and am always ready to
            develop myself.
          </p>
        </div>
      </div>

      <div className="flex justify-start md:justify-center mt-20 gap-20 bg-sky-800 flex-wrap md:flex-nowrap w-fit mx-auto rounded-3xl shadow-lg shadow-slate-900 p-24">
        <div className="languages">
          <h1 className="underline underline-offset-4 text-2xl md:text-4xl font-bold text-cyan-300">
            Language
          </h1>
          <ul className="text-xl md:text-2xl font-semibold text-cyan-400 list-inside mt-4">
            <li className="my-4">Thai - Native</li>
            <li>English - Intermediate</li>
          </ul>
        </div>
        <div className="contacts">
          <h1 className="underline underline-offset-4 text-2xl md:text-4xl font-bold text-cyan-300">
            Contacts
          </h1>
          <ul className="text-lg md:text-2xl font-semibold text-cyan-400 list-inside mt-4">
            <li className="my-4">
              <CallIcon fontSize="medium"></CallIcon>
              <a className="pl-6" href="tel:+66994539941">
                +66 99-453-9941
              </a>
            </li>
            <li>
              <EmailIcon fontSize="medium"></EmailIcon>
              <a className="pl-6" href="mailto:beamterat@gmail.com">
                beamterat@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* education */}
      <div className="bg-sky-700 py-12 mt-24">
        <h1 className="underline underline-offset-8 font-bold text-4xl text-center text-cyan-300">
          Education
        </h1>
        <div className="mt-14 flex justify-center md:flex-nowrap flex-wrap gap-10 md:gap-16">
          <Card
            link="https://www.ict.mahidol.ac.th/"
            year="2022 - Present"
            title="Mahidol University"
            description="Bachelor of Science in ICT (International Program)"
            image={Mahidol}
          ></Card>
          <Card
            link="http://www.sk.ac.th/"
            year="2017 - 2022"
            title="Suankularb Wittayalai"
            description="Math Science program"
            image={Suankularb}
          ></Card>
        </div>
      </div>

      {/* skill */}
      <div className="skill">
        <h1 className="underline underline-offset-8 font-bold text-4xl text-center text-cyan-300 mt-20">
          Skills
        </h1>
        <Tabs
          aria-label="Soft tabs"
          value={index}
          onChange={(_event, value) => {
            setIndex(value as number);
            console.log(value);
          }}
          size="lg"
          sx={{ width: "fit-content", margin: "auto", marginTop: "2rem" }}
        >
          <TabList underlinePlacement="bottom" variant="soft">
            <Tab
              variant={index === 0 ? "solid" : "plain"}
              color={index === 0 ? "primary" : "neutral"}
              value={0}
              indicatorPlacement="bottom"
            >
              <p className="font-mono">
                <WebIcon></WebIcon> Web Programming
              </p>
            </Tab>
            <Tab
              variant={index === 1 ? "solid" : "plain"}
              color={index === 1 ? "primary" : "neutral"}
              value={1}
              indicatorPlacement="bottom"
            >
              <p className="font-mono">
                <StorageIcon></StorageIcon> Database
              </p>
            </Tab>
            <Tab
              variant={index === 2 ? "solid" : "plain"}
              color={index === 2 ? "primary" : "neutral"}
              value={2}
              indicatorPlacement="bottom"
            >
              <p className="font-mono">
                <LanguageIcon></LanguageIcon> Computer Languages
              </p>
            </Tab>
            <Tab
              variant={index === 3 ? "solid" : "plain"}
              color={index === 3 ? "primary" : "neutral"}
              value={3}
              indicatorPlacement="bottom"
            >
              <p className="font-mono">
                <VerifiedUserIcon></VerifiedUserIcon> Cyber Security
              </p>
            </Tab>
            <Tab
              variant={index === 4 ? "solid" : "plain"}
              color={index === 4 ? "primary" : "neutral"}
              value={4}
              indicatorPlacement="bottom"
            >
              <p className="font-mono">
                <HomeRepairServiceIcon></HomeRepairServiceIcon> Tools
              </p>
            </Tab>
          </TabList>
          {/* Web Programming: HTML, CSS, JavaScript, React.js, Node.js, Next.js, Express.js, Django, Flask, Bootstrap, Tailwind
              Database: MySQL, MongoDB
              Computer languages: C, C#, C++, Java, JavaScript, Python, Dart, GO
              Application: React Native, Flutter
              Cyber security: Kali Linux, Burp suite, Wireshark, Nmap, Aircrack-ng, John the ripper,  Cain and Abel, Metasploit
              Tools: VS Code, Cloudflare, Firebase */}
          <TabPanel value={0}>
            <div className="mx-auto w-3/4 grid grid-cols-3">
              {/* <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>React.js</p>
              <p>Node.js</p>
              <p>Next.js</p>
              <p>Bootstrap</p>
              <p>Tailwind</p> */}
              {web_dev.map((item:any) => (
                <SkillDisplay src={item.src} title={item.title}></SkillDisplay>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={1}>
            <div className="mx-auto w-1/2 grid grid-cols-2">
            {database.map((item:any) => (
                <SkillDisplay src={item.src} title={item.title}></SkillDisplay>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={2}>Computer Language</TabPanel>
          <TabPanel value={3}>Cyber Security</TabPanel>
          <TabPanel value={4}>Tools</TabPanel>
        </Tabs>
      </div>
    </>
  );
}
