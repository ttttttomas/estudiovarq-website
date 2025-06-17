'use client'
import { useM2 } from "@/app/context/M2Context";

function Step5({formData, setFormData, next, prev}) {
  const { addM2 } = useM2();

  const m2Data = {
    "6 personas": 13,
    "8 personas": 18,
    "10 personas": 20
  };

  const handleChange = (e) => {

    const {name, value} = e.target;

    const newM2 = m2Data[value] || 0;
    setFormData({...formData, [name]: value});
    addM2(newM2);
  };

  return (
    <div className="space-y-4">
      <p className="text-center text-lg font-semibold">Comedor, ¿para cuántas personas?</p>
      <div className="flex justify-center gap-6">
        <div
          className={`flex w-96 cursor-pointer flex-col rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.diningRoom === "" ? "border-gray-300" : ""
          }`}
        >
          <select name="diningRoom" onChange={handleChange}>
            <option value="Ninguno">Ninguno</option>
            <option value="6 personas">6 personas</option>
            <option value="8 personas">8 personas</option>
            <option value="10 personas">10 personas</option>
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

export default Step5;
