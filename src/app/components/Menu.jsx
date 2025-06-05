'use client'
import Link from "next/link";
import { useState } from "react";


export default function Menu({onClick, open}) {
  return (
    <section onClick={onClick}>
      <svg
        onClick={onClick}
        className="cursor-pointer"
        width="27"
        height="16"
        viewBox="0 0 27 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="1" x2="27" y2="1" stroke="#001F3D" strokeWidth="2.5" />
        <line y1="8" x2="27" y2="8" stroke="#001F3D" strokeWidth="2.5" />
        <line y1="15" x2="27" y2="15" stroke="#001F3D" strokeWidth="2.5" />
      </svg>
      <aside className="xl:hidden w-full absolute z-20 top-20 right-0 bottom-0 flex flex-col gap-2 text-primary">
        <ul className={open ? "flex flex-col px-6 gap-2 w-full h-52 transition-all bg-white" : "h-0"}>
            <Link href="/"></Link>
            <Link href="/"></Link>
            <Link href="/"></Link>
            <Link href="/"></Link>
        </ul>
      </aside>
    </section>
  );
}
