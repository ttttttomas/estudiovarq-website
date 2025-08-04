"use client";
import { useState } from "react";

import Step1 from "../WizardForm/Step1";
import FinalStep from "../WizardForm/FinalStep";
import Step2 from "../WizardForm/Step2";
import Step3 from "../WizardForm/Step3";
import Step4 from "../WizardForm/Step4";
import Step5 from "../WizardForm/Step5";
import Step6 from "../WizardForm/Step6";
import Step7 from "../WizardForm/Step7";
import Step8 from "../WizardForm/Step8";
import Step9 from "../WizardForm/Step9";

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
    10: <FinalStep formData={formData} prev={prev} setFormData={setFormData} />,
  };

  return (
    <section className={`mx-auto mt-20 w-full max-w-5xl flex flex-col justify-center gap-5 rounded-xl ${step === 10 ? "md:h-auto" : "md:h-[70vh]"} bg-white p-6 shadow-sm shadow-black/30`}>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-primary text-4xl font-bold">
          ¡Imaginemos tu casa juntos!
        </h2>
        <h3 className="my-5">Empecemos:</h3>
      </div>
      <div className="mb-4 w-full rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-black"
          style={{ width: `${(step / 10) * 100}%` }}
        />
      </div>
      {steps[step]}
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
