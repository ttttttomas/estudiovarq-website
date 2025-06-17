'use client'
import { useM2 } from "@/app/context/M2Context";


function Step6({formData, setFormData, next, prev}) {
  const { addM2 } = useM2();
  const m2Data = {
    "Planta baja": 0,
    "1 piso": 6,
    "2 pisos": 12
  };

  const handleChange = (e) => {

    const {name, value} = e.target;

    const newM2 = m2Data[value] || 0;
    setFormData({...formData, [name]: value});
    addM2(newM2);
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

export default Step6;
