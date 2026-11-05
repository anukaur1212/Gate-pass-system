import { UserCheck2Icon, UsersRound, UserX2,CalendarClock } from "lucide-react"

export const stats = [
    {
        label: "All Employees",
        status: "All",
        logo: UsersRound,
        color: "text-[#144667]",
        gradient: "from-[#144667] to-[#3C86AC]",
        bar: "bg-[#144667]"
    },
    {
        label: "Active Employees",
        status: "Active",
        logo: UserCheck2Icon,
        color: "text-[#1E648C]",
        gradient: "from-[#3C86AC] to-[#144667]",
        bar: "bg-[#1E648C]"
    },
    {
        label: "Inactive Employees",
        status: "Inactive",
        logo: UserX2,
        color: "text-[#527D98]",
        gradient: "from-[#527D98] to-[#34566E]",
        bar: "bg-[#527D98]"
    },
    {
        label: "On Leave",
        status: "On Leave",
        logo: CalendarClock,
        color: "text-[#789CAF]",
        gradient: "from-[#789CAF] to-[#527D98]",
        bar: "bg-[#789CAF]"
    },
];