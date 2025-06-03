// components/steps/FinalStep.tsx
interface StepProps {
  formData: {
    name: string;
    lastname: string;
    phone: string;
    email: string;
    address: string;
    zone: string;
    startDate: string;
    comments: string;
  };
  setFormData: (data: any) => void;
  prev: () => void;
}

function FinalStep({formData, setFormData, prev}: StepProps) {
  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="space-y-4">
      <p className="text-primary text-center text-2xl font-semibold">
        Completá tus datos y recibí los resultados en tu email y WhatsApp
      </p>
      <input
        className="w-full rounded border p-2"
        placeholder="Nombre*"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      <input
        className="w-full rounded border p-2"
        placeholder="Apellido*"
        value={formData.lastname}
        onChange={(e) => setFormData({...formData, lastname: e.target.value})}
      />
      <input
        className="w-full rounded border p-2"
        placeholder="Email*"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />
      <input
        className="w-full rounded border p-2"
        placeholder="Teléfono*"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
      />
      <input
        className="w-full rounded border p-2"
        placeholder="Ya tenés el terreno o casa donde vivís o quieras vivir*"
        value={formData.address}
        onChange={(e) => setFormData({...formData, address: e.target.value})}
      />
      <input
        className="w-full rounded border p-2"
        placeholder="¿En qué zona se encuentra?*"
        value={formData.zone}
        onChange={(e) => setFormData({...formData, zone: e.target.value})}
      />
      <input
        className="w-full rounded border p-2"
        placeholder="¿Cuándo te gustaria ponerte en marcha para iniciar este proyecto?*"
        value={formData.startDate}
        onChange={(e) => setFormData({...formData, startDate: e.target.value})}
      />
      <textarea
        className="w-full rounded border p-2"
        placeholder="¿Algo más que quieras comentarnos?"
        rows={4}
        value={formData.comments}
        onChange={(e) => setFormData({...formData, comments: e.target.value})}
      />
      <div className="flex justify-between">
        <button className="rounded bg-gray-300 px-4 py-2" onClick={prev}>
          Anterior
        </button>
        <button className="rounded bg-black px-4 py-2 text-white" onClick={handleSubmit}>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default FinalStep;
