import axios from "axios";
import {Suspense} from "react";

import HomeCard from "../components/HomeCard";
import WizardFormHouses from "../components/WizardFormHouses";
import {slugify} from "../utils/slugify";

import {House} from "@/types";

function CardFallback() {
  return (
    <div className="h-64 w-full animate-pulse rounded-xl bg-gray-200/70 text-black dark:bg-gray-800/40" />
  );
}

export default async function Casaspage() {
  const response = await axios.get("https://api-estudiovarq.iwebtecnology.com/houses");

  const houses = response.data.map((house: House) => ({
    ...house,
    slug: slugify(house.title),
  }));

  return (
    <main className="mt-40">
      <h1 className="text-primary mt-10 text-center text-3xl font-bold">
        Te mostramos algunas casas que podemos hacer!
      </h1>

      <section className="mx-5 my-20 flex flex-col items-center justify-center gap-5 md:mx-0 md:flex-row md:flex-wrap">
        <Suspense fallback={<CardFallback />}>
          <HomeCard house={houses[10]} />
        </Suspense>
        <Suspense fallback={<CardFallback />}>
          <HomeCard house={houses[9]} />
        </Suspense>
        <Suspense fallback={<CardFallback />}>
          <HomeCard house={houses[5]} />
        </Suspense>
        <Suspense fallback={<CardFallback />}>
          <HomeCard house={houses[2]} />
        </Suspense>
        <Suspense fallback={<CardFallback />}>
          <HomeCard house={houses[3]} />
        </Suspense>
        <Suspense fallback={<CardFallback />}>
          <HomeCard house={houses[1]} />
        </Suspense>
        <Suspense fallback={<CardFallback />}>
          <HomeCard house={houses[0]} />
        </Suspense>
        <Suspense fallback={<CardFallback />}>
          <HomeCard house={houses[6]} />
        </Suspense>
        <Suspense fallback={<CardFallback />}>
          <HomeCard house={houses[7]} />
        </Suspense>
        <Suspense fallback={<CardFallback />}>
          <HomeCard house={houses[11]} />
        </Suspense>
        <Suspense fallback={<CardFallback />}>
          <HomeCard house={houses[8]} />
        </Suspense>
        <Suspense fallback={<CardFallback />}>
          <HomeCard house={houses[4]} />
        </Suspense>
      </section>

      <section className="my-20">
        <WizardFormHouses />
      </section>
    </main>
  );
}
