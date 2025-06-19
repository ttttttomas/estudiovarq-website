export default function CalculadoraGraciasPage() {
  return (
    <main
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      id="home"
      style={{backgroundImage: "url('/gracias.jpg')"}}
    >
      <div className="h-full w-full bg-black opacity-[0.63]" />
      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 flex w-full flex-col items-center justify-center gap-5 text-white">
        <h1 className="text-5xl md:text-7xl">Gracias!</h1>
        <p>Por contactarte con EstudioVarq. Te responderemos cuanto antes sea posible.</p>
      </div>
    </main>
  );
}
