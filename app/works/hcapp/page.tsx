import Image from "next/image";

export default function Hcapp() {
  return (
    <>
      {/* Header Image */}
      <div className="max-w-screen-xl mx-auto md:py-16 py-2 md:px-32">
        <Image
          src="/project_assets/hcapp_inner.png"
          alt="HC app on phone"
          width={1000}
          height={500}
        />
      </div>

      {/* Title */}
      <div className="py-8 max-w-screen-lg mx-auto px-8">
        <h3 className="font-bold md:text-3xl text-xl">
          Home Credit Philippines App
        </h3>
      </div>

      {/* Overview */}
      <div className="md:flex max-w-screen-lg px-8 mx-auto justify-between pb-8">
        <div className="md:w-3/4 pb-8">
          <h3 className="font-bold pb-4">OVERVIEW</h3>
          <p className="leading-loose text-justify">
            For over 8 years, home credit has been established as a leading
            consumer finance company providing opportunities for non-credit card
            country to avail of gadgets and appliances through monthly
            installments. As the company expands its product offerings to be
            filipinos shopping partner, the mobile app required a refresh and a
            massive design overhaul to accommodate the growth of the business
            and address the needs of existing and potential customers.
          </p>
        </div>
        <div>
          <h3 className="font-bold pb-4">ROLE</h3>
          <ul className="list-disc list-inside leading-loose">
            <li>Product Designer</li>
            <li>User Researcher</li>
            <li>Design Manager</li>
          </ul>
        </div>
      </div>

      {/* The Challenge */}
      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8">
        <h3 className="font-bold text-xl pb-4 text-center">The Challenge</h3>
        <div>
          <p className="leading-loose pb-8 text-center md:text-3xl text-xl font-bold md:font-normal">
            How might we improve the My Home Credit app, to cater to the growing
            needs of the Business and address the users latent needs?
          </p>
        </div>
      </div>

      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8">
        <div>
          <p className="leading-loose text-justify pb-8">
            In 2017, The my home credit app is a single use app only allowing
            loan customers to conveniently manage their loan repayment schedule
            as it&apos;s sole functionality. Once loan customers have repaid
            their dues, they don&apos;t see any use for the service or the app
            anymore.
          </p>

          <p className="leading-loose text-justify pb-8">
            In 2018, Company took advantage of the shift of human behaviours in
            conducting their day to day activities as they become heavily
            dependent on technology and reliant on mobile devices. With this
            opportunity, the company used that as a leverage to augment the home
            credit experience. Using the mobile app to drive more business and
            generate new revenue streams
          </p>
        </div>
      </div>

      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8">
        <div className="mx-auto px-8">
          <Image
            className="mb-4 "
            src="/project_assets/hcapp_assets/design1.png"
            width={800}
            height={527}
            alt="image of research process"
          />
        </div>
      </div>

      {/* The strategy */}

      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8 mb-4">
        <div>
          <h3 className="font-bold">THE STRATEGY</h3>
          <p className="leading-loose text-justify pb-8">
            The challenge is beyond creating better visuals. The task is
            building a holistic experience that will be beneficial to both
            business and its customers. For us to better address the challenge,
            we have to see it in both (business / users) perspectives. With the
            overarching goal of the company of being present once in our loan
            customers life cycle to being part of their everyday lives as a
            source of great deals and discounts.
          </p>
          <div className="mx-auto px-8">
            <Image
              className="mb-4 rounded-md"
              src="/project_assets/hcapp_assets/process_inner1.png"
              width={800}
              height={527}
              alt="image of research process"
            />
            <p className="text-center italic">
              TL:DR: Here&apos;s a general approach I often use in my projects.
              Click{" "}
              <span className="underline">
                <a href="#anchor_output">here</a>
              </span>{" "}
              to skip my strategy
            </p>
          </div>
        </div>
      </div>

      {/* Baseline */}
      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8">
        <div className="md:flex">
          <div className="w-3/4 pr-8">
            <h3 className=" font-bold">STARTING WITH THE BASELINE</h3>
            <p className="leading-loose text-justify pb-8">
              We had to start the re-design approach by reaching out to the
              business streams and stakeholders to thoroughly understand their
              goals and objectives. Setting up spotlight sessions with them is a
              weekly activity I had to do during the first phase of the
              re-design.
            </p>
          </div>
          <div>
            <Image
              src="/project_assets/hcapp_assets/baseline_inner1.png"
              width={500}
              height={500}
              alt="Baseline images"
            />
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8 mb-4">
        <div>
          <div className="mx-auto px-8">
            <Image
              className="mb-4 rounded-md"
              src="/project_assets/hcapp_assets/baseline_inner2.png"
              width={800}
              height={527}
              alt="persona image"
            />
          </div>

          <p className="leading-loose text-justify pb-8">
            Aside from defining the business challenges and objectives,
            understanding the product offerings of each streams, their value
            proposition and assumptions on users are some activities I regularly
            do during baselining with the business.
          </p>
        </div>
      </div>

      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8 mb-4">
        <div>
          <h3 className="font-bold">BASELINING WITH THE USERS</h3>
          <p className="leading-loose text-justify pb-8">
            Understanding the people we are designing for is as equally
            important as the needs of the business. Just like any other
            projects, I regularly kick-off the research phase by defining who am
            I designing for. Defining the things I wish to learn from them, as
            well as breaking down the jobs that they hire the product for as
            these influence the task scenarios I would need them to perform
            during the test.
          </p>
          <div className="mx-auto px-8">
            <Image
              className="mb-4 rounded-md"
              src="/project_assets/hcapp_assets/baseline_inner3.png"
              width={800}
              height={527}
              alt="persona image"
            />
          </div>
        </div>
      </div>

      {/* BUILDING THE STRUCTURE */}
      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8">
        <div className="md:flex">
          <div className="w-3/4 pr-8">
            <h3 className=" font-bold">BUILDING THE STRUCTURE</h3>
            <p className="leading-loose text-justify pb-8">
              From all the learnings about the users and the needs of the
              business, I start by working on the segmenting the information
              according to relevant information. This serves as the information
              structure aiding us in translating the idea and strategy to a
              tangible product.
            </p>
          </div>
          <div>
            <Image
              src="/project_assets/hcapp_assets/structure_inner.png"
              width={500}
              height={500}
              alt="Baseline images"
            />
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8 mb-4">
        <div>
          <h3 className="font-bold">BUILDING THE TANGIBLE PRODUCT</h3>
          <p className="leading-loose text-justify pb-8">
            From the created information architecture, I had to jump to series
            of sketching and low-fidelity wireframing to validate if the paths
            and navigation make sense. This also helps me find dead ends in the
            user journey, negative paths and error states.
          </p>
          <div className="mx-auto px-8">
            <Image
              className="mb-4 rounded-md"
              src="/project_assets/hcapp_assets/product_inner.png"
              width={800}
              height={527}
              alt="persona image"
            />
          </div>
        </div>

        <div>
          <h3 className="font-bold">EARLY AND CONSTANT VALIDATION</h3>
          <p className="leading-loose text-justify pb-8">
            The key to ensure that the product will provide value to our
            customers, Usability testing is introduced as early as possible.
            Sketches and wireframes are constantly tested with users by asking
            them to perform tasks using the created wireframes and iterate it as
            we spot errors and flaws along the way.
          </p>
        </div>
      </div>

      {/* OUTPUT */}

      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8 mb-4">
        <div>
          <h3 className="font-bold mb-4">THE OUTPUT</h3>
          <div className="mx-auto px-8">
            <Image
              className="mb-8 rounded-md"
              src="/project_assets/hcapp_assets/output_1.png"
              width={800}
              height={527}
              alt="persona image"
            />
          </div>
        </div>

        <div>
          <p className="leading-loose text-justify pb-8">
            From an app that a user would use seasonally for checking of loan
            details to an app that user would interact on a day-to-day level.
          </p>
        </div>

        <div className="mx-auto px-8">
          <Image
            className="mb-8 rounded-md"
            src="/project_assets/hcapp_assets/output_2.png"
            width={800}
            height={527}
            alt="persona image"
          />
        </div>
      </div>

      {/* RESULTS */}

      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8 mb-4">
        <h3 className="font-bold mb-4">THE RESULT</h3>

        <ul className="list-disc inside">
          <li className="leading-loose text-justify pb-8">
            Average app open has increased 146% in a span of 9 months. With our
            discount program as the most used functionality of the app.
          </li>

          <li className="leading-loose text-justify pb-8">
            In addition, consumer loan acquisition process has improved in terms
            of process duration as users can now pre-score themselves before
            they head to our partner stores to complete application. Average
            monthly loan applications from 2018 - 2020 has tripled its number.
          </li>
        </ul>
        <p className="italic">
          * Disclaimer: Results is not only attributed to the my contributions
          alone.
        </p>
      </div>
    </>
  );
}
