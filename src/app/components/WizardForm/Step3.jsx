function Step3({formData, setFormData, next, prev}) {
  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value});
  };

  return (
    <div className="space-y-4">
      <p className="text-center text-lg font-semibold">¿Y los dormitorios secundarios?</p>
      <div className="flex justify-center gap-6">
        <div
          className={`flex w-96 cursor-pointer flex-col rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.secondBedroom === "De 1 cama" ? "border-black" : "border-gray-300"
          }`}
        >
          <p> De 1 cama</p>
          <img alt="de 1 cama" className="mx-auto mb-2" src="/form/6.png" />
          <select name="secondBedroom" onChange={handleChange}>
            <option value="Ninguno">Ninguno</option>
            <option value="1cama/Uno">Uno</option>
            <option value="1cama/Dos">Dos</option>
            <option value="1cama/Tres">Tres</option>
          </select>
        </div>
        <div
          className={`flex w-96 cursor-pointer flex-col rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.secondBedroom === "De 2 camas" ? "border-black" : "border-gray-300"
          }`}
        >
          <p> De 2 camas</p>
          <img alt="Con 2 camas" className="mx-auto mb-2" src="/form/7.png" />
          <select name="secondBedroom" onChange={handleChange}>
            <option value="Ninguno">Ninguno</option>
            <option value="2camas/Uno">Uno</option>
            <option value="2camas/Dos">Dos</option>
            <option value="2camas/Tres">Tres</option>
          </select>
        </div>
        <div
          className={`flex w-96 cursor-pointer flex-col rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.secondBedroom === "De 3 camas" ? "border-black" : "border-gray-300"
          }`}
        >
          <p> De 3 camas</p>
          <img alt="De 3 camas" className="mx-auto mb-2" src="/form/8.png" />
          <select name="secondBedroom" onChange={handleChange}>
            <option value="Ninguno">Ninguno</option>
            <option value="3camas/Uno">Uno</option>
            <option value="3camas/Dos">Dos</option>
            <option value="3camas/Tres">Tres</option>
          </select>
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

export default Step3;
