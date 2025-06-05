import type {Metadata} from "next";

import {Encode_Sans} from "next/font/google";
import Link from "next/link";

import Instagram from "./components/Instagram";
import Whatsapp from "./components/Whatsapp";
import Header from "./components/Header";

import "./globals.css";

export const encodeSans = Encode_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Estudio VArq",
  description:
    "Realizamos reformas estratégicas para potenciar el inmueble y mejorar la calidad de vida de los que habitan tu casa. Cocinas. Baños. Livings. Habitaciones.",
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <head>
        <link href="./Favicon.png" rel="icon" type="image/x-icon" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </head>
      <body className={`${encodeSans.className} bg-white text-black`}>
        <Header />
        {children}
        <footer className="flex items-center justify-between bg-[#FAFAF4] pt-20 pb-10 shadow-sm shadow-black md:px-52">
          <section className="flex w-full flex-col items-center justify-between gap-5 md:flex-row md:gap-0">
            <Link href="/">
              <img alt="Logo" className="w-[250px] md:w-[250px]" src="./logofoooter.png" />
            </Link>
            <ul className="text-primary flex flex-col gap-2">
              <li className="text-lg">Nosotros</li>
              <li className="flex gap-2 text-lg">
                <p>Servicios</p>
              </li>
              <ul className="flex flex-col gap-2 text-sm underline">
                <Link href="/">Nuevas construcciones</Link>
                <Link href="/">Remodelaciones</Link>
              </ul>
              <Link className="text-lg" href="/casas">
                Casas
              </Link>
              <Link className="text-lg" href="/">
                Contactanos
              </Link>
              <li className="bg-primary mx-auto mt-5 flex w-max items-center justify-center gap-5 rounded-sm p-1">
                <img alt="facebook" src="./facebook.png" width="15px" />
                <Instagram />
              </li>
            </ul>
            <div className="flex flex-col justify-between">
              <ul className="text-primary flex h-full flex-col items-center justify-start gap-2 md:gap-8">
                <li className="text-lg font-semibold">Contactanos</li>
                <li>hola@estudiovarq.com.ar</li>
                <li>+5491159765711</li>
                <li className="flex gap-2">
                  <Whatsapp />
                  <p>+5491159091000</p>
                </li>
              </ul>
              <p className="mt-5 px-10 md:mt-0 md:px-0">
                © Estudio Varq 2023 – Buenos Aires Todos los derechos reservados
              </p>
            </div>
          </section>
        </footer>
      </body>
    </html>
  );
}
