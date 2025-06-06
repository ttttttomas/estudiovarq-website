// import Link from "next/link";

export default function NewHousesPage() {
  return (
    <main className="items-center justify-center pt-32 md:h-[80vh] md:pt-52">
      <div className="flex flex-col items-center justify-center gap-20 pb-32 md:flex-row">
        <section className="flex w-full max-w-[550px] flex-col items-start justify-center gap-5 px-10 text-center md:w-1/2 md:px-0">
          <p className="text-primary text-light text-2xl">Nuevas construcciones</p>
          <h1 className="text-primary text-start text-xl font-semibold md:text-3xl">
            ¿Porque nuestras construcciones son ideales para las familias?
          </h1>
          <ul className="mt-5 flex flex-col justify-start gap-5">
            <li className="text-start">
              Porque nuestros proyectos nuevos se desarrollan escuchando a las familias y logrando
              identificar como viven cada integrante y en base a eso planificamos los espacios
              grupales e individuales dentro de la casa para lograr una armoniosa convivencia
              respetando los espacios de encuentro y los espacios privados.{" "}
            </li>
            <li className="text-start">
              Entendemos que teniendo familia el tiempo suele ser un problema y por eso nos ocupamos
              de crear tu casa para que tengas más momentos felices con ellos.
            </li>
            <li className="text-start">
              Esto lo hacemos ayudándote a elegir el diseño, la distribución, la jerarquía de los
              espacios, hasta entiendo que materiales te gustan, coordinando la entrega de los
              mismos, coordinando y dirigiendo la mano de obra para que la ejecución de las
              distintas tareas sea como se planifico.
            </li>
          </ul>
        </section>
        <section className="w-1/2 max-w-[600px]">
          <p className="font-bold">Solo nos invulocramos en Proyectos que:</p>
          <ul className="mt-5 flex flex-col gap-4">
            <li>⦁ Tienen mas de 80m2.</li>
            <li>⦁ Están en la zona de CABA o en el gran Bs.As.</li>
            <li>⦁ Estén próximos a construirse dentro de los próximos 6 meses o antes.</li>
            <li>⦁ Que sean proyectos familiares.</li>
            <li>
              ⦁ Estén comprometidos en ayudarnos a tomar decisiones en la etapa inicial para
              garantizar una buena planificación de todo el proyecto.{" "}
            </li>
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
