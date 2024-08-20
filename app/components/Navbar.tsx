"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { quickSand } from "./Fonts";

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="-my-6 max-h-[768px] w-full py-4">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-8 py-6 lg:px-8 lg:py-8 bg-blue-jay">
        <div className="flex items-center justify-between">
          <Typography
            as="a"
            href="#"
            className={`${quickSand.className} md:text-3xl cursor-pointer font-black text-black`}
          >
            Boggs Labayen
          </Typography>

          <div className="flex hidden md:block">
            <Link
              href="/"
              className={`${quickSand.className}px-4 text-black hover:text-amber-900 text-lg font-normal hover:font-black md:pl-8`}
            >
              About
            </Link>

            <Link
              href="/"
              className={`${quickSand.className}px-4 text-black hover:text-amber-900 text-lg font-normal hover:font-black md:pl-8`}
            >
              Works
            </Link>

            <Link
              href="/contact"
              className={`${quickSand.className}px-4 text-black hover:text-amber-900 text-lg font-normal hover:font-black md:pl-8`}
            >
              Contact Me
            </Link>
          </div>
        </div>
        <Collapse open={openNav}>
          <div className="text-center">
            <Link
              href="/programs"
              className="px-4 py-4 text-light-blue-100 hover:text-amber-900 text-md block"
            >
              Program / Speakers
            </Link>
            <Link
              href="/abstract"
              className="px-4 py-4 text-light-blue-100 hover:text-amber-900 text-md block"
            >
              Abstract
            </Link>
            <Link
              href="/explore-cebu"
              className="px-4 py-4 text-light-blue-100 hover:text-amber-900 text-md block"
            >
              Explore
            </Link>
            <Link
              href="/sponsorship"
              className="px-4 py-4 text-light-blue-100 hover:text-amber-900 text-md block"
            >
              Sponsors
            </Link>

            <Link
              href="/masterclass"
              className="px-4 py-4 text-light-blue-100 hover:text-amber-900 text-md block"
            >
              Masterclass
            </Link>
          </div>

          <div className="flex items-center gap-x-1 justify-center py-4">
            <Link href="/register">
              <Button
                variant="filled"
                size="lg"
                className="rounded-full bg-amber-500 text-gray-800"
              >
                <span>Register Now</span>
              </Button>
            </Link>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
