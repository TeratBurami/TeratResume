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
import useMediaQuery from "@mui/material/useMediaQuery";
import { Divider } from "@mui/joy";

export default function Home() {
  const [index, setIndex] = useState(0);
  const match_media = useMediaQuery("(min-width:600px)");

  const web_dev = [
    {
      src: "https://i.pinimg.com/564x/ca/e1/b4/cae1b4f6b223fe5a7bb712b680cffa67.jpg",
      title: "HTML",
    },
    {
      src: "https://i.pinimg.com/564x/a5/d2/a9/a5d2a913006aee3504a6882ce38f7959.jpg",
      title: "CSS",
    },
    {
      src: "https://i.pinimg.com/564x/40/0f/22/400f22ce6f755ac476eb06c4cb45395c.jpg",
      title: "Javascript",
    },
    {
      src: "https://i.pinimg.com/564x/40/0f/22/400f22ce6f755ac476eb06c4cb45395c.jpg",
      title: "React.js",
    },
    {
      src: "https://i.pinimg.com/564x/40/0f/22/400f22ce6f755ac476eb06c4cb45395c.jpg",
      title: "Node.js",
    },
    {
      src: "https://i.pinimg.com/564x/40/0f/22/400f22ce6f755ac476eb06c4cb45395c.jpg",
      title: "Next.js",
    },
    {
      src: "https://i.pinimg.com/564x/40/0f/22/400f22ce6f755ac476eb06c4cb45395c.jpg",
      title: "Express.js",
    },
    {
      src: "https://i.pinimg.com/564x/40/0f/22/400f22ce6f755ac476eb06c4cb45395c.jpg",
      title: "Bootstrap",
    },
    {
      src: "https://i.pinimg.com/564x/40/0f/22/400f22ce6f755ac476eb06c4cb45395c.jpg",
      title: "Tailwind",
    },
  ];

  const database = [
    { src: "", title: "MySQL" },
    { src: "", title: "MongoDB" },
    { src: "", title: "SQLlite" },
    { src: "", title: "GraphQL" },
  ];

  const language = [
    { src: "", title: "C" },
    { src: "", title: "C#" },
    { src: "", title: "C++" },
    { src: "", title: "Java" },
    { src: "", title: "Python" },
    { src: "", title: "Dart" },
    { src: "", title: "Javascript" },
    { src: "", title: "Typescript" },
  ];

  const cybersecurity = [
    { src: "", title: "Kali Linux" },
    { src: "", title: "Burp suite" },
    { src: "", title: "Wireshark" },
    { src: "", title: "John the ripper" },
    { src: "", title: "NetCat" },
  ];

  const tools = [
    { src: "", title: "VS Code" },
    { src: "", title: "Cloudflare" },
    { src: "", title: "Firebase" },
    { src: "", title: "Postman" },
    { src: "", title: "GitHub" },
  ];

  const opr_system = [
    { src: "", title: "Windows" },
    { src: "", title: "Linux" },
  ];

  return (
    <>
      {/* header */}
      <div className="z-20 fixed flex bg-blue-900 w-full border-b-2 border-bottom border-cyan-400 p-2 px-4">
        <Nav></Nav>
        <p className="text-xl mx-auto font-semibold text-cyan-400 my-auto">Terat Burami's Resume</p>
        <img className="object-cover rounded-full w-10 h-10 my-auto" src={Profile} alt="" />
      </div>

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
      <div className="skill pb-24">
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
          <TabList
            underlinePlacement="bottom"
            variant="soft"
            sx={{ backgroundColor: "black" }}
            tabFlex="auto"
          >
            <Tab
              variant={index === 0 ? "solid" : "plain"}
              color={index === 0 ? "primary" : "neutral"}
              value={0}
              indicatorPlacement="bottom"
              orientation="vertical"
            >
              <p className="font-mono text-xs md:text-lg md:text-lg">
                <WebIcon fontSize={match_media ? "medium" : "large"}></WebIcon>{" "}
                <span hidden={!match_media}>Web Programming</span>
              </p>
            </Tab>
            <Tab
              variant={index === 1 ? "solid" : "plain"}
              color={index === 1 ? "primary" : "neutral"}
              value={1}
              indicatorPlacement="bottom"
              orientation="vertical"
            >
              <p className="font-mono text-xs md:text-lg">
                <StorageIcon
                  fontSize={match_media ? "medium" : "large"}
                ></StorageIcon>{" "}
                <span hidden={!match_media}>Database</span>
              </p>
            </Tab>
            <Tab
              variant={index === 2 ? "solid" : "plain"}
              color={index === 2 ? "primary" : "neutral"}
              value={2}
              indicatorPlacement="bottom"
            >
              <p className="font-mono text-xs md:text-lg">
                <LanguageIcon
                  fontSize={match_media ? "medium" : "large"}
                ></LanguageIcon>{" "}
                <span hidden={!match_media}>Computer Languages</span>
              </p>
            </Tab>
            <Tab
              variant={index === 3 ? "solid" : "plain"}
              color={index === 3 ? "primary" : "neutral"}
              value={3}
              indicatorPlacement="bottom"
            >
              <p className="font-mono text-xs md:text-lg">
                <VerifiedUserIcon
                  fontSize={match_media ? "medium" : "large"}
                ></VerifiedUserIcon>{" "}
                <span hidden={!match_media}>Cyber Security</span>
              </p>
            </Tab>
            <Tab
              variant={index === 4 ? "solid" : "plain"}
              color={index === 4 ? "primary" : "neutral"}
              value={4}
              indicatorPlacement="bottom"
            >
              <p className="font-mono text-xs md:text-lg">
                <HomeRepairServiceIcon
                  fontSize={match_media ? "medium" : "large"}
                ></HomeRepairServiceIcon>{" "}
                <span hidden={!match_media}>Tools</span>
              </p>
            </Tab>
          </TabList>
          <TabPanel value={0}>
            <div className="mx-auto w-3/4 grid grid-cols-3 gap-10">
              {web_dev.map((item: any) => (
                <SkillDisplay src={item.src} title={item.title}></SkillDisplay>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={1}>
            <div className="mx-auto w-3/4 grid grid-cols-2 gap-10">
              {database.map((item: any) => (
                <SkillDisplay src={item.src} title={item.title}></SkillDisplay>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={2}>
            <div className="mx-auto w-3/4 grid grid-cols-3 gap-10">
              {language.map((item: any) => (
                <SkillDisplay src={item.src} title={item.title}></SkillDisplay>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={3}>
            <div className="mx-auto w-3/4 grid grid-cols-2 gap-10">
              {cybersecurity.map((item: any) => (
                <SkillDisplay src={item.src} title={item.title}></SkillDisplay>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={4}>
            <div className="mx-auto w-3/4 grid grid-cols-3 gap-10">
              {tools.map((item: any) => (
                <SkillDisplay src={item.src} title={item.title}></SkillDisplay>
              ))}
            </div>
            <div className="w-3/4 h-0.5 bg-cyan-800 mx-auto my-10"></div>
            <div className="mx-auto w-3/4 grid grid-cols-2 gap-10">
              {opr_system.map((item: any) => (
                <SkillDisplay src={item.src} title={item.title}></SkillDisplay>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
