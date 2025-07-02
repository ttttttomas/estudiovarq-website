'use client'
import { useM2 } from "@/app/context/M2Context";

function Step8({formData, setFormData, next, prev}) {
  const { addM2 } = useM2();

  const selectOption = (option, m2) => {
    // Convertir el string actual a array para manipulación
    const currentPlaces = formData.anotherPlace ? formData.anotherPlace.split(", ") : [];
    
    // Buscar si la opción ya está seleccionada
    const isSelected = currentPlaces.includes(option);
    
    let newPlaces;
    if (isSelected) {
      // Si ya está seleccionada, la removemos y restamos los m2
      newPlaces = currentPlaces.filter(place => place !== option);
      addM2(-m2); // Restamos los m2
    } else {
      // Si no está seleccionada, la agregamos y sumamos los m2
      newPlaces = [...currentPlaces, option];
      addM2(m2); // Sumamos los m2
    }
    
    // Convertir el array de nuevo a string
    const newPlacesString = newPlaces.join(", ");
    
    setFormData({
      ...formData,
      anotherPlace: newPlacesString,
    });
  };
  return (
    <div className="space-y-4">
      <p className="text-center text-primary text-lg font-semibold">¿Qué otros ambientes te gustarían?</p>
      <div className="flex md:flex-nowrap flex-wrap justify-center gap-6">
        <div
          className={`w-[45%] min-w-[140px] cursor-pointer rounded-lg border p-4 text-center hover:bg-gray-200 ${
            formData.anotherPlace?.includes("Estudio") ? "border-black bg-gray-200" : "border-gray-300"
          }`}
          onClick={() => selectOption("Estudio", 10)}
        >
          <img alt="Estudio" className="mx-auto mb-2" src="/form/16.png" />
          Estudio
        </div>
        <div
          className={`w-[45%] min-w-[140px] cursor-pointer rounded-lg border p-4 text-center hover:bg-gray-200 ${
            formData.anotherPlace?.includes("Deposito pequeño") ? "border-black bg-gray-200" : "border-gray-300"
          }`}
          onClick={() => selectOption("Deposito pequeño", 8)}
        >
          <img alt="Deposito pequeño" className="mx-auto mb-2" src="/form/17.png" />
          Deposito pequeño
        </div>
        <div
          className={`w-[45%] min-w-[140px] cursor-pointer rounded-lg border p-4 text-center hover:bg-gray-200 ${
            formData.anotherPlace?.includes("Lavadero") ? "border-black bg-gray-200" : "border-gray-300"
          }`}
          onClick={() => selectOption("Lavadero", 6)}
        >
          <img alt="Lavadero" className="mx-auto mb-2" src="/form/18.png" />
          Lavadero
        </div>
        <div
          className={`w-[45%] min-w-[140px] cursor-pointer rounded-lg border p-4 text-center hover:bg-gray-200 ${
            formData.anotherPlace?.includes("Playroom") ? "border-black bg-gray-200" : "border-gray-300"
          }`}
          onClick={() => selectOption("Playroom", 10)}
        >
          <img alt="Playroom" className="mx-auto mb-2" src="/form/19.png" />
          Playroom
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

export default Step8;
