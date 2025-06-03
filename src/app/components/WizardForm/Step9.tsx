interface StepProps {
  formData: {
    plants: string;
  };
  setFormData: (data: any) => void;
  next: () => void;
  prev: () => void;
}

function Step6({formData, setFormData, next, prev}: StepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value});
  };

  return (
    <div className="space-y-4">
      <p className="text-center text-lg font-semibold">¿Cuántos pisos?</p>
      <div className="flex justify-center gap-6">
        <div
          className={`flex w-96 cursor-pointer flex-col rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.plants === "" ? "border-gray-300" : ""
          }`}
        >
          <select name="plants" onChange={handleChange}>
            <option value="Planta baja">Planta baja</option>
            <option value="1 piso">1 piso</option>
            <option value="2 pisos">2 pisos</option>
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

export default Step6;
