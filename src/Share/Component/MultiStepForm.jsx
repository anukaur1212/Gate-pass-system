import React from 'react'
import { useState } from "react";
import { User, BriefcaseBusiness, Check, DollarSign, BanknoteCheck, RotateCcw, ChevronRight, Save, CheckCheckIcon, CheckCheck, ChevronLeft } from "lucide-react";
import EmployeeOfficialDetails from '../Employee/Form/EmployeeOfficialDetails';
import EmployeePersonalDetails from '../Employee/Form/EmployeePersonalDetails';
import EmployeeSalaryDetails from '../Employee/Form/EmployeeSalaryDetails';
import EmployeeBankDetails from '../Employee/Form/EmployeeBankDetails';


const MultiStepForm = () => {

  const [currentStep, setCurrentStep] = useState(0)
  const [jobType, setJobType] = useState("");
  const [salary, setSalary] = useState("");
  const [stipends, setStipends] = useState("");


  const hideBankDetails =
    Number(salary) === 0 && Number(stipends) === 0;

  const steps = [
    {
      title: "Personal Details", icon: User,
      components: <EmployeePersonalDetails />
    },

    {
      title: "Official Details", icon: BriefcaseBusiness,
      components: <EmployeeOfficialDetails jobType={jobType}
        setJobType={setJobType} />
    },

    ...(
      ["Full Time", "Part Time", "Internship"].includes(jobType)
        ? [{
          title: "Salary Details",
          icon: DollarSign,
          components: (
            <EmployeeSalaryDetails
              jobType={jobType}
              salary={salary}
              setSalary={setSalary}
              stipends={stipends}
              setStipends={setStipends}
            />
          )
        }]
        : []
    ),

    ...(!hideBankDetails
      ? [{
        title: "Bank Details",
        icon: BanknoteCheck,
        components: <EmployeeBankDetails />
      }]
      : []),

    { title: "Review and Submit", icon: Check },
  ];


  return (
    <>


      <div className=" bg-[#f3f7fa] p-3 sm:p-4 rounded-xl">

        {/* Header */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mt-1 text-sm text-gray-500">
              Complete the following steps to register a new employee.
            </p>
          </div>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative mb-3 px-2 sm:px-5">

          {/* Unlinked Clickable Stepper */}

          <div className="grid grid-cols-5 gap-3">

            {steps.map((step, index) => {
              const Icon = step.icon;
              const completed = index < currentStep;
              const active = index === currentStep;

              return (

                <button
                  type="button"
                  key={step.title}
                  onClick={() => setCurrentStep(index)}
                  className="flex flex-col items-center cursor-pointer">

                  {/* Circle */}
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full
                       border-[3px] transition-all duration-300
                  
                   ${completed
                        ? "border-[#144667] bg-[#144667] text-white shadow-[0_0_0_6px_#dceaf2]"
                        : active
                          ? "border-[#144667] bg-[#144667] text-white shadow-[0_0_0_6px_#dceaf2]"
                          : "border-gray-200 bg-white text-gray-400"
                      }
                    `}
                  >
                    {completed ? (
                      <CheckCheck size={24} strokeWidth={3} />
                    ) : (
                      <Icon size={23} />
                    )}
                  </div>

                  {/* Label */}
                  <span
                    className={`mt-4 rounded-full px-3 py-2 text-center text-xs font-bold sm:text-sm
                  ${active
                        ? "bg-[#dceaf2] text-[var(--primary)]"
                        : completed
                          ? "text-[var(--primary)]"
                          : "bg-gray-100 text-gray-400"
                      }`}
                  >
                    {step.title}
                  </span>

                </button>
              );
            })}

          </div>

          {/* Corresponding Form */}
          <div className='mt-9'>
            {steps[currentStep]?.components}
          </div>


          <div className="product-form-footer">
            <button
              type="button"
              onClick={() => setCurrentStep(prev => Math.max(prev - 1, 0))}
              className="reset-btn">
              <ChevronLeft size={17} />
              Back
            </button>

            <button
              type="submit"
              onClick={() => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))
              }
              className="submit-btn">
              Proceed
              <ChevronRight
                size={17}
                className="submit-icon"
              />
            </button>
          </div>


        </div>


      </div>


    </>
  )
}

export default MultiStepForm