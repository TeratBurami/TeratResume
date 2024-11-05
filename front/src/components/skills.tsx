import Data from '../json/home.json'
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import { TabPanel } from "@mui/joy";
import { useMediaQuery } from '@mui/material';

export default function Skills() {
    const match_media = useMediaQuery("(min-width:600px)");

  return (
    <div className='mt-20 mx-auto bg-white p-2'>
        <Tabs
          aria-label="tabs"
          defaultValue={0}
          sx={{ bgcolor: "transparent" }}
        >
          <TabList
            disableUnderline
            sx={{
              p: 0.5,
              gap: 0.5,
              borderRadius: "lg",
              bgcolor: "background.level2",
              [`& .${tabClasses.root}[aria-selected="true"]`]: {
                boxShadow: "sm",
                bgcolor: "background.surface",
              },
              width: match_media ? "calc(5/6*100%)" : "100%",
              margin: "0 auto",
              justifyContent: "space-around",
            }}
          >
            <Tab sx={{textAlign:"center"}} disableIndicator>Web</Tab>
            <Tab sx={{textAlign:"center"}} disableIndicator>Database</Tab>
            <Tab sx={{textAlign:"center"}} disableIndicator>Languages</Tab>
            <Tab sx={{textAlign:"center"}} disableIndicator>Cyber Security</Tab>
            <Tab sx={{textAlign:"center"}} disableIndicator>Tools</Tab>
          </TabList>
          <TabPanel value={0} sx={{backgroundColor: "background.surface", borderRadius: "lg", width: match_media ? "calc(5/6*100%)" : "100%", margin: "5px auto"}}>
            <div className="grid grid-cols-2 md:flex flex-wrap gap-10 mx-auto">
                {Data.skills[0]?.web_dev?.map((item)=>(
                    <div key={item.src} className='mx-auto md:mx-0 flex flex-col justify-around w-32 h-32 p-2 shadow shadow-slate-400 rounded-lg place-items-center'>
                        <img className='w-12 h-12 rounded-full object-cover' src={item.src} alt="" />
                        <div className="flex-cols place-items-center">
                            <p className='text-md font-bold text-cyan-800'>{item.title}</p>
                            <p className='text-sm text-cyan-700'>{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
          </TabPanel>
          <TabPanel value={1} sx={{backgroundColor: "background.surface", borderRadius: "lg", width: match_media ? "calc(5/6*100%)" : "100%", margin: "5px auto"}}>
            <div className="grid grid-cols-2 md:flex flex-wrap gap-10 mx-auto">
                {Data.skills[0]?.database?.map((item)=>(
                    <div key={item.src} className='mx-auto md:mx-0 flex flex-col justify-around w-32 h-32 p-2 shadow shadow-slate-400 rounded-lg place-items-center'>
                        <img className='w-12 h-12 rounded-full' src={item.src} alt="" />
                        <div className="flex-cols place-items-center">
                            <p className='text-md font-bold text-cyan-800'>{item.title}</p>
                            <p className='text-sm text-cyan-700'>{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
          </TabPanel>
          <TabPanel value={2} sx={{backgroundColor: "background.surface", borderRadius: "lg", width: match_media ? "calc(5/6*100%)" : "100%", margin: "5px auto"}}>
            <div className="grid grid-cols-2 md:flex flex-wrap gap-10 mx-auto">
                {Data.skills[0]?.language?.map((item)=>(
                    <div key={item.src} className='mx-auto md:mx-0 flex flex-col justify-around w-32 h-32 p-2 shadow shadow-slate-400 rounded-lg place-items-center'>
                        <img className='w-12 h-12 rounded-full' src={item.src} alt="" />
                        <div className="flex-cols place-items-center">
                            <p className='text-md font-bold text-cyan-800'>{item.title}</p>
                            <p className='text-sm text-cyan-700'>{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
          </TabPanel>
          <TabPanel value={3} sx={{backgroundColor: "background.surface", borderRadius: "lg", width: match_media ? "calc(5/6*100%)" : "100%", margin: "5px auto"}}>
            <div className="grid grid-cols-2 md:flex flex-wrap gap-10 mx-auto">
                {Data.skills[0]?.cybersecurity?.map((item)=>(
                    <div key={item.src} className='mx-auto md:mx-0 flex flex-col justify-around w-32 h-32 p-2 shadow shadow-slate-400 rounded-lg place-items-center'>
                        <img className='w-12 h-12 rounded-full' src={item.src} alt="" />
                        <div className="flex-cols place-items-center">
                            <p className='text-md font-bold text-cyan-800'>{item.title}</p>
                            <p className='text-sm text-cyan-700'>{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
          </TabPanel>
          <TabPanel value={4} sx={{backgroundColor: "background.surface", borderRadius: "lg", width: match_media ? "calc(5/6*100%)" : "100%", margin: "5px auto"}}>
            <div className="grid grid-cols-2 md:flex flex-wrap gap-10 mx-auto">
                {Data.skills[0]?.tools?.map((item)=>(
                    <div key={item.src} className='mx-auto md:mx-0 flex flex-col justify-around w-32 h-32 p-2 shadow shadow-slate-400 rounded-lg place-items-center'>
                        <img className='w-12 h-12 rounded-full' src={item.src} alt="" />
                        <div className="flex-cols place-items-center">
                            <p className='text-md font-bold text-cyan-800'>{item.title}</p>
                            <p className='text-sm text-cyan-700'>{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
          </TabPanel>
        </Tabs>
    </div>
  );
}