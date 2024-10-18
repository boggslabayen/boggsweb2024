"use client";

import { sendMessage } from "@/app/lib/actions";
import { useFormStatus } from "react-dom";

export default function Contact() {
  const { pending } = useFormStatus();

  return (
    <form
      className="max-w-80 md:max-w-screen-lg mx-auto py-4"
      action={sendMessage}
    >
      <div className="flex flex-col py-4">
        <label htmlFor="Name" className="font-bold">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="bg-blue-gray-50 p-4 rounded-md mt-4"
          placeholder="Your Name Here"
        />
      </div>

      <div className="flex flex-col py-4">
        <label htmlFor="Email" className="font-bold">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="bg-blue-gray-50 p-4 rounded-md mt-4"
          placeholder="i.e hello@geewixx.com"
        />
      </div>

      <div className="flex flex-col py-4">
        <label htmlFor="number" className="font-bold">
          Mobile Number
        </label>
        <input
          type="tel"
          id="number"
          name="number"
          required
          className="bg-blue-gray-50 p-4 rounded-md mt-4"
          placeholder="437-232-12-12"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
        />
      </div>

      <div className="flex flex-col py-4">
        <label htmlFor="message" className="font-bold">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={10}
          required
          className="bg-blue-gray-50 p-4 rounded-md mt-4"
          placeholder="Say something =)"
        />
      </div>

      <div>
        <button
          type="submit"
          className="bg-black px-8 py-2 rounded-full text-white font-bold hover:text-black hover:bg-amber-500"
          disabled={pending}
        >
          {pending ? "Sending" : "Submit"}
        </button>
      </div>
    </form>
  );
}
