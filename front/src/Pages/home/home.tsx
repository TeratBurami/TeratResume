import Nav from "../../components/nav/nav";
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
import Footer from "../../components/footer";
import skillJson from '../../json/skill.json'

export default function Home() {
  const [index, setIndex] = useState(0);
  const match_media = useMediaQuery("(min-width:600px)");

  return (
    <div>
      {/* header */}
      <Nav></Nav>

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

      <div className="flex justify-start md:justify-center mt-20 gap-20 bg-sky-800 flex-wrap md:flex-nowrap w-2/3 md:w-1/2 mx-auto rounded-3xl shadow-lg shadow-slate-900 p-10">
        <div className="languages">
          <h1 className="underline underline-offset-4 text-2xl font-bold text-cyan-300">
            Language
          </h1>
          <ul className="text-lg font-semibold text-cyan-400 list-inside mt-4">
            <li className="my-4">Thai - Native</li>
            <li>English - Intermediate</li>
          </ul>
        </div>
        <div className="contacts">
          <h1 className="underline underline-offset-4 text-2xl font-bold text-cyan-300">
            Contacts
          </h1>
          <ul className="text-lg font-semibold text-cyan-400 list-inside mt-4">
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
          size="sm"
          sx={{ width: "75%", margin: "auto", marginTop: "2rem" }}
        >
          <TabList
            underlinePlacement="bottom"
            variant="soft"
            sx={{ backgroundColor: "floralwhite"}}
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
                <WebIcon fontSize="medium"></WebIcon>{" "}
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
                  fontSize="medium"
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
                  fontSize="medium"
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
                  fontSize="medium"
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
                  fontSize="medium"
                ></HomeRepairServiceIcon>{" "}
                <span hidden={!match_media}>Tools</span>
              </p>
            </Tab>
          </TabList>
          <TabPanel value={0}>
            <div className="mx-auto w-3/4 flex flex-wrap justify-around gap-2 md:gap-16">
              {skillJson.web_dev.map((item: any) => (
                <SkillDisplay src={item.src} title={item.title}></SkillDisplay>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={1}>
            <div className="mx-auto w-3/4 flex flex-wrap justify-around md:gap-12">
              {skillJson.database.map((item: any) => (
                <SkillDisplay src={item.src} title={item.title}></SkillDisplay>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={2}>
            <div className="mx-auto w-3/4 flex flex-wrap justify-around gap-4 md:gap-24">
              {skillJson.language.map((item: any) => (
                <SkillDisplay src={item.src} title={item.title}></SkillDisplay>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={3}>
            <div className="mx-auto w-3/4 flex flex-wrap justify-around gap-8 md:gap-24">
              {skillJson.cybersecurity.map((item: any) => (
                <SkillDisplay src={item.src} title={item.title}></SkillDisplay>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={4}>
            <div className="mx-auto w-3/4 flex flex-wrap justify-around gap-8 md:gap-24">
              {skillJson.tools.map((item: any) => (
                <SkillDisplay src={item.src} title={item.title}></SkillDisplay>
              ))}
            </div>
            <div className="w-3/4 h-0.5 bg-cyan-800 mx-auto my-10"></div>
            <div className="mx-auto w-3/4 flex justify-around">
              {skillJson.opr_system.map((item: any) => (
                <SkillDisplay src={item.src} title={item.title}></SkillDisplay>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>

      <Footer></Footer>
    </div>
  );
}
