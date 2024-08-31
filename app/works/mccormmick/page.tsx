import Image from "next/image";

export default function Mccormmick() {
  return (
    <>
      {/* Header Image */}
      <div className="max-w-screen-xl mx-auto md:py-16 py-2 md:px-32">
        <Image
          src="/project_assets/mcCormmick_assets/mcormmick_head.png"
          alt="HC app on phone"
          width={1000}
          height={500}
        />
      </div>

      {/* Title */}
      <div className="py-8 max-w-screen-lg mx-auto px-8">
        <h3 className="font-bold md:text-3xl text-xl">
          McCormmick Culinary Philippines Website
        </h3>
      </div>

      {/* Overview */}
      <div className="md:flex max-w-screen-lg px-8 mx-auto justify-between pb-8">
        <div className="md:w-3/4 pb-8">
          <h3 className="font-bold pb-4">OVERVIEW</h3>
          <p className="leading-loose text-justify pb-8">
            McCormick culinary Philippines has established itself as a household
            kitchen brand. Being one of the most purchased ingredient brand in
            most supermarkets, The client envisioned to explore other platforms
            to contribute to their revenue.
          </p>

          <p className="leading-loose text-justify">
            McCormick culinary Philippines wanted to market their products
            through online catering to Small to Medium Restaurants. However,
            their existing platform does not allow them to properly manage and
            fulfill orders.
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

      {/* The Challenge */}
      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8">
        <h3 className="font-bold text-xl pb-4 text-center">The Challenge</h3>
        <div>
          <p className="leading-loose pb-8 text-center md:text-3xl text-xl font-bold md:font-normal">
            How might we Improve existing E-commerce website to help increase
            online sales revenue and establish McCormick culinary as a
            professional kitchen partner?
          </p>
        </div>
      </div>

      {/* The strategy */}

      <div className="max-w-screen-lg px-8 mx-auto justify-between pb-8 mb-4">
        <div>
          <h3 className="font-bold">THE STRATEGY</h3>
          <p className="leading-loose text-justify pb-8">
            Concentrate on the existing e-commerce website and identify why the
            product is not translating into sales. Through rigorous usability
            inspection and task analysis, We’ve noticed a lot of bottle necks in
            the sales funnel.
          </p>

          <p className="leading-loose text-justify pb-8">
            We also did immersions and shadowing to learn internal protocols in
            fulfilling orders, we have learned that one of the biggest pain
            points of the company is the tedious manual process and lack of
            automated inventory management system.
          </p>

          <p className="leading-loose text-justify pb-8">
            To better understand the target users of the system, we&apos;ve had
            series of in-depth interviews and translate them as a user personas
            to serve as our guides in designing the platform.
          </p>
          <div className="mx-auto px-8">
            <Image
              className="mb-4 rounded-md"
              src="/project_assets/mcCormmick_assets/mcup 1.png"
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
            The results of our extensive research has lead us into creating a
            tailor made self-service systems to help the client manage product
            movements. As well as a re-designed E-commerce website to enable
            Business owners to conveniently purchase McCormick culinary
            products.
          </p>
        </div>

        <div className="mx-auto px-8">
          <Image
            className="mb-8 rounded-md"
            src="/project_assets/mcCormmick_assets/mcui1.png"
            width={800}
            height={527}
            alt="persona image"
          />
        </div>

        <div className="mx-auto px-8">
          <Image
            className="mb-8 rounded-md"
            src="/project_assets/mcCormmick_assets/mc2.png"
            width={800}
            height={527}
            alt="persona image"
          />
        </div>
      </div>
    </>
  );
}
