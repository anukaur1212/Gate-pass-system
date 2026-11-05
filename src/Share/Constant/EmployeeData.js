// Employee Drop Down
export const EmpDropDownData = [
    // {
    //     name: "qualification",
    //     label: "Qualification",
    //     placeholder: "Select Qualification",
    //     options: [
    //         { value: "10th", label: "10th Pass" },
    //         { value: "12th", label: "12th Pass" },
    //         { value: "Diploma", label: "Diploma" },
    //         { value: "BCA", label: "BCA" },
    //         { value: "BSc", label: "B.Sc" },
    //         { value: "BTech", label: "B.Tech" },
    //         { value: "BA", label: "B.A" },
    //         { value: "BCom", label: "B.Com" },
    //         { value: "MCA", label: "MCA" },
    //         { value: "MTech", label: "M.Tech" },
    //         { value: "MBA", label: "MBA" },
    //         { value: "Other", label: "Other" },
    //     ]
    // },
    // {
    //     name: "department",
    //     label: "Employee Department",
    //     placeholder: "Select Department",
    //     options: [
    //         { value: "IT", label: "IT Department" },
    //         { value: "HR", label: "Human Resources" },
    //         { value: "Finance", label: "Finance & Accounts" },
    //         { value: "Sales", label: "Sales & Marketing" },
    //         { value: "Production", label: "Production" },
    //         { value: "Other", label: "Other" },
    //     ]
    // },
    {
        name: "position",
        label: "Designation",
        placeholder: "Select Job Position",
        options: [
            { value: "Manager", label: "Manager" },
            { value: "HR Executive", label: "HR Executive" },
            { value: "Frontend Developer", label: "Frontend Developer" },
            { value: "Backend Developer", label: "Backend Developer" },
            { value: "Software Engineer", label: "Software Engineer" },
            { value: "Accountant", label: "Accountant" },
            { value: "Sales Executive", label: "Sales Executive" },
            { value: "Supervisor", label: "Supervisor" },
            { value: "Team Leader", label: "Team Leader" },
            { value: "Other", label: "Other" },
        ]
    },
    // {
    //     name: "experience",
    //     label: "Experience",
    //     placeholder: "Select Experience",
    //     options: [
    //         { value: "Fresher", label: "Fresher (No Experience)" },
    //         { value: "0-1", label: "0 - 1 Year" },
    //         { value: "1-2", label: "1 - 2 Years" },
    //         { value: "2-3", label: "2 - 3 Years" },
    //     ]
    // },
    // {
    //     name: "status",
    //     label: "Status",
    //     placeholder: "Select Status",
    //     options: [
    //         { value: "Active", label: "Active" },
    //         { value: "Inactive", label: "Inactive" },
    //         { value: "On Leave", label: "On Leave" },
    //     ]
    // },

];

// Employee table data 
export const employees = [
    {
        id: 1,
        employeeId: "EMP-001",
        fullName: "Rahul Sharma",
        image: "src/assets/img/avatar-5.jpg",
        email: "rahul@gmail.com",
        phone: "9876543210",
        department: "IT",
        designation: "Frontend Developer",
        qualification: "B.Tech",
        experience: "2 Years",
        address: "Ludhiana, Punjab",
        joiningDate: "15-01-2025",
        status: "Active",
    },
    {
        id: 2,
        employeeId: "EMP-002",
        fullName: "Abhinav Sharma",
        image: "src/assets/img/avatar-4.jpg",
        email: "abhinav@gmail.com",
        phone: "9836443210",
        department: "HR",
        designation: "HR Executive",
        qualification: "MBA",
        experience: "3 Years",
        address: "Mohali, Punjab",
        joiningDate: "10-08-2024",
        status: "Inactive",
    },
];

// Employee Table Headings
export const TableHeader = [
    { id: 1, label: "PHOTO" },
    { id: 2, label: "EMPLOYEE NAME" },
    { id: 3, label: "CONTACT" },
    { id: 4, label: "DEPARTMENT" },
    { id: 5, label: "DESIGNATION" },
    { id: 6, label: "QUALIFICATION" },
    { id: 7, label: "EXPERIENCE" },
    { id: 8, label: "JOINING DATE" },
    { id: 9, label: "STATUS" },
    { id: 10, label: "ACTIONS" },
];

export const stateOptions = [
    "Punjab",
    "others"
];

export const workingTimeOptions = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM"
];

 export const jobOptions = [
        "Full Time",
        "Part Time",
        "Internship",
        "Training",
        "Commission Based",
        "Project Based"
    ];

 export const durationOptions = [
        "1", "2", "3", "4", "5", "6",
        "10", "15", "20", "25", "30", "35",
        "40", "45", "50", "60", "120", "N/A"
    ];

   export const timeOptions = [
        "Months",
        "Days",
        "Hours"
    ];

  export const levelOptions = [
        "S1",
        "S2",
        "S3",
        "S4",
        "O1",
        "O2",
        "M1",
        "IT1",
        "IT2",
        "IT3",
        "IT4"
    ];

   export const managerOptions = [
        "Employee 1",
        "Employee 2"
    ];

   export const locationOptions = [
        "Work From Home (WFH)",
        "Work From Office (WFO)",
        "Hybrid"
    ];

  export const hiringOptions = [
        "Indeed",
        "On Campus",
        "Off Campus",
        "WhatsApp",
        "Google",
        "YouTube",
        "Instagram",
        "LinkedIn"
    ];