import Image from "next/image";

export default function Roof() {
  return (
    <>
      {/* Header Image */}
      <div className="max-w-screen-xl mx-auto md:py-16 py-2 md:px-32">
        <Image
          src="/project_assets/roof_assets/roof_head.png"
          alt="The Roof Logo"
          width={1250}
          height={833}
        />
      </div>

      {/* Title */}
      <div className="py-8 max-w-screen-lg mx-auto px-8">
        <h3 className="font-bold md:text-3xl text-xl">
          The Roof: G1 Premium Lounge Branding
        </h3>
      </div>

      {/* Overview */}
      <div className="md:flex max-w-screen-lg px-8 mx-auto justify-between pb-8">
        <div className="md:w-3/4 pb-8">
          <h3 className="font-bold pb-4">OVERVIEW</h3>
          <p className="leading-loose text-justify pb-8">
            G1 Lodge is a premier business hotel located in Baguio City, the
            summer capital of the Philippines. As part of its vision for growth
            and brand expansion, the hotel plans to introduce a new premium
            lounge on its roof deck. This lounge aims to attract tourists,
            locals, and visitors seeking a must-try experience or a place to
            celebrate all kinds of successes. The brand is focused on creating a
            strong identity for the lounge to attract new customers and
            establish itself as the top-of-mind premium destination for its
            target market.
          </p>
        </div>
        <div>
          <h3 className="font-bold pb-4">ROLE</h3>
          <ul className="list-disc list-inside leading-loose">
            <li>Creative Director</li>
            <li>Researcher</li>
          </ul>
        </div>
      </div>

      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8">
        <h3 className="font-bold text-xl pb-4 text-center">The Challenge</h3>
        <div>
          <p className="leading-loose pb-8 text-center md:text-3xl text-xl font-bold md:font-normal">
            How can we develop a brand that achieves strong brand recall?
          </p>
        </div>
      </div>

      {/* STRATEGY */}

      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8 mb-4">
        <div>
          <h3 className="font-bold">THE STRATEGY</h3>
          <p className="leading-loose text-justify pb-8">
            Rather than jumping directly into logo design, I began by
            identifying the target markets. I conducted informal interviews to
            uncover their motivations for visiting a lounge, bar, or cafe beyond
            just functional reasons, as well as their overall experiences.
          </p>

          <p className="leading-loose text-justify pb-8">
            After gathering and analyzing the research, I defined the key
            customer needs and created personas to represent the main customer
            groups.
          </p>
          <div className="mx-auto px-8">
            <Image
              className="mb-4 rounded-md"
              src="/project_assets/roof_assets/g1_needstate.png"
              width={800}
              height={527}
              alt="image of research process"
            />
          </div>

          <div className="mx-auto px-8">
            <Image
              className="mb-4 rounded-md"
              src="/project_assets/roof_assets/persona1.png"
              width={800}
              height={527}
              alt="image of research process"
            />
          </div>
        </div>
      </div>

      {/* OUTPUT */}

      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8 mb-4">
        <div>
          <h3 className="font-bold mb-4">THE OUTPUT</h3>
        </div>

        <div>
          <p className="leading-loose text-justify pb-8">
            After identifying what matters most to our target market, I took it
            a step further by personifying the brand, making it easier for
            people to connect with and see themselves in it. By leveraging these
            brand personalities, I was able to position the brand as a
            destination for creating amazing moments.
          </p>
        </div>

        <div className="mx-auto px-8">
          <Image
            className="mb-8 rounded-md"
            src="/project_assets/roof_assets/g1brand.png"
            width={800}
            height={527}
            alt="persona image"
          />
        </div>

        <div>
          <p className="leading-loose text-justify pb-8">
            This clear brand positioning and personification inspired my
            creativity as I moved forward with designing the brand&apos;s visual
            identity.
          </p>
        </div>

        <div className="mx-auto px-8">
          <Image
            className="mb-8 rounded-md"
            src="/project_assets/roof_assets/roof_color.png"
            width={800}
            height={527}
            alt="persona image"
          />
        </div>

        <div className="mx-auto px-8">
          <Image
            className="mb-8 rounded-md"
            src="/project_assets/roof_assets/roof_sample.png"
            width={800}
            height={527}
            alt="persona image"
          />
        </div>
      </div>
    </>
  );
}
