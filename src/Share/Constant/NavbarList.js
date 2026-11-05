 import { LayoutDashboard, UserRoundSearch,UserRound,ClipboardList, ShieldCheck } from "lucide-react";

  export const sidebar = [
        {
            logo: LayoutDashboard,
            name: "Dashboard",
            path: "/"
        },
        {
            logo: ClipboardList,
            name: "Report RGP/NRGP",
            path: "/report"
        },
        {
            logo: ShieldCheck,
            name: "Approval",
            path: "/approval"
        },
        {
            logo:UserRoundSearch,
            name:"Visitor Entry",
            path: "/visitor"
        },
           {
            logo:UserRound,
            name:"Employee",
            path: "/employee"
        }
    ]






