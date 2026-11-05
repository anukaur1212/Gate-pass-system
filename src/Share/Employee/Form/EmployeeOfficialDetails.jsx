import React, { useState } from 'react'
import { EmpDropDownData } from '../../Constant/EmployeeData';
import { ChevronDown, Check, Mail } from 'lucide-react'
import CustomDropdown from '../custom/CustomDropdown';
import { workingTimeOptions } from '../../Constant/EmployeeData';
import { jobOptions, durationOptions, levelOptions, timeOptions, managerOptions, locationOptions, hiringOptions } from '../../Constant/EmployeeData';
import { stateOptions } from '../../Constant/EmployeeData';
import EmployeeSalaryDetails from './EmployeeSalaryDetails';

const EmployeeOfficialDetails = ({jobType,setJobType}) => {

    const classLabel = "mb-2 ps-3 block text-sm font-semibold text-[#144667]";

    const dropDownClass = `flex w-full items-center justify-between rounded-xl
    border border-gray-200 bg-gradient-to-b from-white to-[#f3f7fa]
    px-4 py-3 text-sm shadow-sm outline-none transition-all
    hover:border-[#2479a8] focus:border-[#144667]
    focus:ring-4 focus:ring-[#144667]/10`;

    const labelClass = "ps-3 mb-2 block  text-sm font-semibold text-[#144667]";

    const [openDropDown, setOpenDropDown] = useState(null);
    const [EmpFormData, setEmpFormData] = useState({
        department: "",
        position: "",
        qualification: "",
        experience: "",
        image: null,
        address: ""
    })


    const [openDropdown, setOpenDropdown] = useState(false)
    // const [jobType, setJobType] = useState("");
    const [duration, setDuration] = useState("");
    const [workingTime, setWorkingTime] = useState("");
    const [level, setLevel] = useState("");

    const [openJobType, setOpenJobType] = useState(false);
    const [openDuration, setOpenDuration] = useState(false);
    const [openTime, setOpenTime] = useState(false);
    const [openLevel, setOpenLevel] = useState(false);

    const [reportingManager, setReportingManager] = useState("");
    const [workingLocation, setWorkingLocation] = useState("");
    const [hiringSource, setHiringSource] = useState("");
    const [officialEmail, setOfficialEmail] = useState("");

    const [joiningDate, setJoiningDate] = useState("");
    const [state, setState] = useState("");
    const [openState, setOpenState] = useState(false)



    return (
        <>
            <div className='grid grid-cols-2 gap-5 md:grid-cols-4 mt-4 mb-6'>

                {/* Job Type */}
                <CustomDropdown
                    label="Job Type"
                    value={jobType}
                    setValue={(value) => {
                        setJobType(value);

                        if (value !== "Internship" && value !== "Training") {
                            setDuration("");
                            setWorkingTime("");
                            setLevel("");
                        }
                    }}
                    options={jobOptions}
                    required
                />

                {(jobType === "Internship") && (
                    <>
                        <CustomDropdown
                            label="Duration"
                            value={duration}
                            setValue={setDuration}
                            options={durationOptions}
                            required
                        />

                        <CustomDropdown
                            label="Duration Type"
                            value={workingTime}
                            setValue={setWorkingTime}
                            options={timeOptions}
                            required
                        />

                        {/* Joining Date */}
                        <div>
                            <label className={labelClass}>
                                Joining Date <span className="text-red-500">*</span>
                            </label>

                            <div className="relative mt-2 group">
                                <input
                                    type="date"
                                    value={joiningDate}
                                    onChange={(e) => setJoiningDate(e.target.value)}
                                    required
                                    className="w-full rounded-xl border border-gray-200
                            bg-white px-4 py-3 text-sm text-gray-700
                            shadow-sm outline-none transition-all
                            hover:border-gray-300
                            focus:border-[#56805d]
                            focus:ring-4 focus:ring-[#56805d]/10"
                                />
                            </div>
                        </div>

                        {/* official email */}
                        <div>
                            <label className={labelClass}>
                                Official Email
                            </label>

                            <div className="relative mt-2 group">

                                <div className="absolute left-4 top-1/2
                        -translate-y-1/2 text-gray-400
                        group-focus-within:text-[#245b3e]">
                                    <Mail size={18} />
                                </div>

                                <input
                                    type="email"
                                    value={officialEmail}
                                    onChange={(e) => setOfficialEmail(e.target.value)}
                                    placeholder="employee@company.com"
                                    required
                                    className="w-full rounded-xl border border-gray-200
                            bg-white py-3 pl-11 pr-4 text-sm text-gray-700
                            shadow-sm outline-none transition-all
                            placeholder:text-gray-400
                            hover:border-gray-300
                            focus:border-[#56805d]
                            focus:ring-4 focus:ring-[#56805d]/10"
                                />
                            </div>
                        </div>

                    </>
                )}


                {/* State only for training */}
                {jobType === "Training" && (

                    <>
                        <div>
                            <label className={labelClass}>
                                Select State <span className="text-red-500">*</span>
                            </label>

                            <div className="relative mt-2">

                                {/* Outside Click Overlay */}
                                {openState && (
                                    <div
                                        className="fixed inset-0 z-40"
                                        onClick={() => setOpenState(false)}
                                    />
                                )}

                                {/* Dropdown Button */}
                                <button
                                    type="button"
                                    onClick={() => setOpenState(!openState)}
                                    className="w-full flex items-center justify-between rounded-xl
                            border border-gray-200 bg-white px-4 py-3 text-sm
                            text-gray-700 shadow-sm transition-all bg-gradient-to-b from-white to-[#f8fbf7]
                            hover:border-[#56805d] focus:border-[#56805d]"
                                >
                                    <span className={state ? "text-gray-700" : "text-gray-400"}>
                                        {state || "Select your state"}
                                    </span>

                                    <ChevronDown
                                        size={18}
                                        className={`text-[#56805d] transition-transform
                             ${openState ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {/* Dropdown Options */}
                                {openState && (
                                    <div className="absolute z-50 mt-2 w-full overflow-hidden
                          rounded-xl border border-gray-100 bg-white p-1.5 shadow-xl">

                                        <div className="max-h-48 overflow-y-auto">
                                            {stateOptions.map((item) => (
                                                <button
                                                    key={item}
                                                    type="button"
                                                    onClick={() => {
                                                        setState(item);
                                                        setOpenState(false);
                                                    }}
                                                    className={`w-full flex items-center justify-between
                                            rounded-lg px-3 py-2.5 text-left text-sm
                                            transition-all hover:bg-[#eaf2eb] hover:text-[#245b3e]
                                            ${state === item
                                                            ? "bg-[#eaf2eb] font-semibold text-[#245b3e]"
                                                            : "text-gray-600"
                                                        }`}
                                                >
                                                    {item}

                                                    {state === item && (
                                                        <Check size={16} className="text-[#245b3e]" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <CustomDropdown
                            label="Duration"
                            value={duration}
                            setValue={setDuration}
                            options={durationOptions}
                            required
                        />

                        <CustomDropdown
                            label="Duration Type"
                            value={workingTime}
                            setValue={setWorkingTime}
                            options={timeOptions}
                            required
                        />

                    </>
                )}


                {/* for training remove wroking time, hiring source, official email */}
                {jobType !== "Training" && (

                    <>
                        {/* Working Time */}
                        <CustomDropdown
                            label="Working Time"
                            value={workingTime}
                            setValue={setWorkingTime}
                            options={workingTimeOptions}
                            required
                        />

                        {/* Hiring Source */}
                        <CustomDropdown
                            label="Hiring Source"
                            value={hiringSource}
                            setValue={setHiringSource}
                            options={hiringOptions}
                            required
                        />

                        <CustomDropdown
                            label="Level"
                            value={level}
                            setValue={setLevel}
                            options={levelOptions}
                            required
                        />


                    </>
                )}


            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-4 mb-5">

                {/* Reporting Manager */}
                <CustomDropdown
                    label="Reporting Manager"
                    value={reportingManager}
                    setValue={setReportingManager}
                    options={managerOptions}
                />

                {/* Working Location */}
                <CustomDropdown
                    label="Working Location"
                    value={workingLocation}
                    setValue={setWorkingLocation}
                    options={locationOptions}
                    required
                />

                {/* designation */}
                {EmpDropDownData.map((item) => {
                    return (
                        <div key={item.name} className="w-full">
                            <label className={classLabel}>
                                {item.label}
                                <span className="text-red-500">*</span>
                            </label>

                            <div className="relative">
                                {/* Dropdown Trigger */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenDropDown(prev =>
                                            prev === item.name ? null : item.name
                                        )
                                    }
                                    className={dropDownClass}
                                >
                                    <span className="flex items-center gap-2">

                                        {item.options.find(option => option.value === EmpFormData[item.name])?.label ||
                                            item.placeholder}
                                    </span>

                                    <ChevronDown
                                        size={17}
                                        className={`text-[#2479a8] transition-transform duration-200
                                        ${openDropDown === item.name ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {/* Dropdown Options */}
                                {openDropDown === item.name && (
                                    <>
                                        <div
                                            className="fixed inset-0 z-40"
                                            onClick={() => setOpenDropDown(null)}
                                        />

                                        <div className="absolute left-0 top-full z-50 mt-2 h-25 w-full
                                        overflow-hidden rounded-xl border border-blue-100
                                        bg-white p-2 shadow-xl shadow-blue-900/10">

                                            <div className="h-25 overflow-y-auto">
                                                {item.options.map(option => (
                                                    <button
                                                        type="button"
                                                        key={option.value}
                                                        onClick={() => {
                                                            setEmpFormData(prev => ({
                                                                ...prev,
                                                                [item.name]: option.value,
                                                            }));

                                                            setOpenDropDown(null);
                                                        }}

                                                      className={`group flex w-[95%] items-center justify-between
                                                        rounded-lg px-3 py-2.5 text-left text-sm
                                                        transition-all duration-200 hover:translate-x-1
                                                        ${EmpFormData[item.name] === option.value
                                                            ? "bg-[#e2edf4] font-semibold text-[#144667]"
                                                            : "text-gray-600 hover:bg-[#f3f7fa] hover:text-[#144667]"
                                                        }`}
                                                    >
                                                        <span>{option.label}</span>

                                                        {EmpFormData[item.name] === option.value && (
                                                            <Check size={16} className="text-[#144667]" />
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    )
                })}


                {(jobType === "Full Time" || jobType === "Part Time") && (

                    <>
                        {/* Joining Date */}
                        <div>
                            <label className={labelClass}>
                                Joining Date <span className="text-red-500">*</span>
                            </label>

                            <div className="relative mt-2 group">
                                <input
                                    type="date"
                                    value={joiningDate}
                                    onChange={(e) => setJoiningDate(e.target.value)}
                                    required
                                    className="w-full rounded-xl border border-gray-200
                            bg-white px-4 py-3 text-sm text-gray-700
                            shadow-sm outline-none transition-all
                            hover:border-gray-300
                            focus:border-[#56805d]
                            focus:ring-4 focus:ring-[#56805d]/10"
                                />
                            </div>
                        </div>

                        {/* official email */}
                        <div>
                            <label className={labelClass}>
                                Official Email
                            </label>

                            <div className="relative mt-2 group">

                                <div className="absolute left-4 top-1/2
                        -translate-y-1/2 text-gray-400
                        group-focus-within:text-[#245b3e]">
                                    <Mail size={18} />
                                </div>

                                <input
                                    type="email"
                                    value={officialEmail}
                                    onChange={(e) => setOfficialEmail(e.target.value)}
                                    placeholder="employee@company.com"
                                    required
                                    className="w-full rounded-xl border border-gray-200
                            bg-white py-3 pl-11 pr-4 text-sm text-gray-700
                            shadow-sm outline-none transition-all
                            placeholder:text-gray-400
                            hover:border-gray-300
                            focus:border-[#56805d]
                            focus:ring-4 focus:ring-[#56805d]/10"
                                />
                            </div>
                        </div>
                    </>

                )}


            </div>



        </>
    )
}

export default EmployeeOfficialDetails