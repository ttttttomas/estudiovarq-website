"use client";

import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import axios from "axios";

import {House} from "@/types";

export default function CasaIDpage() {
  const {id} = useParams();
  const [house, setHouse] = useState<House>();

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
      <section className="grid-cols-[repeat(auto-fill, minmax(250px, 1fr))] mx-auto grid flex-col place-content-center place-items-center gap-2 md:w-3/4 md:grid-cols-2">
        {house &&
          house.images.map((image) => (
            <img
              key={image}
              alt={house.title}
              className="block h-auto w-full object-cover"
              src={image}
            />
          ))}
      </section>
    </main>
  );
}
