'use client'
import { useM2 } from "@/app/context/M2Context";
import { useRef } from "react";

function Step4({formData, setFormData, next, prev}) {
  const { addM2 } = useM2();
  const prevValues = useRef({
    one: 0,
    two: 0,
    three: 0,
  });
  const m2Data = {
    "1/Toilette": 2.1,
    "2/Toilette": 4.2,
    "3/Toilette": 6.3,
    "1/simple": 4.32,
    "2/simple": 8.64,
    "3/simple": 12.96,
    "1/antebaño": 8.64,
    "2/antebaño": 17.28,
    "3/antebaño": 25.92,
  };
    const handleChange = (key, e) => {
    const value = e.target.value;

    const newM2 = m2Data[value] || 0;
    const prevM2 = prevValues.current[key] || 0;

    prevValues.current[key] = newM2;
    
    setFormData({
      ...formData,
      bathroom: value,
    });
    addM2(newM2);    
  };

  return (
    <div className="space-y-4">
      <p className="text-center text-primary text-lg font-semibold">¿Cuántos baños necesitas?</p>
      <div className="flex md:flex-nowrap flex-wrap justify-center gap-1 md:gap-6">
        <div
          className={`flex w-[45%] min-w-[140px] cursor-pointer flex-col rounded-lg border p-4 text-center hover:bg-gray-100 ${
            !formData.bathroom === "Toilette" ? " " : ""
          }`}
        >
          <p> Toilette</p>
          <img alt="Toilette" className="mx-auto mb-2" src="/form/10.png" />
          <select name="bathroom" onChange={(e) => handleChange("one", e)}>
            <option value="Ninguno">Ninguno</option>
            <option value="1/Toilette">Uno</option>
            <option value="2/Toilette">Dos</option>
            <option value="3/Toilette">Tres</option>
          </select>
        </div>
        <div
          className={`flex w-[45%] min-w-[140px] cursor-pointer flex-col rounded-lg border p-4 text-center hover:bg-gray-100 ${
            !formData.bathroom === "Baño simple" ? "border-black" : ""
          }`}
        >
          <p>Baño simple</p>
          <img alt="Baño simple" className="mx-auto md:h-48 mb-2" src="/form/9.png" />
          <select name="bathroom"  onChange={(e) => handleChange("two", e)}>
            <option value="Ninguno">Ninguno</option>
            <option value="1/simple">Uno</option>
            <option value="2/simple">Dos</option>
            <option value="3/simple">Tres</option>
          </select>
        </div>
        <div
          className={`flex w-[45%] min-w-[140px] cursor-pointer flex-col rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.bathroom === "Con antebaño" ? "border-gray-300" : ""
          }`}
        >
          <p> Con antebaño</p>
          <img alt="Con antebaño" className="mx-auto mb-2" src="/form/11.png" />
          <select name="bathroom"  onChange={(e) => handleChange("three", e)}>
            <option value="Ninguno">Ninguno</option>
            <option value="1/antebaño">Uno</option>
            <option value="2/antebaño">Dos</option>
            <option value="3/antebaño">Tres</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between md:pt-4">
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

export default Step4;
