"use client";

import type {House} from "@/types";

import {useEffect, useState, Suspense} from "react";
import {useParams} from "next/navigation";
import axios from "axios";

import {slugify} from "@/app/utils/slugify";

// ---------- util p/ suspender hasta que la imagen cargue ----------
const imgCache = new Map<
  string,
  {status: "pending" | "loaded" | "error"; promise?: Promise<void>}
>();

function ensureImage(src: string) {
  let entry = imgCache.get(src);

  if (!entry) {
    let resolve!: () => void;
    let reject!: (e: unknown) => void;
    const promise = new Promise<void>((res, rej) => {
      resolve = res;
      reject = rej;
    });

    entry = {status: "pending", promise};
    imgCache.set(src, entry);

    const img = new Image();

    img.onload = () => {
      entry!.status = "loaded";
      resolve();
    };
    img.onerror = (e) => {
      entry!.status = "error";
      reject(e);
    };
    img.src = src;
  }
  if (entry.status === "pending") throw entry.promise;
  if (entry.status === "error") throw new Error(`No se pudo cargar la imagen: ${src}`);
}

function ImageWithSuspense({
  src,
  alt,
  className,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}) {
  ensureImage(src);

  return <img alt={alt} className={className} loading={loading} src={src} />;
}

function ImageFallback() {
  return (
    <div className="h-[80vh] w-full animate-pulse rounded-xl bg-gray-200/80">
      <p className="my-auto text-center text-sm text-gray-600">Cargando...</p>
    </div>
  );
}

// -----------------------------------------------------------------

export default function CasaIDpage() {
  const {slug} = useParams<{slug: string}>();
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
            <Suspense key={image} fallback={<ImageFallback />}>
              <ImageWithSuspense
                alt={house.title}
                className="mx-auto my-4 h-full max-h-screen w-auto"
                loading="lazy"
                src={image}
              />
            </Suspense>
          ))}
      </section>
    </main>
  );
}
