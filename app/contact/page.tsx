"use client";

import Contact from "../components/contact-form";

export default function contact() {
  return (
    <>
      <div className="max-w-80 md:max-w-screen-lg mx-auto py-16">
        <div className="">
          <h3 className="text-center font-bold text-xl md:text-4xl pb-4 text-lab-purple max-w-4xl">
            Got a project in mind? Want to collaborate?Send us a message.
          </h3>
        </div>
      </div>

      <Contact />
    </>
  );
}
