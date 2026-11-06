import React, { useEffect, useRef } from 'react'
import { useState } from "react";
import { User, BriefcaseBusiness, Check, DollarSign, BanknoteCheck, RotateCcw, ChevronRight, Save, CheckCheckIcon, CheckCheck, ChevronLeft, SaveIcon, Paperclip } from "lucide-react";
import EmployeeOfficialDetails from '../Employee/Form/EmployeeOfficialDetails';
import EmployeePersonalDetails from '../Employee/Form/EmployeePersonalDetails';
import EmployeeSalaryDetails from '../Employee/Form/EmployeeSalaryDetails';
import EmployeeBankDetails from '../Employee/Form/EmployeeBankDetails';
import Document from '../Employee/Form/Document';


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

    {
      title: "Document", icon:Paperclip,
      components: <Document/> 
    }
  ];


  return (
    <>


      <div className=" bg-[#f3f7fa] p-3 sm:p-4 rounded-xl">

        {/* Header */}
        <div className=" flex flex-wrap items-center justify-between gap-4">
        </div>

        {/* Horizontal Timeline */}
        <div className="relative mb-3 px-2 sm:px-5">

          {/* Unlinked Clickable Stepper */}
          <div className="grid grid-cols-5 gap-3 place-items-center
         py-3">

            {steps.map((step, index) => {
              const Icon = step.icon;
              // const completed = index < currentStep;
              const active = index === currentStep;

              return (

                <button
                  type="button"
                  key={step.title}
                  onClick={() => setCurrentStep(index)}
                  className="group flex cursor-pointer">

                  {/* Label */}
                  <span
                    className={`mt-4 rounded-full px-3 py-2
                       text-center text-xs font-bold sm:text-sm
                  ${active
                        ? "bg-[var(--primary)] text-[var(--primary-light)]"
                        : "bg-[#dceaf2] text-[var(--primary)]"
                      }`}
                  >

                    <div className='flex items-center gap-2 relative h-10 w-40'>

                      <div
                        className={`absolute left-0 flex h-10 w-10 items-center justify-center rounded-full
                        ? "border-[#144667] text-white shadow-[0_0_0_6px_#dceaf2]"
                        border-[3px] transition-all duration-300
                  
                        ${active
                            ? " bg-[var(--primary-light)] text-white"
                            : "border-gray-200 bg-white text-gray-400 "
                          }`}
                          >

                        <Icon size={23}
                          className='text-[var(--primary)]' />

                      </div>
                      <div className='ms-12'>
                        {step.title}
                      </div>
                    </div>

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
              type="submit"
              className="submit-btn">
              Save
              <SaveIcon
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