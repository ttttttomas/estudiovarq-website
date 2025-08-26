"use client";
import { useState } from "react";

import Step1 from "../components/WizardForm/Step1";
import FinalStep2 from "../components/WizardForm/FinalStep2";
import Step2 from "../components/WizardForm/Step2";
import Step3 from "../components/WizardForm/Step3";
import Step4 from "../components/WizardForm/Step4";
import Step5 from "../components/WizardForm/Step5";
import Step6 from "../components/WizardForm/Step6";
import Step7 from "../components/WizardForm/Step7";
import Step8 from "../components/WizardForm/Step8";
import Step9 from "../components/WizardForm/Step9";

function WizardForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    mainBedroom: "",
    diningRoom: "",
    livingRoom: "",
    plants: "Planta Baja",
    garage: "",
    anotherPlace: "",
    bathroom: "",
    secondBedroom: "",
    kitchen: "",
    name: "",
    email: "",
    phone: "",
    zone: "",
    startDate: "",
    comments: "",
    lastName: "",
    address: "",
  });

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);

  const steps = {
    1: <Step1 formData={formData} next={next} setFormData={setFormData} />,
    2: (
      <Step2
        formData={formData}
        next={next}
        prev={prev}
        setFormData={setFormData}
      />
    ),
    3: (
      <Step3
        formData={formData}
        next={next}
        prev={prev}
        setFormData={setFormData}
      />
    ),
    4: (
      <Step4
        formData={formData}
        next={next}
        prev={prev}
        setFormData={setFormData}
      />
    ),
    5: (
      <Step5
        formData={formData}
        next={next}
        prev={prev}
        setFormData={setFormData}
      />
    ),
    6: (
      <Step6
        formData={formData}
        next={next}
        prev={prev}
        setFormData={setFormData}
      />
    ),
    7: (
      <Step7
        formData={formData}
        next={next}
        prev={prev}
        setFormData={setFormData}
      />
    ),
    8: (
      <Step8
        formData={formData}
        next={next}
        prev={prev}
        setFormData={setFormData}
      />
    ),
    9: (
      <Step9
        formData={formData}
        next={next}
        prev={prev}
        setFormData={setFormData}
      />
    ),
    10: (
      <FinalStep2 formData={formData} prev={prev} setFormData={setFormData} />
    ),
  };

  return (
     <section className={`mx-auto mb-20 mt-8 w-full max-w-5xl flex flex-col h-[100vh] md:h-auto justify-between gap-5 rounded-xl  bg-white p-6 md:shadow-sm shadow-black/30`}>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-primary md:text-4xl text-2xl font-bold">
          ¡Imaginemos tu casa juntos!
        </h2>
        <h3 className="my-5">Empecemos:</h3>
      <div className="mb-4 w-full rounded-full">
        <p className="text-center font-bold">{step/10 * 100}%</p>
        <div
          className="h-2 rounded-full bg-black"
          style={{ width: `${(step / 10) * 100}%` }}
        />
      </div>
      <div className="w-full">

      {steps[step]}
      </div>
      </div>
      {/* <p className="text-center pt-5 text-primary text-lg font-normal">
        Este formulario esta patentado por Estudio VArq – Arquitectura. Todos
        los derechos de su uso son reservados. Queda prohibido su copia o
        comercializacion. En caso de infraccion se actuara legalmente ante la
        justicia
      </p> */}
    </section>
  );
}

export default WizardForm;
