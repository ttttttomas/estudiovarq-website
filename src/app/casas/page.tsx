import axios from "axios";

import HomeCard from "../components/HomeCard";
import WizardFormHouses from "../components/WizardFormHouses";

import {House} from "@/types";

export default async function Casaspage() {
  const response = await axios.get("https://api-estudiovarq.iwebtecnology.com/houses");

  const houses = response.data;

  return (
    <main className="mt-30">
      <h1 className="text-primary mt-10 text-center text-3xl font-bold">
        Te mostramos algunas casas que podemos hacer!
      </h1>
      <section className="mx-5 my-20 flex flex-col items-center justify-center gap-5 md:mx-0 md:flex-row md:flex-wrap">
        {houses.map((house: House) => (
          <HomeCard key={house.id} house={house} />
        ))}
      </section>
      <section className="my-20">
        <WizardFormHouses />
      </section>
    </main>
  );
}
