// components/steps/Step2.tsx
interface StepProps {
  formData: {
    mainBedroom: string;
  };
  setFormData: (data: any) => void;
  next: () => void;
  prev: () => void;
}

function Step2({formData, setFormData, next, prev}: StepProps) {
  const selectOption = (option: string) => {
    setFormData({...formData, mainBedroom: option});
  };

  return (
    <div className="space-y-4">
      <p className="text-center text-lg font-semibold">
        ¿Cómo te gustaría el dormitorio principal?
      </p>
      <div className="flex justify-center gap-6">
        <div
          className={`w-96 cursor-pointer rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.mainBedroom === "Simple" ? "border-black" : "border-gray-300"
          }`}
          onClick={() => selectOption("Simple")}
        >
          <img alt="Simple" className="mx-auto mb-2" src="/form/4.png" />
          Simple
        </div>
        <div
          className={`w-96 cursor-pointer rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.mainBedroom === "Con vestidor" ? "border-black" : "border-gray-300"
          }`}
          onClick={() => selectOption("Con vestidor")}
        >
          <img alt="Con isla" className="mx-auto mb-2" src="/form/5.png" />
          Con vestidor
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

export default Step2;
