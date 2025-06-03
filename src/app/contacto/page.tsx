"use client";
import {useState} from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    address: "",
    zone: "",
    startDate: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value});
  };

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value});
  };

  return (
    <main className="mx-auto my-52 flex w-full max-w-5xl items-start justify-center gap-20">
      <section className="flex w-1/2 flex-col gap-10">
        <h1 className="text-primary text-5xl font-bold">
          Podemos diseñar y construir tu casa para que tengas más momentos felices con tu familia
        </h1>
        <p className="text-2xl font-semibold text-gray-400">
          Arquitectos especializados en diseñar, remodelar y construir hogares para que habite la
          felicidad.
        </p>
      </section>
      <form className="flex w-1/2 flex-col gap-3" onSubmit={handleSubmit}>
        <label className="text-primary text-lg font-medium" htmlFor="nombre">
          Nombre Completo
        </label>
        <input
          className="w-full rounded-md border border-gray-300 px-5 py-2"
          id="nombre"
          name="nombre"
          type="text"
          onChange={onChange}
        />
        <label className="text-primary text-lg font-medium" htmlFor="telefono">
          Teléfono
        </label>
        <input
          className="w-full rounded-md border border-gray-300 px-5 py-2"
          id="nombre"
          name="telefono"
          type="text"
          onChange={onChange}
        />
        <label className="text-primary text-lg font-medium" htmlFor="email">
          Email
        </label>
        <input
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
          className="w-full rounded-md border border-gray-300 px-5 py-2"
          id="startDate"
          name="startDate"
          type="text"
          onChange={onChange}
        />

        <label className="text-primary text-lg font-medium" htmlFor="mensaje">
          Observaciones (cualquier cosa que quieras comentarnos va a ser de mucha ayuda)
        </label>
        <textarea
          className="w-full rounded-md border border-gray-300 px-5 py-2"
          id="mensaje"
          name="mensaje"
          rows={5}
          onChange={onChangeTextarea}
        />
        <button
          className="bg-primary w-full cursor-pointer rounded-md px-5 py-2 text-white"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}
