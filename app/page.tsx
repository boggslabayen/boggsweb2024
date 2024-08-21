import Image from "next/image";
import WorkThumb from "./components/ui/Work_thumb";
import { quickSand } from "./components/ui/Fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  return (
    <>
      <div className="bg-blue-gray-300 max-w-screen py-16 md:py-24 px-8 md:px-32 justify-center">
        <div className="pb-8">
          <h1
            className={`${quickSand.className} max-w-screen-md text-2xl md:text-7xl font-light leading-tight`}
          >
            Hello I'm <span className="font-black">Boggs</span>, <br /> a
            product
            <span className="font-bold"> designer</span>
          </h1>
        </div>

        <div className="">
          <p
            className={`${quickSand.className} max-w-screen-md text-lg md:text-3xl font-light leading-tight`}
          >
            I help companies succeed through designing digital experiences that
            elevate human life.
          </p>
        </div>

        <div className="pt-16 justify-items-center">
          <div className="max-w-12 animate-bounce mx-auto">
            <FontAwesomeIcon
              icon={faCircleDown}
              size="xs"
              style={{ color: "#FFD43B" }}
            />
          </div>
          <p className="text-center">scroll down for more</p>
        </div>
      </div>

      <div className="bg-blue-gray-50 py-16 md:px-32 px-8">
        <WorkThumb />
      </div>
    </>
  );
}
