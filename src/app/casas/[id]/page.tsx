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
<<<<<<< HEAD
    <main className="mx-5 mt-52 mb-10 md:mx-30">
      <section className="my-30 flex flex-col items-center justify-center gap-10 md:flex-row">
        <div>
          <h1 className="text-primary text-center text-5xl font-bold">{house && house.title}</h1>
          <small className="text-gray-600">{house && house.houseType}</small>
=======
    <main className="mx-5 mt-52 md:mx-30">
      <section className="my-30 flex flex-col justify-center gap-10 md:flex-row">
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="text-primary text-center text-5xl font-bold">{house && house.title}</h1>
          <small className="text-center text-gray-600">{house && house.houseType}</small>
>>>>>>> 32cbb3ff1125ef147edfe6c09fbcfb68906c6864
        </div>
        <p className="text-3xl">Diseñamos y construimos las mejores soluciones.</p>
      </section>
      <section className="my- grid-cols-[repeat(auto-fit, minmax(250px, 1fr))] mx-auto grid w-3/4 flex-col place-content-center place-items-center gap-2 md:grid-cols-2">
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
