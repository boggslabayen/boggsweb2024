import Image from "next/image";

export default function Osaps() {
  return (
    <>
      {/* Header Image */}
      <div className="max-w-screen-xl mx-auto md:py-16 py-2 md:px-32">
        <Image
          src="/project_assets/osaps_assets/osaps_laptop.png"
          alt="HC app on phone"
          width={1250}
          height={833}
        />
      </div>

      {/* Title */}
      <div className="py-8 max-w-screen-lg mx-auto px-8">
        <h3 className="font-bold md:text-3xl text-xl">
          2024 Oriental Society of Aesthetic Plastic Surgery (OSAPS)
        </h3>
      </div>

      {/* Overview */}
      <div className="md:flex max-w-screen-lg px-8 mx-auto justify-between pb-8">
        <div className="md:w-3/4 pb-8">
          <h3 className="font-bold pb-4">OVERVIEW</h3>
          <p className="leading-loose text-justify pb-8">
            The Oriental Society of Aesthetic Plastic Surgery (OSAPS), a key
            regional society recognized by the International Society of
            Aesthetic Plastic Surgery (ISAPS), held Asia&apos;s largest plastic
            surgery convention in July 2024. This event was hosted and organized
            by the Philippine Association of Plastic, Reconstructive, and
            Aesthetic Surgeons (PAPRAS), the Philippines' leading plastic
            surgeon society. Drawing from past conference experiences, they
            aimed to streamline registration and payment processes. I developed
            a comprehensive website with an integrated payment gateway to
            facilitate seamless registration. Additionally, I created design
            guidelines and marketing collateral, ensuring cohesive and
            professional event branding.
          </p>
        </div>
        <div>
          <h3 className="font-bold pb-4">ROLE</h3>
          <ul className="list-disc list-inside leading-loose">
            <li>Product Designer</li>
            <li>Content Manager</li>
            <li>Front-end Developer</li>
            <li>Creative Director</li>
          </ul>
        </div>
      </div>

      {/* OUTPUT */}

      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8 mb-4">
        <div className="mx-auto px-8 my-8">
          <Image
            className="mb-8 rounded-md"
            src="/project_assets/osaps_assets/osaps_ipad.png"
            width={800}
            height={527}
            alt="persona image"
          />
          <p className="text-center font-bold">OSAPS WEBSITE</p>
        </div>

        <div className="mx-auto px-8">
          <Image
            className="mb-8 rounded-md"
            src="/project_assets/osaps_assets/osaps_mats.png"
            width={800}
            height={527}
            alt="persona image"
          />
          <p className="text-center font-bold">OSAPS MARKETING MATERIALS</p>
        </div>
      </div>
    </>
  );
}
