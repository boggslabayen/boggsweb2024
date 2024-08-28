const workCards = [
  {
    id: 1,
    duration: "July 2023 - Present",
    role: "Co-founder / Chief Design Officer",
    company: "Lablife Multimedia Inc.,",
  },
  {
    id: 2,
    duration: "April 2022 - July 2023",
    role: "Head of Design",
    company: "Leap Froggr Inc.,",
  },
  {
    id: 3,
    duration: "Nov 2021 - Mar 2022",
    role: "UX / UI Designer",
    company: "Finstro Philippines",
  },
  {
    id: 4,
    duration: "Sep 2018 - Nov 2021",
    role: "UX Design Lead",
    company: "Home Credit Philippines",
  },
  {
    id: 5,
    duration: "Feb 2018 - Sep 2018",
    role: "Sr. UX Designer",
    company: "AXA Philippines",
  },
  {
    id: 6,
    duration: "May 2016 - July 2017",
    role: "UX Design Lead",
    company: "Quiddity Usability Labs",
  },
  {
    id: 7,
    duration: "Sep 2015 - May 2016",
    role: "UX / UI Specialist",
    company: "ASPAC Creatives / Dentsu Philippines",
  },
  {
    id: 8,
    duration: "Mar 2009 - Sep 2015",
    role: "Digital Strategist",
    company: "ABS-CBN",
  },
];

function createWorkCards(workCards) {
  return (
    <div
      className="border-solid border-2 border-gray-900 rounded-md p-8 text-center"
      key={workCards.id}
    >
      <div className="pb-4">
        <p>{workCards.duration}</p>
      </div>

      <div>
        <p className="font-bold h-10">{workCards.role}</p>
        <p>{workCards.company}</p>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto md:max-w-screen-lg">
        {workCards.map(createWorkCards)}
      </div>
    </>
  );
}
