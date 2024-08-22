import { quickSand } from "../components/ui/Fonts";

export default function About() {
  return (
    <>
      <div className="max-w-screen py-16 md:py-24 px-8 md:px-32">
        <div className=" max-w-screen-md mx-auto">
          <h1
            className={`${quickSand.className} text-xl md:text-3xl font-bold text-center leading-8
            `}
          >
            Hey! I&apos;m Jose, a designer obsessed in creating digital
            experiences that will make life efficient.
          </h1>
        </div>
      </div>
    </>
  );
}
