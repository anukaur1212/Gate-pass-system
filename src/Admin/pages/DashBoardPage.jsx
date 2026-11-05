import { NavLink } from "react-router-dom";
import { RotateCw, Truck, ArrowUpRight } from "lucide-react";

const DashboardPage = () => {

    return (
        <>
            {/* RGP / NRGP Cards */}
            <div className="grid grid-cols-1 lg:gap-6 md:grid-cols-2
absolute lg:top-60 lg:left-70 p-4 gap-4 md:p-2 lg:p-0">

                {/* RGP Card */}
                <NavLink
                    to="/productform"
                    className="rgp-card">

                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full
        bg-[#DCECF4] transition-transform duration-500 group-hover:scale-150" />

                    <div className="relative">
                        <div className="flex items-start justify-between">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl
                bg-[#DCECF4] text-[#144667] transition-transform duration-300
                group-hover:scale-110">
                                <RotateCw size={28} />
                            </div>

                            <ArrowUpRight
                                size={22}
                                className="text-gray-400 transition-all duration-300
                    group-hover:-translate-y-1 group-hover:translate-x-1
                    group-hover:text-[#144667]"
                            />
                        </div>

                        <h2 className="mt-6 text-xl font-bold !text-[var(--primary)]">
                            Returnable Gate Pass
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Create and manage products sent outside the organization
                            that are expected to return.
                        </p>

                        <div className="mt-6 flex items-center justify-between">
                            <span className="rounded-full bg-[#DCECF4] px-3 py-1
                          text-xs font-semibold !text-[var(--primary)]">
                                RGP
                            </span>

                            <span className="text-sm font-semibold !text-[var(--primary)]">
                                View Records →
                            </span>
                        </div>
                    </div>
                </NavLink>

                {/* NRGP Card */}
                <NavLink
                    to="/productform"
                    className="rgp-card">

                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full
                    bg-[#DCECF4] transition-transform duration-500 group-hover:scale-150" />

                    <div className="relative">
                        <div className="flex items-start justify-between">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl
                bg-[#DCECF4] text-[#1E648C] transition-transform duration-300
                group-hover:scale-110">
                                <Truck size={28} />
                            </div>

                            <ArrowUpRight
                                size={22}
                                className="text-gray-400 transition-all duration-300
                    group-hover:-translate-y-1 group-hover:translate-x-1
                    group-hover:text-[#144667]"
                            />
                        </div>

                        <h2 className="mt-6 text-xl font-bold !text-[var(--primary)]">
                            Non-Returnable Gate Pass
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Create and manage products transferred permanently
                            outside the organization.
                        </p>

                        <div className="mt-6 flex items-center justify-between">
                            <span className="rounded-full bg-[#DCECF4] px-3 py-1
                text-xs font-semibold !text-[var(--primary)]">
                                NRGP
                            </span>

                            <span className="text-sm font-semibold !text-[var(--primary)]">
                                View Records →
                            </span>
                        </div>
                    </div>
                </NavLink>

            </div>

        </>
    );
};

export default DashboardPage;