'use client';
import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";

export default function Header() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }
  return (
    <header className="fixed top-0 z-20 flex w-full items-center justify-between xl:px-0 px-5 xl:justify-center xl:gap-96 border-b border-[#d6d6d6] bg-white py-4 text-black">
              <Link href="/">
                <img alt="Logo" src="/logo.png" className="w-64" />
              </Link>
              <ul className="xl:flex hidden gap-14 font-light relative tracking-wide text-[#001F3D]">
                <li className="opacity-60 hover:opacity-100">
                  <Link href="/nosotros">Nosotros</Link>
                </li>
                <li className="cursor-pointer opacity-60 hover:opacity-100" onClick={handleClick}>Servicios</li>
                
                <ul className={open ? "flex flex-col gap-2 absolute right-[180px] border-primary  bg-white py-2 px-4 top-[55px]" : "hidden"}>
                    <Link className="hover:scale-105" href="/nuevas-construcciones">Nuevas construcciones</Link>
                    <Link className="hover:scale-105" href="/remodelaciones">Remodelaciones</Link>
                </ul>
                <li className="opacity-60 hover:opacity-100">
                  <Link href="/casas">Casas</Link>
                </li>
                <li className="opacity-60 hover:opacity-100">
                  <Link href="/contacto">Contactanos</Link>
                </li>
              </ul>
              <div className="xl:hidden block" open={open} onClick={handleClick}>
              <Menu />
              </div>
            </header>
  )
}
