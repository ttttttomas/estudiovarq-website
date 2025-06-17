"use client";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {toast, Toaster} from "sonner";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    address: "",
    zone: "",
    startDate: "",
    comments: "",
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const onVerify = (token: string | null) => {
    if (token) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaVerified) {
      toast.error("Por favor, completa el captcha antes de enviar el formulario");

      return;
    }

    axios.post("https://api-estudiovarq.iwebtecnology.com/formContact", formData);
    toast.success("¡Formulario enviado!");
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  const API_KEY = "6LfYPWQrAAAAAAEInVbH-c4eHkt1iJZBYNbjze1k";

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value});
  };

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value});
  };

  return (
    <main className="mx-auto my-32 flex w-full max-w-6xl flex-col items-start justify-center gap-20 px-10 md:flex-row md:px-0">
      <Toaster richColors position="bottom-center" />
      <section className="flex w-full flex-col gap-10 md:w-1/2">
        <h1 className="text-primary text-5xl font-semibold">
          Podemos diseñar y construir tu casa para que tengas más momentos felices con tu familia
        </h1>
        <p className="text-2xl font-semibold text-gray-400">
          Arquitectos especializados en diseñar, remodelar y construir hogares para que habite la
          felicidad.
        </p>
      </section>
      <form className="flex w-full flex-col gap-2 md:w-1/2" onSubmit={handleSubmit}>
        <label className="text-primary text-lg font-medium" htmlFor="full_name">
          Nombre Completo
        </label>
        <input
          required
          className="w-full rounded-md border border-gray-300 px-5 py-2"
          id="full_name"
          name="full_name"
          type="text"
          onChange={onChange}
        />
        <label className="text-primary text-lg font-medium" htmlFor="phone">
          Teléfono
        </label>
        <input
          required
          className="w-full rounded-md border border-gray-300 px-5 py-2"
          id="phone"
          name="phone"
          type="text"
          onChange={onChange}
        />
        <label className="text-primary text-lg font-medium" htmlFor="email">
          Email
        </label>
        <input
          required
          className="w-full rounded-md border border-gray-300 px-5 py-2"
          id="email"
          name="email"
          type="email"
          onChange={onChange}
        />
        <label className="text-primary text-lg font-medium" htmlFor="address">
          ¿Ya tenes el terreno o casa donde vivas o quieras vivir ?
        </label>
        <input
          required
          className="w-full rounded-md border border-gray-300 px-5 py-2"
          id="address"
          name="address"
          type="text"
          onChange={onChange}
        />
        <label className="text-primary text-lg font-medium" htmlFor="zone">
          ¿En que zona se encuentra?
        </label>
        <input
          required
          className="w-full rounded-md border border-gray-300 px-5 py-2"
          id="zone"
          name="zone"
          type="text"
          onChange={onChange}
        />
        <label className="text-primary text-lg font-medium" htmlFor="startDate">
          ¿Cuándo te gustaría ponerte en marcha para iniciar este proyecto?
        </label>
        <input
          required
          className="w-full rounded-md border border-gray-300 px-5 py-2"
          id="startDate"
          name="startDate"
          type="text"
          onChange={onChange}
        />

        <label className="text-primary text-lg font-medium" htmlFor="comments">
          Observaciones (cualquier cosa que quieras comentarnos va a ser de mucha ayuda)
        </label>
        <textarea
          className="w-full rounded-md border border-gray-300 px-5 py-2"
          id="comments"
          name="comments"
          rows={5}
          onChange={onChangeTextarea}
        />
        <button
          className={`w-full cursor-pointer rounded-md px-5 py-2 text-white ${
            captchaVerified ? "bg-primary" : "cursor-not-allowed bg-gray-400"
          }`}
          disabled={!captchaVerified}
          type="submit"
        >
          Enviar
        </button>
        <ReCAPTCHA sitekey={API_KEY} size="normal" theme="light" onChange={onVerify} />
      </form>
    </main>
  );
}
