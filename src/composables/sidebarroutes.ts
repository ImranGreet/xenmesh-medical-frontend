
export default [
    {
        id: 1,
        role: "admin",
        prefix: "admin",
        links: [
            { id: 1, route: "", icon: "fas fa-home", title: "Dashboard" },
            { id: 2, route: "pharmacy", icon: "fas fa-pills", title: "Pharmacy" },
            { id: 3, route: "report", icon: "fas fa-chart-bar", title: "Reports" },
            { id: 4, route: "support", icon: "fas fa-question-circle", title: "Support" },
            { id: 5, route: "users", icon: "fas fa-users", title: "Users" },
        ],
    },
    {
        id: 2,
        role: "administrator",
        prefix: "administrator",
        links: [
            { id: 1, route: "", icon: "fas fa-tachometer-alt", title: "Dashboard" },
            { id: 2, route: 'Finance-report', icon: "fas fa-chart-line", title: "Finance Report" },
            { id:3,route:"operation",icon:"fas fa-procedures",title:"Operation"},
            {id:4,route:"stuff-management",icon:"fas fa-user-md",title:"Stuff Management"},
            {id:5,route:"compliance-reports",icon:"fas fa-file-contract",title:"Compliance Reports"},
            {id:6,route:"risk-management",icon:"fas fa-shield-alt",title:"Risk Management"}
        ],
    },
    {
        id: 3,
        role: "doctor",
        prefix: "hms",
        links: [
            { id: 1, route: "", icon: "fas fa-home", title: "Dashboard" },
            { id: 2, route: "doctor/appointments", icon: "fas fa-calendar-check", title: "Appointments" },
            { id: 3, route: "doctor/medicalrecords", icon: "fas fa-notes-medical", title: "Medical Records" },
            { id: 4, route: "doctor/patients", icon: "fas fa-user-injured", title: "Patients" },
            { id: 5, route: "doctor/prescriptions", icon: "fas fa-prescription-bottle", title: "Prescriptions" },
        ],
    },
    {
        id: 4,
        role: "lab-technician",
        prefix: "lab-technician",
        links: [
            { id: 1, route: "", icon: "fas fa-home", title: "Dashboard" },
            { id: 2, route: "equipments", icon: "fas fa-tools", title: "Equipments" },
            { id: 3, route: "quality-control", icon: "fas fa-check-circle", title: "Quality Control" },
            { id: 4, route: "specimens", icon: "fas fa-vial", title: "Specimens" },
            { id: 5, route: "test", icon: "fas fa-flask", title: "Tests" },
            { id: 6, route: "test-result-entry", icon: "fas fa-clipboard-list", title: "Test Result Entry" },
        ],
    },
    {
        id: 5,
        role: "nurse",
        prefix: "nurse",
        links: [
            { id: 1, route: "", icon: "fas fa-home", title: "Dashboard" },
            { id: 2, route: "medication", icon: "fas fa-pills", title: "Medication" },
            { id: 3, route: "my-patients", icon: "fas fa-user-nurse", title: "My Patients" },
            { id: 4, route: "tasks", icon: "fas fa-tasks", title: "Tasks" },
        ],
    },
    {
        id: 6,
        role: "patient",
        prefix: "patient",
        links: [
            { id: 1, route: "", icon: "fas fa-home", title: "Dashboard" },
            { id: 2, route: "appointment", icon: "fas fa-calendar-plus", title: "Appointment" },
            { id: 3, route: "billing", icon: "fas fa-file-invoice-dollar", title: "Billing" },
            { id: 4, route: "health-record", icon: "fas fa-heartbeat", title: "Health Record" },
            { id: 5, route: "medical-records", icon: "fas fa-notes-medical", title: "Medical Records" },
            { id: 6, route: "prescriptions", icon: "fas fa-prescription", title: "Prescriptions" },
        ],
    },
    {
        id: 7,
        role: "pharmacist",
        prefix: "pharmacist",
        links: [
            { id: 1, route: "", icon: "fas fa-home", title: "Dashboard" },
            { id: 2, route: "prescriptions", icon: "fas fa-prescription", title: "Prescriptions" },
            { id: 3, route: "inventory", icon: "fas fa-boxes", title: "Inventory" },
            { id: 4, route: "patient-counseling", icon: "fas fa-user-md", title: "Patient Counseling" },
            { id: 5, route: "drug-interaction", icon: "fas fa-exclamation-triangle", title: "Drug Interaction" },
        ],
    },
    {
        id: 8,
        role: "receptionist",
        prefix: "hms",
        links: [
            { id: 1, route: "", icon: "fas fa-home", title: "Dashboard" },
            { id: 2, route: "receptionist/appointment", icon: "fas fa-calendar-alt", title: "Appointment" },
            // { id: 3, route: "receptionist/billing", icon: "fas fa-file-invoice", title: "Billing" },
            { id: 5, route: "receptionist/patients", icon: "fas fa-user-injured", title: "Patients" },
            { id: 6, route: "receptionist/patient-check-in", icon: "fas fa-sign-in-alt", title: "Patient Check-In" },
        ],
    },
];


