import Link from "next/link";

import WizardForm from "./components/home/WizardForm";
import Slider from "./components/home/Slider";

export default async function HomePage() {
  return (
    <main className="mt-18 md:mt-0">
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat md:h-[85vh]"
        id="home"
        style={{backgroundImage: "url('./home.png')"}}
      >
        <div className="bg-primary h-full w-full opacity-[0.63]" />
        <div className="absolute top-0 right-0 bottom-0 z-10 flex max-w-[600px] flex-col items-start justify-center gap-5 text-white xl:right-[270px]">
          <h1 className="text-center text-4xl font-semibold md:text-start md:text-5xl">
            Podemos diseñar y construir tu casa para que tengas más momentos felices con tu familia
          </h1>
          <p className="text-center text-xl font-medium md:text-start md:text-2xl md:font-semibold">
            Arquitectos especializados en diseñar, remodelar y construir hogares felices.
          </p>
          <Link
            className="hover:bg-primary mx-auto rounded-md border border-white px-5 py-2 transition-all md:mx-0"
            href="/contacto"
          >
            Escribinos
          </Link>
        </div>
      </section>
      <WizardForm />
      <section
        className="mx-2 my-30 flex flex-col items-center justify-center gap-4 md:mx-0 md:flex-row md:items-start"
        id="grid"
      >
        <div
          className="relative h-[100vh] w-full bg-cover bg-center md:w-[413px]"
          style={{backgroundImage: "url('./home2.jpg')"}}
        >
          <div className="bg-primary flex h-full w-full flex-col opacity-[0.63]" />
          <div className="absolute top-40 right-0 bottom-0 px-14 text-white">
            <p className="text-start text-2xl font-light">
              Diseñamos y construimos las ultimas tendencias.
            </p>
            <p className="text-start text-7xl font-bold md:text-center">Nuestros servicios</p>
          </div>
          <img
            alt="circulo"
            className="absolute right-34 bottom-8 md:right-27"
            src="./ciruclo.png"
          />
        </div>

        <div className="flex flex-col gap-2 text-white md:w-[700px]">
          <div className="flex flex-col md:flex-row">
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
                <Link
                  className="hover:bg-primary w-max rounded-md border border-white px-5 py-2 transition-all"
                  href="/casas"
                >
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
          <div className="flex flex-col md:flex-row">
            <div
              className="relative h-[50vh] w-full bg-cover bg-center"
              style={{backgroundImage: "url('./home4.webp')"}}
            >
              <div className="flex h-full w-full flex-col bg-[#667978] opacity-[0.63]" />
              <div className="absolute top-40 right-0 bottom-0 left-0 flex flex-col gap-2 px-10 text-white">
                <p className="text-start text-lg font-light">Sos propietaria/o.</p>
                <p className="text-start text-4xl font-semibold">Remodelaciones</p>
                <Link
                  className="hover:bg-primary w-max rounded-md border border-white px-5 py-2 transition-all"
                  href="/casas"
                >
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
        className="relative h-[200vh] bg-cover bg-center md:h-[90vh]"
        id="boxs"
        style={{backgroundImage: "url('./home5.jpg')"}}
      >
        <div className="h-full w-full bg-[#676B87] opacity-[0.43]" />
        <div
          className="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center gap-5 md:flex-row"
          id="container"
        >
          <div className="flex flex-col items-center justify-between gap-4 border border-[#001F3D75] bg-[#001F3D75] px-10 py-12 text-white md:size-96">
            <div className="flex flex-col items-center gap-3">
              <p className="text-6xl font-bold">1</p>
              <p className="text-2xl font-bold">¡Te Escuchamos!</p>
            </div>
            <p>Este es el primer paso para conseguir tu casa</p>
            <p>
              Lo primero que vamos a hacer es escucharte para entender que necesidades tenes y como
              te gustaría vivir para poder sorprenderte con ideas que vayan con vos y tu familia,
              con tu vida familiar en casa
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-4 border border-[#001F3D75] bg-[#001F3D75] px-10 py-12 text-white md:size-96">
            <div className="flex flex-col items-center gap-3">
              <p className="text-6xl font-bold">2</p>
              <p className="text-2xl font-bold">¡Vizualizamos!</p>
            </div>
            <p>
              A partir de ahora es el momento de que sueñes y traigas todas las ideas que tengas en
              tu mente, así las combinamos con las nuestras y juntos construimos el diseño de tu
              casa
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-4 border border-[#001F3D75] bg-[#001F3D75] px-10 py-12 text-white md:size-96">
            <div className="flex flex-col items-center gap-3">
              <p className="text-6xl font-bold">3</p>
              <p className="text-2xl font-bold">¡Comenzamos!</p>
            </div>
            <p>
              Ahora que ya tenes todos los permisos podemos construir la casa de tus hijos y nos
              vamos a encargar de absolutamente todo para que puedan disfrutar en familia viendo
              cómo se construye tu casa
            </p>
            <Link
              className="hover:bg-primary mt-5 rounded-md border border-white px-6 py-2 transition-all"
              href="/contacto"
            >
              Escribinos
            </Link>
          </div>
        </div>
      </section>
      <section className="my-20" id="nuestras-casas">
        <div className="mx-auto my-20 flex flex-col items-center justify-center gap-5 md:flex-row">
          <h3 className="text-primary text-5xl font-bold md:text-6xl">Nuestras casas</h3>
          <p className="text-primary text-center text-2xl font-medium md:max-w-[600px] md:text-4xl">
            Diseñamos y construimos las mejores soluciones.
          </p>
        </div>
        <Slider />
      </section>
    </main>
  );
}
