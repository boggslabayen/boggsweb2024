"use client";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { quickSand } from "./Fonts";

export default function PrimaryButton(props) {
  return (
    <Link href={props.href}>
      <Button
        variant="filled"
        color="amber"
        className="hover:bg-black hover:text-amber-500 rounded-full py-4 px-8"
      >
        {props.name}
      </Button>
    </Link>
  );
}
