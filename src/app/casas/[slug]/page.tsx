"use client";

import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import axios from "axios";
// import PhotoSwipeLightbox from "photoswipe/lightbox";
// import PhotoSwipe from "photoswipe";

import "photoswipe/style.css";

import {House} from "@/types";
import {slugify} from "@/app/utils/slugify";

export default function CasaIDpage() {
  const {slug} = useParams();
  const [house, setHouse] = useState<House | null>(null);

  useEffect(() => {
    const getHouse = async () => {
      const res = await axios.get("https://api-estudiovarq.iwebtecnology.com/houses");
      const houses = res.data.map((h: House) => ({
        ...h,
        slug: slugify(h.title),
      }));

      const found = houses.find((h: House) => h.slug === slug);

      setHouse(found || null);
    };

    getHouse();
  }, [slug]);

  if (!house) return <h1>Cargando...</h1>;

  // useEffect(() => {
  //   const lightbox = new PhotoSwipeLightbox({
  //     gallery: "#gallery",
  //     children: "a",
  //     pswpModule: PhotoSwipe,
  //     maxWidthToAnimate: 2000,
  //     zoom: true,
  //     showHideOpacity: true,
  //     wheelToZoom: false,
  //     imageClickAction: "close",
  //     padding: {top: 20, bottom: 20, left: 50, right: 50},
  //     bgOpacity: 0.8,
  //   });

  //   lightbox.init();
  // }, []);

  return (
    <main className="mx-5 mt-36 mb-10 md:mx-10 md:mt-32">
      <section className="flex flex-col items-center justify-around md:mb-10 md:flex-row md:gap-50">
        <div className="flex flex-col gap-2">
          <h1 className="text-primary text-center text-4xl font-bold md:text-5xl">
            {house && house.title}
          </h1>
          <small className="text-center text-gray-600 md:text-start">
            {house && house.houseType}
          </small>
        </div>
        <p className="text-md my-2 text-center md:my-5 md:text-start md:text-3xl">
          Diseñamos y construimos las mejores soluciones.
        </p>
      </section>
      <section className="mx-auto w-full columns-1 gap-4 md:w-3/4" id="gallery">
        {house &&
          house.images.map((image) => (
            // <a
            //   key={image}
            //   className="mb-4 block"
            //   data-pswp-aspect-ratio="cover"
            //   data-pswp-height="600"
            //   data-pswp-width="1000"
            //   href={image}
            // >
            <img
              key={image}
              alt={house.title}
              className="mx-auto my-4 h-full max-h-screen w-auto"
              loading="lazy"
              src={image}
            />
          ))}
      </section>
    </main>
  );
}
