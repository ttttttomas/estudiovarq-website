import axios from "axios";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { useM2 } from "@/app/context/M2Context";

function FinalStep2({formData, setFormData, prev}) {
  const { totalsM2 } = useM2();
  const router = useRouter();
  const dataToSend = {
    ...formData,
    totalsM2,
  };
  
  const handleSubmit = () => {
    axios.post("https://api-estudiovarq.iwebtecnology.com/wizardFormHouses", dataToSend);    
    toast.success("¡Formulario enviado!");
    setTimeout(() => {
      router.push("/gracias-cotizacion-calculadora");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Toaster richColors position="bottom-center" />
      <p className="text-primary text-center text-2xl font-semibold">
        Completá tus datos y recibí los resultados en tu email
      </p>
      <input
        required={true}
        className="w-full rounded border-gray-200 border p-2"
        placeholder="Nombre*"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      <input
        required={true}
        className="w-full rounded border-gray-200 border p-2"
        placeholder="Apellido*"
        value={formData.lastName}
        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
      />
      <input
        required={true}
        className="w-full rounded border-gray-200 border p-2"
        placeholder="Email*"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />
      <input
        required={true}
        className="w-full rounded border-gray-200 border p-2"
        placeholder="Teléfono*"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
      />
      <input
        required={true}
        className="w-full rounded border-gray-200 border p-2"
        placeholder="Ya tenés el terreno o casa donde vivís o quieras vivir*"
        value={formData.address}
        onChange={(e) => setFormData({...formData, address: e.target.value})}
      />
      <input
        required={true}
        className="w-full rounded border-gray-200 border p-2"
        placeholder="¿En qué zona se encuentra?*"
        value={formData.zone}
        onChange={(e) => setFormData({...formData, zone: e.target.value})}
      />
      <input
        required={true}
        className="w-full rounded border-gray-200 border p-2"
        placeholder="¿Cuándo te gustaria ponerte en marcha para iniciar este proyecto?*"
        value={formData.startDate}
        onChange={(e) => setFormData({...formData, startDate: e.target.value})}
      />
      <textarea
        className="w-full rounded border-gray-200 border p-2"
        placeholder="¿Algo más que quieras comentarnos?"
        rows={4}
        value={formData.comments}
        onChange={(e) => setFormData({...formData, comments: e.target.value})}
      />
      <div className="flex justify-between">
        <button className="cursor-pointer rounded bg-gray-300 px-4 py-2" onClick={prev}>
          Anterior
        </button>
        <button
          className="cursor-pointer rounded bg-black px-4 py-2 text-white"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

export default FinalStep2;
