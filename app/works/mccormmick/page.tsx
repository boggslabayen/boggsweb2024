import Image from "next/image";

export default function Mccormmick() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto md:py-16 py-2 md:px-32">
        <Image
          src="/project_assets/pasahero_inner.png"
          alt="Pasahero on phone"
          width={1000}
          height={500}
        />
      </div>
      <div className="py-8 max-w-screen-lg mx-auto px-8">
        <h3 className="font-bold md:text-3xl text-xl">McCormmick Culinary</h3>
      </div>

      <div className="md:flex max-w-screen-lg px-8 mx-auto justify-between pb-8">
        <div className="md:w-3/4 pb-8">
          <h3 className="font-bold pb-4">OVERVIEW</h3>
          <p className="leading-loose text-justify">
            ABS-CBN is a broadcasting company who is committed to be of service
            for Filipinos worldwide. As a challenge, we were tasked to create a
            product that will contribute to the company&apos;s unwavering pledge
            to serve the Filipino public. We focused on basic needs and common
            pain points that most Filipino public are facing everyday. In 2013,
            safety and public transportation was one of their outstanding
            concerns. This gave us an opportunity to help safeguard the lives of
            the Filipino commuters through a passenger safety app.
          </p>
        </div>
        <div>
          <h3 className="font-bold pb-4">ROLE</h3>
          <ul className="list-disc list-inside leading-loose">
            <li>Product Designer</li>
            <li>User Researcher</li>
          </ul>
        </div>
      </div>

      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8">
        <h3 className="font-bold text-xl pb-4">THE PROCESS</h3>
        <div>
          <h3 className="font-bold">RESEARCH</h3>
          <p className="leading-loose text-justify pb-8">
            The solution started as a hypothesis that majority of public
            commuters are equally concerned about their safety whenever they are
            or their loved ones are in public transit. To further validate my
            hypothesis, I&apos;ve conducted series of in-depth interviews to
            commuting public to discover it first hand. As a result, I have
            validated that as simple as informing their loved ones when they are
            about to embark on a trip can make them feel secure and protected.
            This insight has helped us with the product features to include and
            guided us with our design decisions.
          </p>
          <div className="mx-auto px-8">
            <Image
              className="mb-4 border-solid border-4 border-gray-400 shadow-lg"
              src="/project_assets/pasahero_assets/research_process.png"
              width={800}
              height={527}
              alt="image of research process"
            />
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8">
        <div>
          <h3 className="font-bold">DESIGNING THE PRODUCT</h3>
          <p className="leading-loose text-justify pb-8">
            To ensure the product fit in naturally with the users commuting
            behaviour, multiple design sketches and iterations were done.
            Features are influenced by the task commuters usually do whenever
            they are on a commute such as sharing their transportation details
            to their families. To guarantee users a seamless product, usability
            testings were done using a clickable wireframes and asking test
            respondents to pretend they are using the product while on commute.
          </p>
          <div className="mx-auto px-8">
            <Image
              className="mb-4 border-solid border-4 border-gray-400 shadow-lg"
              src="/project_assets/pasahero_assets/design1.png"
              width={800}
              height={527}
              alt="image of research process"
            />
            <Image
              className="mb-4 border-solid border-4 border-gray-400 shadow-lg"
              src="/project_assets/pasahero_assets/design2.png"
              width={800}
              height={527}
              alt="image of research process"
            />
            <Image
              className="mb-4 border-solid border-4 border-gray-400 shadow-lg"
              src="/project_assets/pasahero_assets/design3.png"
              width={800}
              height={527}
              alt="image of research process"
            />
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8">
        <div>
          <h3 className="font-bold">THE RESULT</h3>
          <p className="leading-loose text-justify pb-8">
            Although the product has been deactivated a few years after
            it&apos;s release in iOS App store due to change of management
            direction, it brought numerous recognition , awards and accolades
            from local and international award giving bodies. Strengthening the
            company&apos;s commitment to public service and at the same time
            establishing the company as an innovative organization through
            technology.
          </p>
        </div>
      </div>
    </>
  );
}
