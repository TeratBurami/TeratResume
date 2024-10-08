import Nav from "../../components/nav";
import Card from "../../components/card";
import Mahidol from '../../assets/images/mahidol.png';

export default function Home() {
  return (
    <>
      {/* header */}
      <Nav></Nav>

      {/* personal information */}
      <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap p-10 mt-20 justify-center">
        <div className="w-1/2 h-10 bg-cyan-300"></div>
        <div>
          <h1 className="mt-4 font-mono font-bold text-4xl text-center text-cyan-300">
            Terat Burami
          </h1>
          <p className="mt-4 font-mono text-lg text-center text-cyan-600">
            I’m{" "}
            <span className="text-xl font-bold text-sky-400">Terat Burami</span>
            , a junior developer and cyber security. I love doing new things,
            have new passions, gain experiences, and am always ready to develop
            myself.
          </p>
        </div>
      </div>

      {/* education */}
      <h1 className="underline underline-offset-8 mt-4 font-mono font-bold text-4xl text-center text-cyan-300">
        Education
      </h1>
      <Card year="2022 - Present" title="Mahidol University" description="Bachelor of Science in ICT (International Program)" image={Mahidol}></Card>
      {/* <div className="">
        <h1 className="mt-4 font-mono font-bold text-4xl text-center text-cyan-300">
          Mahidol University
        </h1>
        <h1 className="mt-4 font-mono font-bold text-2xl text-center text-cyan-500">
          Bachelor of Science in ICT (International Program)
        </h1>
        <p className="mt-4 font-mono text-lg text-center text-cyan-600">
            2022 - Present
          </p>
      </div> */}
    </>
  );
}
