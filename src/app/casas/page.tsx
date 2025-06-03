import HomeCard from "../components/HomeCard";

export default function Casaspage() {
  return (
    <main className="mt-30">
      <h1 className="text-primary mt-10 text-center text-3xl font-bold">
        Te mostramos algunas casas que podemos hacer!
      </h1>
      <section className="mx-5 my-20 flex flex-col items-center justify-center gap-5 md:mx-0 md:flex-row md:flex-wrap">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </section>
    </main>
  );
}
