function Step7({formData, setFormData, next, prev}) {
  const selectOption = (option) => {
    setFormData({...formData, garage: option});
  };

  return (
    <div className="space-y-4">
      <p className="text-center text-lg font-semibold">Garage ¿para cuántos coches?</p>
      <div className="flex justify-center gap-6">
        <div
          className={`w-96 cursor-pointer rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.garage === "Ninguno" ? "border-black" : "border-gray-300"
          }`}
          onClick={() => selectOption("Ninguno")}
        >
          <img alt="Ninguno" className="mx-auto mb-2" src="/form/12.png" />
          Ninguno
        </div>
        <div
          className={`w-96 cursor-pointer rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.garage === "1 coche" ? "border-black" : "border-gray-300"
          }`}
          onClick={() => selectOption("1 coche")}
        >
          <img alt="1 coche" className="mx-auto mb-2" src="/form/13.png" />1 coche
        </div>
        <div
          className={`w-96 cursor-pointer rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.garage === "2 coches" ? "border-black" : "border-gray-300"
          }`}
          onClick={() => selectOption("2 coches")}
        >
          <img alt="2 coches" className="mx-auto mb-2" src="/form/14.png" />2 coches
        </div>
        <div
          className={`w-96 cursor-pointer rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.garage === "3 coches" ? "border-black" : "border-gray-300"
          }`}
          onClick={() => selectOption("3 coches")}
        >
          <img alt="3 coches" className="mx-auto mb-2" src="/form/15.png" />3 coches
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <button className="cursor-pointer rounded bg-gray-300 px-4 py-2" onClick={prev}>
          Anterior
        </button>
        <button className="cursor-pointer rounded bg-black px-4 py-2 text-white" onClick={next}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Step7;
