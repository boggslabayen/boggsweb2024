import { quickSand } from "../components/ui/Fonts";
import Resume from "../components/ui/Resume";
import Education from "../components/ui/Education";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="max-w-screen py-16 md:py-24 px-8 md:px-32">
        {/* Caption - Headlin */}
        <div className=" max-w-screen-lg mx-auto py-8">
          <h1
            className={`${quickSand.className} text-xl md:text-4xl font-light text-center leading-8
            `}
          >
            Hey! <span className="font-bold">I&apos;m Jose</span>, a designer
            obsessed in creating digital experiences that will make life
            efficient.
          </h1>
        </div>

        {/* Work Experience */}
        <div>
          <Resume />
        </div>

        {/* Education and Skills */}
        <div className="max-w-screen-lg py-16 mx-auto flex justify-between">
          <div>
            <Education />
          </div>
          <div>
            <div>
              <h3 className="pb-8 font-bold text-lg ">Skills</h3>
              <ul className="list-disc leading-loose">
                <li className="pb-4">Ideation</li>
                <li className="pb-4">Strategic Planning</li>
                <li className="pb-4">User Research</li>
                <li className="pb-4">UI Design / Wireframing / Prototyping</li>
                <li className="pb-4">Usability Testing</li>
                <li>Leadership / Management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="max-w-screen-lg py-16 mx-auto flex justify-between">
          <div>
            <h3 className="pb-8 font-bold text-lg">Tool Set</h3>
            <p>Tools I often use in research and design</p>
          </div>

          <div className="grid grid-cols-3 gap-8 justify-around">
            <Image
              src="/tools_logo/figma.png"
              width={100}
              height={100}
              alt="Figma"
            />

            <Image
              src="/tools_logo/xd.png"
              width={100}
              height={100}
              alt="Figma Logo"
            />

            <Image
              src="/tools_logo/ps.png"
              width={100}
              height={100}
              alt="Adobe Photoshop logo"
            />

            <Image
              src="/tools_logo/pp.png"
              width={100}
              height={100}
              alt="Adobe Premiere Logo"
            />

            <Image
              src="/tools_logo/maze.png"
              width={100}
              height={100}
              alt="Maze Logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}
