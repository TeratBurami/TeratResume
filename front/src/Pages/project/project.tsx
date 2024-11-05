import React from "react";
import Nav from "../../components/nav/nav";
import './project_style.css'
import ScrollingImg from "../../components/scrollingImg/scrollingImg";
import Footer from "../../components/footer";
import Data from '../../json/project.json'

export default function Project() {

    return (
      <div>
        <Nav></Nav>
        <h1 className="glow text-center text-6xl md:text-8xl font-bold pt-40 mb-20">PROJECTS</h1>
        <section>
          <img src={Data.artsdrops[0].img} className="scale w-3/4 h-96 mx-auto mb-8" style={{"--scale":"scale-up"} as React.CSSProperties}></img>
          <div className="scroll mb-10" style={{"--direction":"scroll-up"}as React.CSSProperties}>
            <h1 className="text-center text-4xl font-bold text-cyan-200 mb-2">ArtsDrop</h1>
            <p className="w-2/3 text-left mx-auto text-sm md:text-lg text-cyan-400 font-bold">{Data.artsdrops[0].detail}</p>
          </div>
          <div className="md:grid grid-cols-2 w-3/4 mx-auto text-cyan-500 md:text-lg gap-10">
            <div className="scroll shadow-md shadow-slate-950 p-4 md:mb-0 mb-4" style={{"--direction":"scroll-left"}as React.CSSProperties}>
              <h1 className="text-2xl text-center font-bold mb-4 text-cyan-300">Front-end</h1>
              <p className="text-ms md:text-base">{Data.artsdrops[0].frontend}</p>
            </div>
            <div className="scroll shadow-md shadow-slate-950 p-4" style={{"--direction":"scroll-right"}as React.CSSProperties}>
              <h1 className="text-2xl text-center font-bold mb-4 text-cyan-300">Back-end</h1>
              <p className="text-ms md:text-base">{Data.artsdrops[0].backend}</p>
            </div>
          </div>
          <div className="w-fit mx-auto mt-10">
            <button className="p-2 text-lg font-bold bg-cyan-900 text-cyan-500 rounded-lg hover:bg-cyan-500/50 hover:text-cyan-950"><a target="_blank" href={Data.artsdrops[0].github}>Explore on GitHub</a></button>
          </div>
          <div className="w-3/4 h-0.5 bg-cyan-400/25 mt-4 mx-auto"></div>
        </section>


        <section className="mt-20">
          <img className="appear w-full h-96" src={Data.ophweb[0].img}></img>
          <h1 className="mt-8 appear scroll text-center text-2xl md:text-4xl font-bold text-cyan-500">MUICT Openhouse 2024<p className="text-cyan-400 underline underline-offset-4">Registration website</p></h1>
          <ul className="md:grid grid-cols-2 mt-14 md:mt-20 mx-12 text-justify text-cyan-600">
            <li className="border-b-2 md:border-r-2 p-4 border-cyan-300 text-sm"><h1 className="text-xl font-bold text-cyan-500 text-center">Front-end</h1>{Data.ophweb[0].design}</li>
            <li className="border-b-2 p-4 border-cyan-300 text-sm"><h1 className="text-xl font-bold text-cyan-500 text-center">Back-end</h1>{Data.ophweb[0].front}</li>
            <li className="border-b-2 md:border-b-0 md:border-r-2 p-4 border-cyan-300 text-sm"><h1 className="text-xl font-bold text-cyan-500 text-center">Collaboration</h1>{Data.ophweb[0].collab}</li>
            <li className="border-b-2 md:border-b-0 p-4 border-cyan-300 text-sm"><h1 className="text-xl font-bold text-cyan-500 text-center">Time Management</h1>{Data.ophweb[0].time}</li>
          </ul>
          <div className="w-fit mx-auto mt-10">
            <button className="p-2 text-lg font-bold bg-cyan-900 text-cyan-500 rounded-lg hover:bg-cyan-500/50 hover:text-cyan-950"><a target="_blank" href={Data.ophweb[0].github}>Explore on GitHub</a></button>
          </div>
          <div className="w-3/4 h-0.5 bg-cyan-400/25 mt-4 mx-auto"></div>
        </section>

        <section className="mt-24">
          <ScrollingImg image={Data.cocktail[0].img}></ScrollingImg>
          <div className="shadow shadow-2xl shadow-black py-4">
            <h1 className="appear text-center text-3xl font-bold text-cyan-400">Cocktails Website</h1>
            <p className="text-center text-cyan-500 text-lg">{Data.cocktail[0].detail}</p>
          </div>
          <div className="scroll p-10 pt-4 md:w-2/3" style={{"--direction":"scroll-left"}as React.CSSProperties}>
            <h1 className="appear text-xl md:text-3xl font-bold text-cyan-400 mt-10">Front-end Development and Design</h1>
            <p className="text-base md:text-lg text-cyan-600">{Data.cocktail[0].frontend}</p>
          </div>
          <div className="scroll p-10 pt-4 md:w-2/3 float-right"  style={{"--direction":"scroll-right"}as React.CSSProperties}>
            <h1 className="appear text-right text-xl md:text-3xl font-bold text-cyan-400 mt-4">Javascript</h1>
            <p className="text-base md:text-lg text-right text-cyan-600">{Data.cocktail[0].js}</p>
          </div>
          <div className="w-fit mx-auto mt-10">
            <button className="p-2 text-lg font-bold bg-cyan-900 text-cyan-500 rounded-lg hover:bg-cyan-500/50 hover:text-cyan-950"><a target="_blank" href={Data.cocktail[0].github}>Explore on GitHub</a></button>
          </div>
          <div className="w-3/4 h-0.5 bg-cyan-400/25 mt-4 mx-auto"></div>
        </section>

        <section className="my-24">
          <h1 className="scroll text-center md:text-left md:ml-20 text-3xl text-cyan-500 font-bold mb-4" style={{"--direction":"scroll-left"} as React.CSSProperties}>This <span className="text-cyan-300">Resume</span> Website</h1>
          <div className="md:flex place-items-center gap-10">
            <div className="scroll w-11/12 md:w-1/2 mx-auto md:ml-20" style={{"--direction":"scroll-left"} as React.CSSProperties}>
              <img src={Data.resume[0].img} className="h-80 w-full"></img>
            </div>
            <p className="bg-sky-950 mt-10 md:mt-0 md:w-1/2 m-2 p-10 md:mr-10 h-fit text-cyan-500 text-sm md:text-lg shadow-inner shadow-slate-900">{Data.resume[0].detail}</p>
          </div>
          <div className="w-fit mx-auto md:ml-20 mt-10">
            <button className="p-2 text-lg font-bold bg-cyan-900 text-cyan-500 rounded-lg hover:bg-cyan-500/50 hover:text-cyan-950"><a target="_blank" href={Data.resume[0].github}>Explore on GitHub</a></button>
          </div>
        </section>

        <Footer></Footer>
        
      </div>
    );
  }