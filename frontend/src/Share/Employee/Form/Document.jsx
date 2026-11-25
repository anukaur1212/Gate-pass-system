import {
  ChartNoAxesCombined,
  UserRound,
  IdCard,
  GraduationCap,
  BriefcaseBusiness,
  Award,
  FileBadge,
  NotepadText,
  Certificate
} from 'lucide-react';
import React, { useState } from 'react'
import DocumentDetail from './DocumentDetail';
import PerformanceCertificate from './PerformanceCertificate';

const Document = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const DocSteps = [
    { title: "Performance", icon: ChartNoAxesCombined, components: <DocumentDetail /> },
    { title: "Photo", icon: UserRound, components: <DocumentDetail /> },
    { title: "Aadhar Card", icon: IdCard, components: <DocumentDetail /> },
    { title: "Previous Degree", icon: GraduationCap, components: <DocumentDetail /> },
    { title: "Previous Offer Letter", icon: BriefcaseBusiness },
    { title: "Completion Certificate", icon: Award },
    { title: "Recommendation Letter", icon: NotepadText },
    { title: "Performance Certificate", icon: Certificate, components: <PerformanceCertificate /> }
  ];


  return (
    <>

      <div className=" bg-[#f3f7fa] rounded-xl py-4 px-2 sm:px-5">


        {/* Unlinked Clickable Stepper */}
        <div className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-4">

          {DocSteps.map((step, index) => {
            const Icon = step.icon;
            const active = index === currentStep;

            return (
              <button
                type="button"
                key={step.title}
                onClick={() => setCurrentStep(index)}
                className={`flex items-center gap-3 rounded-xl border p-3
          text-left transition-all duration-300
          ${active
                    ? "border-[#144667] bg-gradient-to-r from-[#144667] via-[#1e6b91] to-[#3b82a0] shadow-lg shadow-[#144667]/20"
                    : "border-gray-200 bg-white hover:border-gray-200"
                  }`}
              >

                <div className={`flex h-11 w-11 shrink-0 items-center justify-center
          rounded-xl transition-all duration-300
          ${active
                    ? "bg-white text-[#144667]"
                    : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <Icon size={21} />
                </div>

                <div>

                  <p className={`text-xs font-bold sm:text-sm
            ${active ? "text-white" : "text-gray-600"}`}>
                    {step.title}
                  </p>
                </div>

              </button>
            );
          })}

        </div>


        {/* Corresponding Form */}
        <div className='mt-9'>
          {DocSteps[currentStep]?.components}
        </div>



      </div>

    </>
  )
}

export default Document