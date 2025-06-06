"use client";
import {useState} from "react";

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
    2: <Step2 formData={formData} next={next} prev={prev} setFormData={setFormData} />,
    3: <Step3 formData={formData} next={next} prev={prev} setFormData={setFormData} />,
    4: <Step4 formData={formData} next={next} prev={prev} setFormData={setFormData} />,
    5: <Step5 formData={formData} next={next} prev={prev} setFormData={setFormData} />,
    6: <Step6 formData={formData} next={next} prev={prev} setFormData={setFormData} />,
    7: <Step7 formData={formData} next={next} prev={prev} setFormData={setFormData} />,
    8: <Step8 formData={formData} next={next} prev={prev} setFormData={setFormData} />,
    9: <Step9 formData={formData} next={next} prev={prev} setFormData={setFormData} />,
    10: <FinalStep formData={formData} prev={prev} setFormData={setFormData} />,
  };

  return (
    <section className="mx-auto mt-20 w-full max-w-4xl rounded-xl bg-white p-6 text-black shadow-sm shadow-black/30">
      <h2 className="mb-4 text-center text-2xl font-bold">¡Imaginemos tu casa juntos!</h2>
      <div className="mb-4 h-2 w-full rounded-full bg-gray-200">
        <div className="h-2 rounded-full bg-black" style={{width: `${(step / 10) * 100}%`}} />
      </div>
      {steps[step]}
    </section>
  );
}

export default WizardForm;
