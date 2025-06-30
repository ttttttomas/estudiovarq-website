"use client";

import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import axios from "axios";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";

import "photoswipe/style.css";

import {House} from "@/types";

export default function CasaIDpage() {
  const {id} = useParams();
  const [house, setHouse] = useState<House>();

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      pswpModule: PhotoSwipe,
      maxWidthToAnimate: 800,
      zoom: false,
      wheelToZoom: false,
      imageClickAction: "close",
      padding: {top: 20, bottom: 20, left: 50, right: 50},
      bgOpacity: 0.8,
    });

    lightbox.init();
  }, []);

  useEffect(() => {
    const getHouse = async () => {
      const response = await axios.get(`https://api-estudiovarq.iwebtecnology.com/houses/${id}`);

      setHouse(response.data);
    };

    getHouse();
  }, [id]);

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
      <section className="mx-auto columns-1 gap-4 md:w-3/4 md:columns-2 lg:columns-3" id="gallery">
        {house &&
          house.images.map((image) => (
            <a
              key={image}
              className="mb-4 block"
              data-pswp-height="800"
              data-pswp-width="1200"
              href={image}
            >
              <img
                alt={house.title}
                className="w-full break-inside-avoid object-cover"
                src={image}
              />
            </a>
          ))}
      </section>
    </main>
  );
}
