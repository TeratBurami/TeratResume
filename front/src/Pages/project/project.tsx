import React, { useRef } from "react";
import Nav from "../../components/nav/nav";
import './project_style.css'
import ScrollingImg from "../../components/scrollingImg/scrollingImg";
import Footer from "../../components/footer";

export default function Project() {

  const imgDisplay=[
    {element:"<div>1</div>",className:"bg-cyan-300 w-3/4 h-64"},
    {element:"<div>2</div>",className:"bg-cyan-400 w-3/4 h-64"},
    {element:"<div>3</div>",className:"bg-cyan-500 w-3/4 h-64"},
    {element:"<div>4</div>",className:"bg-cyan-600 w-3/4 h-64"},
    {element:"<div>5</div>",className:"bg-cyan-700 w-3/4 h-64"},
    {element:"<div>6</div>",className:"bg-cyan-800 w-3/4 h-64"}]

    return (
      <div>
        <Nav></Nav>
        <h1 className="glow text-center text-8xl font-bold pt-40 mb-20">PROJECTS</h1>
        <section>
          <div className="scale w-3/4 h-96 bg-cyan-500 mx-auto mb-8" style={{"--scale":"scale-up"} as React.CSSProperties}></div>
          <div className="scroll mb-10" style={{"--direction":"scroll-up"}as React.CSSProperties}>
            <h1 className="text-center text-4xl font-bold text-cyan-200 mb-2">ArtsDrop</h1>
            <p className="w-2/3 text-left mx-auto text-lg text-cyan-400 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, delectus obcaecati corporis quo nihil dolorum veniam, dolores, cum perspiciatis ea reprehenderit exercitationem facilis assumenda est impedit? Quae rem incidunt officia?</p>
          </div>
          <div className="md:flex w-3/4 mx-auto text-cyan-500 md:text-lg gap-10 text-justify">
            <div className="scroll shadow-md shadow-slate-950 p-4" style={{"--direction":"scroll-left"}as React.CSSProperties}>
              <h1 className="text-2xl text-center font-bold mb-4 text-cyan-300">Front-end</h1>
              <p className="mb-14 md:mb-0">left Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci aliquam suscipit, doloremque saepe nam, rerum perspiciatis eius sed dolores repellendus tempore cumque quam placeat. Consequuntur dicta tempore rerum amet atque?</p>
            </div>
            <div className="scroll shadow-md shadow-slate-950 p-4" style={{"--direction":"scroll-right"}as React.CSSProperties}>
              <h1 className="text-2xl text-center font-bold mb-4 text-cyan-300">Back-end</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vero dolorum pariatur autem minus? Eligendi nesciunt molestiae maxime voluptatum sapiente, amet expedita officia officiis hic, rem dolorum, pariatur dolor harum?</p>
            </div>
          </div>
          <div className="w-fit mx-auto mt-10">
            <button className="p-2 text-lg font-bold bg-cyan-900 text-cyan-500 rounded-lg hover:bg-cyan-500/50 hover:text-cyan-950">Explore on GitHub</button>
          </div>
          <div className="w-3/4 h-0.5 bg-cyan-400/25 mt-4 mx-auto"></div>
        </section>


        <section className="mt-20">
          <div className="appear img w-full h-96 bg-cyan-500 mx-auto"></div>
          <h1 className="mt-8 appear scroll text-center text-3xl font-bold text-cyan-500">MUICT Openhouse 2024 - <span className="text-cyan-400 underline underline-offset-4">Registration website</span></h1>
          <ul className="md:grid grid-cols-2 mt-14 mx-12 text-justify text-cyan-600">
            <li className="border-b-2 md:border-r-2 p-4 border-cyan-300"><h1 className="text-xl font-bold text-cyan-500 text-center">Lorem</h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum nulla assumenda incidunt voluptate libero nesciunt unde beatae sunt, quibusdam quo illum necessitatibus deleniti exercitationem repudiandae! Illum error perspiciatis numquam.</li>
            <li className="border-b-2 p-4 border-cyan-300"><h1 className="text-xl font-bold text-cyan-500 text-center">Lorem</h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi saepe officia repellendus, numquam recusandae expedita minima non? Dolore itaque, omnis possimus cumque voluptatem corporis repellendus aliquid deleniti quas tempore nihil.</li>
            <li className="border-b-2 md:border-b-0 md:border-r-2 p-4 border-cyan-300"><h1 className="text-xl font-bold text-cyan-500 text-center">Lorem</h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi saepe officia repellendus, numquam recusandae expedita minima non? Dolore itaque, omnis possimus cumque voluptatem corporis repellendus aliquid deleniti quas tempore nihil.</li>
            <li className="border-b-2 md:border-b-0 p-4 border-cyan-300"><h1 className="text-xl font-bold text-cyan-500 text-center">Lorem</h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi saepe officia repellendus, numquam recusandae expedita minima non? Dolore itaque, omnis possimus cumque voluptatem corporis repellendus aliquid deleniti quas tempore nihil.</li>
          </ul>
          <div className="w-fit mx-auto mt-10">
            <button className="p-2 text-lg font-bold bg-cyan-900 text-cyan-500 rounded-lg hover:bg-cyan-500/50 hover:text-cyan-950">Explore on GitHub</button>
          </div>
          <div className="w-3/4 h-0.5 bg-cyan-400/25 mt-4 mx-auto"></div>
        </section>

        <section className="mt-24">
          <ScrollingImg element={imgDisplay}></ScrollingImg>
          <h1 className="appear text-center text-3xl font-bold text-cyan-400 mt-4">Cocktails Website</h1>
          <div className="scroll p-10 pt-4" style={{"--direction":"scroll-left"}as React.CSSProperties}>
            <h1 className="appear text-3xl font-bold text-cyan-400 mt-4">Front-end Development</h1>
            <p className="text-lg text-cyan-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sequi id libero dolores illum asperiores blanditiis accusantium porro autem tempore? Molestiae amet deleniti praesentium nulla soluta cumque maiores voluptatum reprehenderit.</p>
          </div>
          <div className="scroll p-10 pt-4"  style={{"--direction":"scroll-right"}as React.CSSProperties}>
            <h1 className="appear text-right text-3xl font-bold text-cyan-400 mt-4">Front-end Development</h1>
            <p className="text-lg text-right text-cyan-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sequi id libero dolores illum asperiores blanditiis accusantium porro autem tempore? Molestiae amet deleniti praesentium nulla soluta cumque maiores voluptatum reprehenderit.</p>
          </div>
          <div className="w-fit mx-auto mt-10">
            <button className="p-2 text-lg font-bold bg-cyan-900 text-cyan-500 rounded-lg hover:bg-cyan-500/50 hover:text-cyan-950">Explore on GitHub</button>
          </div>
          <div className="w-3/4 h-0.5 bg-cyan-400/25 mt-4 mx-auto"></div>
        </section>

        <section className="my-24">
          <h1 className="scroll text-center md:text-left md:ml-20 text-3xl text-cyan-500 font-bold mb-4" style={{"--direction":"scroll-left"} as React.CSSProperties}>This <span className="text-cyan-300">Resume</span> Website</h1>
          <div className="md:flex place-items-center gap-10">
            <div className="scroll w-11/12 md:w-1/2 mx-auto md:ml-20" style={{"--direction":"scroll-left"} as React.CSSProperties}>
              <div className="h-80 bg-cyan-500"></div>
            </div>
            <p className="bg-sky-950 mt-10 md:mt-0 md:w-1/2 m-2 p-10 md:mr-10 h-fit text-cyan-500 text-lg shadow-inner shadow-slate-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil optio odio distinctio exercitationem nemo odit. Soluta, eveniet perspiciatis, accusamus quas quae recusandae fuga beatae natus ad nulla, rerum quam ex?</p>
          </div>
          <div className="w-fit mx-auto md:ml-20 mt-10">
            <button className="p-2 text-lg font-bold bg-cyan-900 text-cyan-500 rounded-lg hover:bg-cyan-500/50 hover:text-cyan-950">Explore on GitHub</button>
          </div>
        </section>

        <Footer></Footer>
        
      </div>
    );
  }