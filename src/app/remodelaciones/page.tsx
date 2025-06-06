export default function RemodelacionesPage() {
  return (
    <main className="mb-20 items-center justify-center pt-32 md:h-[80vh] md:pt-52">
      <div className="flex flex-col items-center justify-center gap-20 pb-32 md:flex-row">
        <section className="flex w-full flex-col items-start justify-center gap-5 px-10 text-center md:w-1/2 md:max-w-[550px]">
          <p className="text-primary text-light text-2xl">Remodelaciones</p>
          <h1 className="text-primary text-start text-2xl font-semibold md:text-3xl">
            ¿Por que nuestras remodelaciones son ideales para las familias?
          </h1>
          <ul className="mt-5 flex flex-col justify-start gap-5">
            <li className="text-start">
              Porque vamos a entender como viven y lo más importante, como quieren vivir en tu casa.
            </li>
            <li className="text-start">
              A partir de ahí vamos a re pensar y buscar mejoras para mejorarles la calidad de vida
              y al mismo tiempo para revalorizar la propiedad.
            </li>
            <li className="text-start">
              Nuestro objetivo es que la casa quede mas linda y moderna, que aumente la cantidad de
              luz que entra en tus espacios y por último que tu casa pase a ser tu lugar seguro.
            </li>
            <li className="text-start">
              En remodelaciones siempre buscamos incluir las últimas tendencias eh innovaciones para
              que el resultado sea superador y tu famila disfrute mas tu casa.
            </li>
          </ul>
        </section>
        <section className="flex w-1/2 max-w-[600px] flex-col">
          <p className="font-bold">¿En que proyectos nos sumamos?</p>
          <ul className="mt-5 flex flex-col gap-2">
            <li>⦁ Rediseño</li>
            <li>⦁ Ampliaciones</li>
            <li>⦁ Remodelaciones</li>
            <li>⦁ Redistribuciones</li>
            <li>⦁ Grandes adaptaciones</li>
            <li>⦁ Estén en la zona de CABA o en el gran Bs.As.</li>
          </ul>
          <p className="mt-12 font-bold">¿En que proyectos NO nos sumamos?</p>
          <ul className="mt-5 flex flex-col gap-4">
            <li>
              ⦁ NO hacemos mejoras leves, ej. Cambiar solo el piso. ej. Cambiar los cables de la
              instalación eléctrica
            </li>
            <li>⦁ No hacemos mantenimientos, ej. pintar la casa</li>
          </ul>
        </section>
      </div>
      {/* <section
      className="relative h-[200vh] bg-cover bg-center md:h-[50vh]"
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
            <p className="text-2xl font-bold">Nos ocupamos!</p>
          </div>
          <p>
            Por vos de todos los temas burocráticos y aburridos relacionados a temas legales en la
            municipalidad, barrio y demás entes gubernamentales para poder construir tu casa.
          </p>
          <Link
            className="hover:bg-primary mt-5 rounded-md border border-white px-6 py-2 transition-all"
            href="/contacto"
          >
            Escribinos
          </Link>
        </div>
        <div className="flex w-full flex-col items-center justify-start gap-4 border border-[#001F3D75] bg-[#001F3D75] px-10 py-12 text-white md:size-96">
          <div className="flex flex-col items-center gap-3">
            <p className="text-6xl font-bold">4</p>
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
    </section> */}
    </main>
  );
}
