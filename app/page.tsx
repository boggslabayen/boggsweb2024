import Image from "next/image";
import WorkThumb from "./components/ui/Work_thumb";
import { quickSand } from "./components/ui/Fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import PrimaryButton from "./components/ui/Button";

export default function Home() {
  return (
    <>
      <div className="bg-blue-gray-300 max-w-screen py-16 md:py-24 px-8 md:px-32 justify-center">
        <div className="pb-8">
          <h1
            className={`${quickSand.className} max-w-screen-md text-2xl md:text-7xl font-light leading-tight`}
          >
            Hello I&apos;m <span className="font-black">Boggs</span>, <br /> a
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

      <div className="py-16 md:px-32 px-8 place-content-center">
        <WorkThumb />
      </div>

      <div className="py-16 md:px-32 px-8 ">
        <div className="flex-row md:flex gap-4 justify-center place-items-center">
          <div className="px-16 py-4 md:px-0 md:py-0">
            <Image
              src="/project_assets/boggs_image.png"
              width={300}
              height={300}
              alt="boggs image"
            />
          </div>

          <div className="max-w-screen-md">
            <h3 className={`${quickSand.className} text-3xl font-bold pb-4`}>
              Great you&apos;re still here!
            </h3>

            <p className={`${quickSand.className} text-lg leading-10 pb-4`}>
              {" "}
              Thanks for spending some time to get to know me and my work. My
              name is Jose Ildefonso Labayen. My experience is predominantly
              building digital products as a User Experience designer. I
              approach my design based on the emotions I want my users to have
              after using the product. If you like to collaborate, feel free to
              contact me.
            </p>
            <PrimaryButton name="More about me" href="/contact" />
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}
