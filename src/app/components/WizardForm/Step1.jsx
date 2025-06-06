function Step1({formData, setFormData, next}) {
  const selectOption = (option) => {
    setFormData({...formData, kitchen: option});
  };

  return (
    <div className="space-y-4">
      <p className="text-center text-lg font-semibold">¿Qué tipo de cocina te gusta más?</p>
      <div className="flex justify-center gap-6">
        <div
          className={`w-96 cursor-pointer rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.kitchen === "Simple" ? "border-black" : "border-gray-300"
          }`}
          onClick={() => selectOption("Simple")}
        >
          <img alt="Simple" className="mx-auto mb-2" src="/form/1.png" />
          Simple
        </div>
        <div
          className={`w-96 cursor-pointer rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.kitchen === "Con isla" ? "border-black" : "border-gray-300"
          }`}
          onClick={() => selectOption("Con isla")}
        >
          <img alt="Con isla" className="mx-auto mb-2" src="/form/2.png" />
          Con isla
        </div>
        <div
          className={`w-96 cursor-pointer rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.kitchen === "Con comedor" ? "border-black" : "border-gray-300"
          }`}
          onClick={() => selectOption("Con comedor")}
        >
          <img alt="Con comedor" className="mx-auto mb-2" src="/form/3.png" />
          Con comedor
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <button className="rounded bg-gray-200 px-4 py-2 text-white">Anterior</button>
        <button className="cursor-pointer rounded bg-black px-4 py-2 text-white" onClick={next}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Step1;
