'use client'
import { useM2 } from "@/app/context/M2Context";


function Step2({formData, setFormData, next, prev}) {
    const { addM2, totalsM2 } = useM2();

   const selectOption = (option, m2) => {
    setFormData({ ...formData, mainBedroom: option });
    addM2(m2);
  };

  return (
    <div className="space-y-4">
      <p className="text-center text-primary text-lg font-semibold">
        ¿Cómo te gustaría el dormitorio principal?
      </p>
      <div className="flex justify-center gap-6">
        <div
          className={`w-96 cursor-pointer rounded-lg border p-4 text-center hover:bg-gray-200 ${
            formData.mainBedroom === "Simple" ? "border-black bg-gray-200" : "border-gray-300"
          }`}
          onClick={() => {
            selectOption("Simple", 11.9);
          }}
        >
          <img alt="Simple" className="mx-auto mb-2" src="/form/4.png" />
          Simple
        </div>
        <div
          className={`w-96 cursor-pointer rounded-lg border p-4 text-center hover:bg-gray-200 ${
            formData.mainBedroom === "Con vestidor" ? "border-black bg-gray-200" : "border-gray-300"
          }`}
          onClick={() => {
            selectOption("Con vestidor", 19.6);
          }}
        >
          <img alt="Con isla" className="mx-auto mb-2" src="/form/5.png" />
          Con vestidor
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

export default Step2;
