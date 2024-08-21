import { quickSand } from "./Fonts";
import Image from "next/image";

const workCards = [
  {
    id: 1,
    image: "/project_assets/hc-app.png",
    projectTitle: "Pasahero",
    projectDescription: "Short description about the project",
  },
  {
    id: 2,
    image: "/project_assets/hc-app.png",
    projectTitle: "Home Credit",
    projectDescription: "Short description about the project",
  },
  {
    id: 3,
    image: "/project_assets/hc-app.png",
    projectTitle: "AXA",
    projectDescription: "Short description about the project",
  },
  {
    id: 4,
    image: "/project_assets/hc-app.png",
    projectTitle: "The Roof",
    projectDescription: "Short description about the project",
  },
  {
    id: 5,
    image: "/project_assets/hc-app.png",
    projectTitle: "The Berkeley",
    projectDescription: "Short description about the project",
  },
];

function createWorkCards(workCards) {
  return (
    <div
      key={workCards.id}
      className="border-solid border-2 border-slate-400 rounded-md hover:bg-red-200 "
    >
      <div>
        <Image
          src={workCards.image}
          alt={"project-image"}
          width={600}
          height={200}
        />
      </div>
      <div className="p-4">
        <h3 className={`${quickSand.className} text-xl font-bold pb-2`}>
          {workCards.projectTitle}
        </h3>
        <p className={`${quickSand.className} text-md font-bold pb-2`}>
          {workCards.projectDescription}
        </p>
      </div>
    </div>
  );
}

export default function WorkThumb() {
  return (
    <div className="max-w-max md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center mx-auto">
      {workCards.map(createWorkCards)}
    </div>
  );
}
