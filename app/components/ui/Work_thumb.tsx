import Link from "next/link";
import { quickSand } from "./Fonts";
import Image from "next/image";

const projectCards = [
  {
    id: 1,
    image: "/project_assets/hcapp.png",
    projectTitle: "My Home Credit App",
    projectDescription: "From loan management tool to super app.",
    link: "/hcapp",
  },
  {
    id: 2,
    image: "/project_assets/pasahero.png",
    projectTitle: "Pasahero Mobile App",
    projectDescription: "Passenger safety app",
    link: "/pasahero",
  },
  {
    id: 3,
    image: "/project_assets/mcormmick.png",
    projectTitle: "McCormick Culinary Philippines",
    projectDescription: "E-commerce platform specially designed for chefs.",
    link: "/mccormmick",
  },
  {
    id: 4,
    image: "/project_assets/axasol.png",
    projectTitle: "AXA Philippines: AXA Solutions",
    projectDescription:
      "AXA Philippines' Financial Advisors' front-end sales solutions",
    link: "/pasahero",
  },
  {
    id: 5,
    image: "/project_assets/osaps.png",
    projectTitle: "OSAPS 2024",
    projectDescription:
      "Branding and Digital Initiatives for Oriental Society of Plastic Surgeons",
    link: "/osaps",
  },
  {
    id: 6,
    image: "/project_assets/roof.png",
    projectTitle: "The Roof",
    projectDescription: "Lounge brand building",
    link: "/theroof",
  },
];

function createProjectCards(projectCards) {
  return (
    <div
      key={projectCards.id}
      className="rounded-lg shadow-md hover:border-solid hover:border-4 hover:border-red-300 mb-4"
    >
      <Link href={`/works/${projectCards.link}`}>
        <div>
          <Image
            src={projectCards.image}
            alt={"project-image"}
            width={600}
            height={200}
          />
        </div>
        <div className="p-4">
          <h3 className={`${quickSand.className} text-xl font-bold pb-1`}>
            {projectCards.projectTitle}
          </h3>
          <p className={`${quickSand.className} text-md font-normal pb-2`}>
            {projectCards.projectDescription}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default function WorkThumb() {
  return (
    <div className="max-w-max md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-auto">
      {projectCards.map(createProjectCards)}
    </div>
  );
}
