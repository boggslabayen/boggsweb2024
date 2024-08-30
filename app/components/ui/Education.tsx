const educCards = [
  {
    id: 1,
    year: "Current",
    program: "Interactive Media Management",
    school: "Centennial College",
    city: "Toronto,Ontario",
  },
  {
    id: 2,
    year: "Aug 2014",
    program: "Designing the Big: User centric Innovation and Strategy",
    school: "Human Factors International",
    city: "New York City, USA",
  },
  {
    id: 3,
    year: "Mar 2008",
    program: "Bachelor of arts - Major in mass communication",
    school: "University of Perpetual Help",
    city: "Manila, Philippines",
  },
  {
    id: 4,
    year: "Mar 2003",
    program: "High School Diploma",
    school: "University of Perpetual Help",
    city: "Manila, Philippines",
  },
];

function createEducCards(educCards) {
  return (
    <div key={educCards.id} className="md:flex pb-8">
      <div className="w-24">
        <p>{educCards.year}</p>
      </div>
      <div>
        <p className="text-md font-bold pb-2">{educCards.program}</p>
        <p>{educCards.school}</p>
        <p>{educCards.city}</p>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <>
      <h3 className="pb-8 font-bold text-lg ">Education and Training</h3>
      <div>{educCards.map(createEducCards)}</div>
    </>
  );
}
