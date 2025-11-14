import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "",
    component: () => import("@/layouts/Default.vue"),
    children: [
      {
        path: "",
        component: () => import("@/pages/Dashboard.vue"),
        name: "dashboard",
      },
      {
        path: "/appoinment",
        component: () => import("@/pages/receptionist/appointment.vue"),
        name: "appoinment",
      },

      {
        path: "/patient-list",
        component: () => import("@/pages/patient/patientList.vue"),
        name: "patient-list",
      },
      /*doctor panle*/
      {
        path: "/prescription",
        component: () => import("@/pages/doctor/prescriptionList.vue"),
        name: "prescription",
      },
      {
        path: "/medical-records",
        component: () => import("@/pages/doctor/MedicalRecords.vue"),
        name: "medical-records",
      },

      /* inventory managment*/
      {
        path:'inventory-management',
        component:()=>import('@/pages/inventory/Inventory.vue'),
        name:'inventory-management'
      } 
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
