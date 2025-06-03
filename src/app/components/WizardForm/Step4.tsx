interface StepProps {
  formData: {
    bathroom: string;
  };
  setFormData: (data: any) => void;
  next: () => void;
  prev: () => void;
}

function Step4({formData, setFormData, next, prev}: StepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value});
  };

  return (
    <div className="space-y-4">
      <p className="text-center text-lg font-semibold">¿Cuántos baños necesitas?</p>
      <div className="flex justify-center gap-6">
        <div
          className={`flex w-96 cursor-pointer flex-col rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.bathroom === "Toilette" ? "border-black" : ""
          }`}
        >
          <p> Toilette</p>
          <img alt="Toilette" className="mx-auto mb-2" src="/form/9.png" />
          <select name="bathroom" onChange={handleChange}>
            <option value="Ninguno">Ninguno</option>
            <option value="1/Toilette">Uno</option>
            <option value="2/Toilette">Dos</option>
            <option value="3/Toilette">Tres</option>
          </select>
        </div>
        <div
          className={`flex w-96 cursor-pointer flex-col rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.bathroom === "Baño simple" ? "border-black" : ""
          }`}
        >
          <p>Baño simple</p>
          <img alt="Baño simple" className="mx-auto mb-2" src="/form/10.png" />
          <select name="bathroom" onChange={handleChange}>
            <option value="Ninguno">Ninguno</option>
            <option value="1/simple">Uno</option>
            <option value="2/simple">Dos</option>
            <option value="3/simple">Tres</option>
          </select>
        </div>
        <div
          className={`flex w-96 cursor-pointer flex-col rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.bathroom === "Con antebaño" ? "border-black" : ""
          }`}
        >
          <p> Con antebaño</p>
          <img alt="Con antebaño" className="mx-auto mb-2" src="/form/11.png" />
          <select name="bathroom" onChange={handleChange}>
            <option value="Ninguno">Ninguno</option>
            <option value="1/antebaño">Uno</option>
            <option value="2/antebaño">Dos</option>
            <option value="3/antebaño">Tres</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <button className="rounded bg-gray-300 px-4 py-2" onClick={prev}>
          Anterior
        </button>
        <button className="rounded bg-black px-4 py-2 text-white" onClick={next}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Step4;
