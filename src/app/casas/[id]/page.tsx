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
    <main className="mx-5 mt-52 md:mx-30">
      <section className="my-30 flex flex-col gap-10 md:flex-row">
        <div>
          <h1 className="text-primary text-5xl font-bold">{house && house.title}</h1>
          <small className="text-gray-600">{house && house.houseType}</small>
        </div>
        <p className="text-3xl">Diseñamos y construimos las mejores soluciones.</p>
      </section>
      <section className="mx-auto my-20 grid w-3/4 grid-cols-1 flex-col place-content-center place-items-center gap-5 md:grid-cols-2">
        {house &&
          house.images.map((image) => (
            <img key={image} alt={house.title} className="aspect-auto object-contain" src={image} />
          ))}
      </section>
    </main>
  );
}
