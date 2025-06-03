import Link from "next/link";

import WizardForm from "./components/home/WizardForm";

export default async function HomePage() {
  return (
    <main>
      <section
        className="relative h-[85vh] bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: "url('./home.png')"}}
      >
        <div className="bg-primary h-full w-full opacity-[0.63]" />
        <div className="absolute top-0 right-0 bottom-0 left-245 z-10 flex max-w-[600px] flex-col items-start justify-center gap-5 text-white">
          <h1 className="text-5xl font-semibold">
            Podemos diseñar y construir tu casa para que tengas más momentos felices con tu familia
          </h1>
          <p className="text-2xl font-semibold">
            Arquitectos especializados en diseñar, remodelar y construir hogares felices.
          </p>
          <Link className="rounded-md border border-white px-5 py-2" href="/contacto">
            Escribinos
          </Link>
        </div>
      </section>
      <WizardForm />
      <section className="my-30 flex items-start justify-center gap-4">
        <div
          className="relative h-[100vh] w-[413px] bg-cover bg-center"
          style={{backgroundImage: "url('./home2.jpg')"}}
        >
          <div className="bg-primary flex h-full w-full flex-col opacity-[0.63]" />
          <div className="absolute top-40 right-0 bottom-0 left-0 px-14 text-white">
            <p className="text-start text-2xl font-light">
              Diseñamos y construimos las ultimas tendencias.
            </p>
            <p className="text-center text-7xl font-bold">Nuestros servicios</p>
          </div>
          <img alt="" className="absolute right-27 bottom-8" src="./ciruclo.png" />
        </div>

        <div className="flex w-[700px] flex-col text-white">
          <div className="flex">
            <div
              className="relative h-[50vh] w-full bg-cover bg-center"
              style={{backgroundImage: "url('./home3.webp')"}}
            >
              <div className="bg-primary flex h-full w-full flex-col opacity-[0.53]" />
              <div className="absolute top-40 right-0 bottom-0 left-0 flex flex-col gap-2 px-10 text-white">
                <p className="text-start text-lg font-light">
                  Tenes un terreno y necesitas construir tu hogar.
                </p>
                <p className="text-start text-4xl font-semibold">Nuevas construcciones</p>
                <Link className="w-max rounded-md border border-white px-5 py-2" href="/">
                  Casas
                </Link>
              </div>
            </div>
            <div className="h-[50vh] w-full bg-[#667978] bg-cover bg-center">
              <p className="px-8 pt-16 font-semibold">
                Proyectamos y construimos casas pensadas en la convivencia familiar con el foco en
                aumentar los momentos de felicidad en tu familia.
              </p>
              <ul className="flex flex-col p-8">
                <li>Lo hacemos asi.</li>
                <li>Te escuchamos.</li>
                <li>La visualizamos.</li>
                <li>La autorizamos.</li>
                <li>Comenzamos.</li>
              </ul>
              <p className="px-8">
                Nos ocupamos de todo el proceso, para que mientras tu familia disfrute.
              </p>
            </div>
          </div>
          <div className="flex">
            <div
              className="relative h-[50vh] w-full bg-cover bg-center"
              style={{backgroundImage: "url('./home4.webp')"}}
            >
              <div className="flex h-full w-full flex-col bg-[#667978] opacity-[0.63]" />
              <div className="absolute top-40 right-0 bottom-0 left-0 flex flex-col gap-2 px-10 text-white">
                <p className="text-start text-lg font-light">Sos propietaria/o.</p>
                <p className="text-start text-4xl font-semibold">Remodelaciones</p>
                <Link className="w-max rounded-md border border-white px-5 py-2" href="/">
                  Casas
                </Link>
              </div>
            </div>
            <div className="bg-primary h-[50vh] w-full bg-cover bg-center">
              <p className="px-8 pt-16 font-semibold">
                Realizamos reformas estratégicas para potenciar el inmueble y mejorar la calidad de
                vida de los que habitan tu casa.
              </p>
              <ul className="flex flex-col p-8">
                <li>Cocinas</li>
                <li>Baños.</li>
                <li>Livings.</li>
                <li>Habitaciones.</li>
                <li>Espacios de entretenimiento.</li>
              </ul>
              <p className="px-8">Creamos momentos de felicidad, para que compartas en familia.</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative h-[90vh] bg-cover bg-center"
        style={{backgroundImage: "url('./home5.jpg')"}}
      >
        <div className="h-full w-full bg-[#676B87] opacity-[0.43]" />
        <div className="bg-primary absolute top-0">asddsa</div>
      </section>
    </main>
  );
}
