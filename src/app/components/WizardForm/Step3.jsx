'use client'
import { useM2 } from "@/app/context/M2Context";
import { useRef } from "react";

function Step3({ formData, setFormData, next, prev }) { 
  const { addM2 } = useM2();
   const prevValues = useRef({
    one: 0,
    two: 0,
    three: 0,
  });

  const m2Data = {
    "1cama/Uno": 10,
    "1cama/Dos": 22,
    "1cama/Tres": 34,

    "2camas/Uno": 18,
    "2camas/Dos": 36,
    "2camas/Tres": 54,
    "2camas/Cuatro": 72,

    "3camas/Uno": 20,
    "3camas/Dos": 44,
    "3camas/Tres": 65,
  };

  const handleChange = (key, e) => {
    const value = e.target.value;

    const newM2 = m2Data[value] || 0;
    const prevM2 = prevValues.current[key] || 0;

    prevValues.current[key] = newM2;
    console.log(newM2);
    
    setFormData({
      ...formData,
      secondBedroom: value,
    });
    addM2(newM2);

    console.log(formData);
    
  };

  return (
    <div className="space-y-4">
      <p className="text-center text-lg font-semibold">
        ¿Y los dormitorios secundarios?
      </p>
       <div className="flex justify-center gap-6">
        {/* De 1 cama */}
        <div
          className={`flex w-64 cursor-pointer flex-col rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.one === "1cama" ? "border-black" : "border-gray-300"
          }`}
        >
          <p>De 1 cama</p>
          <img alt="de 1 cama" className="mx-auto mb-2" src="/form/6.png" />
          <select
            name="one"
            onChange={(e) => handleChange("one", e)}
            defaultValue=""
            className="border mt-2 p-1 rounded"
          >
            <option value="">Ninguno</option>
            <option value="1cama/Uno">Uno</option>
            <option value="1cama/Dos">Dos</option>
            <option value="1cama/Tres">Tres</option>
          </select>
        </div>

        {/* De 2 camas */}
        <div
          className={`flex w-64 cursor-pointer flex-col rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.two === "2camas" ? "border-black" : "border-gray-300"
          }`}
        >
          <p>De 2 camas</p>
          <img alt="de 2 camas" className="mx-auto mb-2" src="/form/7.png" />
          <select
            name="two"
            onChange={(e) => handleChange("two", e)}
            defaultValue=""
            className="border mt-2 p-1 rounded"
          >
            <option value="">Ninguno</option>
            <option value="2camas/Uno">Uno</option>
            <option value="2camas/Dos">Dos</option>
            <option value="2camas/Tres">Tres</option>
            <option value="2camas/Cuatro">Cuatro</option>
          </select>
        </div>

        {/* De 3 camas */}
        <div
          className={`flex w-64 cursor-pointer flex-col rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.three === "3camas" ? "border-black" : "border-gray-300"
          }`}
        >
          <p>De 3 camas</p>
          <img alt="de 3 camas" className="mx-auto mb-2" src="/form/8.png" />
          <select
            name="three"
            onChange={(e) => handleChange("three", e)}
            defaultValue=""
            className="border mt-2 p-1 rounded"
          >
            <option value="">Ninguno</option>
            <option value="3camas/Uno">Uno</option>
            <option value="3camas/Dos">Dos</option>
            <option value="3camas/Tres">Tres</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          className="cursor-pointer rounded bg-gray-300 px-4 py-2"
          onClick={prev}
        >
          Anterior
        </button>
        <button
          className="cursor-pointer rounded bg-black px-4 py-2 text-white"
          onClick={next}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Step3;
