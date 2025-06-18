import type {Metadata} from "next";

import {Encode_Sans} from "next/font/google";
import Link from "next/link";

import Instagram from "./components/Instagram";
import Whatsapp from "./components/Whatsapp";
// eslint-disable-next-line import/order
import Header from "./components/Header";

import "./globals.css";
import {M2Provider} from "./context/M2Context";

import Head from "next/head";

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
      <Head>
        {/* Google Analytics: ID G-BTBZZ8PV52 and G-Q8Y0EX67GW */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BTBZZ8PV52" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q8Y0EX67GW" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BTBZZ8PV52');
              gtag('config', 'G-Q8Y0EX67GW');
            `,
          }}
        />

        {/* Hotjar */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3874047,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5JRV935S');
            `,
          }}
        />

        <meta content="Estudio Varq" name="author" />
        <meta content="Estudio Varq" property="og:title" />
        <meta content="Estudio Varq" property="og:site_name" />
        <meta content="https://estudiovarq.com.ar" property="og:url" />
        <meta content="https://estudiovarq.com.ar/logofooter.png" property="og:image" />
        <meta content="https://estudiovarq.com.ar/logofooter.png" property="og:image:secure_url" />
        <meta content="website" property="og:type" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@estudiovarq" name="twitter:site" />
        <meta content="@estudiovarq" name="twitter:creator" />
        <meta content="Estudio Varq" name="twitter:title" />
        <meta
          content="Realizamos reformas estratégicas para potenciar el inmueble y mejorar la calidad de vida de los que habitan tu casa. Cocinas. Baños. Livings. Habitaciones."
          name="twitter:description"
        />
        <meta content="https://estudiovarq.com.ar/logofooter.png" name="twitter:image" />
        <meta content="summary_large_image" name="twitter:card" />
      </Head>
      <head>
        <link href="./Favicon.png" rel="icon" type="image/x-icon" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </head>
      <body className={`${encodeSans.className} bg-white text-black`}>
        <Header />
        <M2Provider>{children}</M2Provider>
        <footer className="flex flex-col items-center justify-between bg-[#FAFAF4] pt-8 shadow-sm shadow-black">
          <section className="flex w-full flex-col items-center justify-between gap-5 md:flex-row md:gap-0 md:px-52">
            <Link href="/">
              <img alt="Logo" className="w-[250px]" src="/logofoooter.png" />
            </Link>
            <ul className="text-primary flex flex-col items-start gap-2 text-sm">
              <Link href="/nosotros">Nosotros</Link>
              <li className="flex gap-2 text-lg">
                <p>Servicios</p>
              </li>
              <ul className="flex flex-col items-start gap-2 text-sm underline">
                <Link href="/">Nuevas construcciones</Link>
                <Link href="/">Remodelaciones</Link>
              </ul>
              <Link href="/casas">Casas</Link>
              <Link href="/">Contactanos</Link>
              <li className="bg-primary mt-5 flex w-max items-start justify-center gap-5 rounded-sm p-1">
                <img alt="facebook" src="/facebook.png" width="15px" />
                <Instagram />
              </li>
            </ul>
            <div className="flex flex-col justify-between">
              <ul className="text-primary flex h-full flex-col items-center justify-between gap-2 md:gap-8">
                <li className="text-lg font-semibold">Contactanos</li>
                <li>hola@estudiovarq.com.ar</li>
                <li>+5491159765711</li>
                <li className="flex gap-2">
                  <Whatsapp />
                  <p>+5491159091000</p>
                </li>
              </ul>
            </div>
          </section>
          <div className="my-5 items-center gap-3 text-center md:flex">
            <p>© Estudio Varq 2025 – Buenos Aires</p>
            <p className="hidden md:block">-</p>
            <p>Todos los derechos reservados</p>
          </div>
        </footer>
      </body>
      <noscript>
        <iframe
          height="0"
          src="https://www.googletagmanager.com/ns.html?id=GTM-5JRV935S"
          style={{display: "none", visibility: "hidden"}}
          title="google analytics"
          width="0"
        />
      </noscript>
    </html>
  );
}
