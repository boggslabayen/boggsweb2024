"use client";

import { quickSand } from "./Fonts";
import Link from "next/link";

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-1  font-medium hover:font-bold hover:text-amber-500"
      >
        <a href="/" className="flex items-center">
          Works
        </a>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-1  font-medium hover:font-bold hover:text-amber-500"
      >
        <a href="/about" className="flex items-center">
          Resume
        </a>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-1  font-medium hover:font-bold hover:text-amber-500"
      >
        <a href="/contact" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="-m-6 min-w-screen overflow-scroll  bg-white">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none p-8 md:px-32 md:py-16">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link href="/">
            <h3
              className={`${quickSand.className} mr-4 cursor-pointer py-1.5 font-bold text-3xl`}
            >
              Jose Labayen
            </h3>
          </Link>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </div>
  );
}
