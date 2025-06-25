export default function Nosotrospage() {
  return (
    <main className="text-primary mt-40 px-5 md:px-30">
      <section>
        <p className="text-md text-center text-gray-500 md:text-start">Acerca de</p>
        <h1 className="mt-3 text-center text-5xl font-semibold md:text-start">Estudio VArq</h1>
      </section>
      <section className="my-10 flex flex-col items-center justify-center gap-6 md:flex-row">
        <img alt="" className="md:w-1/2" src="/nosotros.jpg" />
        <ul className="flex h-full w-full flex-col justify-between gap-10 md:w-1/2">
          <li>
            Somos <b>Gabriela y Sebastián</b> fundamos <b>Estudio VArq</b> para resolver de forma
            más concreta el problema de las familias a la hora de decidir donde y como vivir.
          </li>
          <li>
            Gabriela se formó en Italia liderando proyecto privados y públicos en colaboración con
            otros estudios de arquitectura e ingeniería, y Sebastián se dedica al diseño y
            fabricación de mobiliario de cocina y dormitorios hace más de 20 años.{" "}
          </li>
          <li>
            Decidimos crear <b>Estudio VArq</b> para enfocarnos en la construcción y remodelación de
            casas familiares priorizando generar la máxima armonía y felicidad en todos los
            espacios.
          </li>
          <li>
            Actualmente, las familias están transitando cambios profundos en relación con el lugar
            donde viven y lo toman como una prioridad ¿Esta casa tiene espacios de disfrute
            familiar? ¿La cocina invita a compartir momentos día a día? ¿Todos tenemos los espacio
            privado que necesitamos? ¿La convivencia con los baños que tenemos es cómoda?
          </li>
          <li>Si estás en este proceso, de querer construir tu casa, ¡escribinos!</li>
          <b className="text-center text-sm md:text-start md:text-lg">
            En VArq vamos a estar felices de poder ayudarte.
          </b>
        </ul>
      </section>
    </main>
  );
}
