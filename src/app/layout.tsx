import type {Metadata} from "next";

import {Encode_Sans} from "next/font/google";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

import Instagram from "./components/Instagram";
import Whatsapp from "./components/Whatsapp";
// eslint-disable-next-line import/order
import Header from "./components/Header";

import "./globals.css";
import {M2Provider} from "./context/M2Context";

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
        {/* Google Analytics y Google Tag Manager con next/script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BTBZZ8PV52"
          strategy="afterInteractive"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BTBZZ8PV52');
              gtag('config', 'G-Q8Y0EX67GW');
            `,
          }}
          id="google-analytics"
          strategy="afterInteractive"
        />
        <Script
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
          id="google-tag-manager"
          strategy="afterInteractive"
        />
        <Header />
        <M2Provider>{children}</M2Provider>
        <footer className="flex flex-col items-center justify-between bg-[#FAFAF4] pt-8 shadow-sm shadow-black">
          <section className="flex w-full flex-col items-center justify-around gap-5 md:flex-row md:px-52">
            <Link href="/">
              <img alt="Logo" className="w-[250px]" src="/logofoooter.png" />
            </Link>
            <div className="flex flex-col justify-between">
              <ul className="text-primary flex h-full flex-col items-center justify-between gap-5 md:gap-8">
                <li className="text-lg font-semibold">Contactanos</li>
                <Link href="mailto:hola@estudiovarq.com.ar">hola@estudiovarq.com.ar</Link>
                <li>+5491159765711</li>
                <Link className="flex gap-2" href="https://wa.me/+5491159091000">
                  <Whatsapp />
                  <p>+5491159091000</p>
                </Link>
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
