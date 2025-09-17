import axios from "axios";

import HomeCard from "../components/HomeCard";
import WizardFormHouses from "../components/WizardFormHouses";
import {slugify} from "../utils/slugify";

import {House} from "@/types";

// import {House} from "@/types";

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
        <HomeCard house={houses[10]} />
        <HomeCard house={houses[9]} />
        <HomeCard house={houses[5]} />
        <HomeCard house={houses[2]} />
        <HomeCard house={houses[3]} />
        <HomeCard house={houses[1]} />
        <HomeCard house={houses[0]} />
        <HomeCard house={houses[6]} />
        <HomeCard house={houses[7]} />
        <HomeCard house={houses[11]} />
        <HomeCard house={houses[8]} />
        <HomeCard house={houses[4]} />
      </section>
      <section className="my-20">
        <WizardFormHouses />
      </section>
    </main>
  );
}
