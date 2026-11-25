
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const CustomDropdown = ({
    label, value, setValue, options, required = false }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Label */}
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#144667]">
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>

            <div className="relative mt-2">

                {/* Outside Click */}
                {isOpen && (
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                )}

                {/* Dropdown Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="z-70 flex w-full items-center justify-between rounded-xl
                    border border-gray-200 bg-gradient-to-b from-white to-[#f3f7fa]
                    px-4 py-3 text-sm shadow-sm outline-none transition-all
                    hover:border-[#2479a8] focus:border-[#144667] focus:ring-4
                    focus:ring-[#144667]/10"
                >
                    <span className={
                        value ? "text-gray-700" : "text-gray-400"
                    }>
                        {value || `Select ${label}`}
                    </span>

                    <ChevronDown
                        size={18}
                        className={`text-[#2479a8] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    />
                </button>

                {/* Dropdown Options */}
                {isOpen && (
                    <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl
                    border border-gray-100 bg-white p-1.5 shadow-xl">

                        <div className="max-h-23 overflow-y-auto">

                            {options.map((item) => (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => {
                                        setValue(item);
                                        setIsOpen(false);
                                    }}
                                   className={`flex w-full items-center justify-between rounded-lg
                                    px-3 py-2.5 text-left text-sm transition-all
                                    hover:bg-[#e2edf4] hover:text-[#144667]
                                    ${value === item
                                        ? "bg-[#e2edf4] font-semibold text-[#144667]"
                                        : "text-gray-600"
                                    }`}
                                >
                                    {item}

                                    {value === item && (
                                        <Check
                                            size={16}
                                            className="text-[#144667]"
                                        />
                                    )}
                                </button>
                            ))}

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomDropdown;
