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
              bgcolor: "rgb(241, 241, 241 )",
              [`& .${tabClasses.root}[aria-selected="true"]`]: {
                boxShadow: "sm",
                bgcolor: "background.surface",
              },
              width: match_media ? "calc(5/6*100%)" : "100%",
              margin: "0 auto",
              justifyContent: "space-around",
              boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)"
            }}
          >
            <Tab sx={{textAlign:"center"}} disableIndicator>Web</Tab>
            <Tab sx={{textAlign:"center"}} disableIndicator>Database</Tab>
            <Tab sx={{textAlign:"center"}} disableIndicator>Languages</Tab>
            <Tab sx={{textAlign:"center"}} disableIndicator>Cyber Security</Tab>
            <Tab sx={{textAlign:"center"}} disableIndicator>Tools</Tab>
          </TabList>
          <TabPanel value={0} sx={{backgroundColor: "background.surface", borderRadius: "lg", width: match_media ? "calc(5/6*100%)" : "100%", margin: "15px auto",height:match_media ? "400px" : "550px", boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)"}}>
            <div className="grid grid-cols-3 md:flex flex-wrap gap-y-4 md:gap-10 md:gap-y-4 mx-auto">
                {Data.skills[0]?.web_dev?.map((item)=>(
                    <div key={item.src} className='mx-auto md:mx-0 flex flex-col justify-around w-32 h-32 p-2 shadow shadow-slate-400 rounded-lg place-items-center'>
                        <img className='w-12 h-12 object-cover' src={item.src} alt="" />
                        <div className="flex flex-col place-items-center">
                            <p className='text-md font-bold text-cyan-800'>{item.title}</p>
                            <p className='text-[0.40rem] text-cyan-700'>{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
          </TabPanel>
          <TabPanel value={1} sx={{backgroundColor: "background.surface", borderRadius: "lg", width: match_media ? "calc(5/6*100%)" : "100%", margin: "15px auto",height:match_media ? "400px" : "550px", boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)"}}>
            <div className="grid grid-cols-3 md:flex flex-wrap gap-y-4 md:gap-10 md:gap-y-4 mx-auto">
                {Data.skills[0]?.database?.map((item)=>(
                    <div key={item.src} className='mx-auto md:mx-0 flex flex-col justify-around w-32 h-32 p-2 shadow shadow-slate-400 rounded-lg place-items-center'>
                        <img className='w-12 h-12' src={item.src} alt="" />
                        <div className="flex flex-col place-items-center">
                            <p className='text-md font-bold text-cyan-800'>{item.title}</p>
                            <p className='text-[0.40rem] text-cyan-700'>{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
          </TabPanel>
          <TabPanel value={2} sx={{backgroundColor: "background.surface", borderRadius: "lg", width: match_media ? "calc(5/6*100%)" : "100%", margin: "15px auto",height:match_media ? "400px" : "550px", boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)"}}>
            <div className="grid grid-cols-3 md:flex flex-wrap gap-y-4 md:gap-10 md:gap-y-4 mx-auto">
                {Data.skills[0]?.language?.map((item)=>(
                    <div key={item.src} className='mx-auto md:mx-0 flex flex-col justify-around w-32 h-32 p-2 shadow shadow-slate-400 rounded-lg place-items-center'>
                        <img className='w-12 h-12' src={item.src} alt="" />
                        <div className="flex flex-col place-items-center">
                            <p className='text-md font-bold text-cyan-800'>{item.title}</p>
                            <p className='text-[0.40rem] text-cyan-700'>{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
          </TabPanel>
          <TabPanel value={3} sx={{backgroundColor: "background.surface", borderRadius: "lg", width: match_media ? "calc(5/6*100%)" : "100%", margin: "15px auto",height:match_media ? "400px" : "550px", boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)"}}>
            <div className="grid grid-cols-3 md:flex flex-wrap gap-y-4 md:gap-10 md:gap-y-4 mx-auto">
                {Data.skills[0]?.cybersecurity?.map((item)=>(
                    <div key={item.src} className='mx-auto md:mx-0 flex flex-col justify-around w-32 h-32 p-2 shadow shadow-slate-400 rounded-lg place-items-center'>
                        <img className='w-12 h-12' src={item.src} alt="" />
                        <div className="flex flex-col place-items-center">
                            <p className='text-md font-bold text-cyan-800'>{item.title}</p>
                            <p className='text-[0.40rem] text-cyan-700'>{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
          </TabPanel>
          <TabPanel value={4} sx={{backgroundColor: "background.surface", borderRadius: "lg", width: match_media ? "calc(5/6*100%)" : "100%", margin: "15px auto",height:match_media ? "400px" : "550px", boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)"}}>
            <div className="grid grid-cols-3 md:flex flex-wrap gap-y-4 md:gap-10 md:gap-y-4 mx-auto">
                {Data.skills[0]?.tools?.map((item)=>(
                    <div key={item.src} className='mx-auto md:mx-0 flex flex-col justify-around w-32 h-32 p-1.5 shadow shadow-slate-400 rounded-lg place-items-center'>
                        <img className='w-12 h-12' src={item.src} alt="" />
                        <div className="flex flex-col place-items-center">
                            <p className='text-md font-bold text-cyan-800'>{item.title}</p>
                            <p className='text-[0.40rem] text-cyan-700'>{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className='text-cyan-700 text-base mt-8'>Operating System</p>
            <div className='w-full h-0.5 bg-cyan-700 mb-4 mt-1'></div>
            <div className="grid grid-cols-2 md:flex flex-wrap gap-y-4 md:gap-10 md:gap-y-4 mx-auto">
                {Data.skills[0]?.opr_system?.map((item)=>(
                    <div key={item.src} className='mx-auto md:mx-0 flex flex-col justify-around w-32 h-32 p-2 shadow shadow-slate-400 rounded-lg place-items-center'>
                        <img className='w-12 h-12' src={item.src} alt="" />
                        <div className="flex flex-col place-items-center">
                            <p className='text-md font-bold text-cyan-800'>{item.title}</p>
                            <p className='text-[0.40rem] text-cyan-700'>{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
          </TabPanel>
        </Tabs>
    </div>
  );
}