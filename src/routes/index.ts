import Default from '@/layouts/Default.vue';
import PatientList from '@/pages/patient/patientList.vue';
import Appointment from '@/pages/receptionist/appointment.vue';
import { createMemoryHistory, createRouter, type RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
    {
        path: '',
        component: Default,
        children:[
            {
                path:'',
                component:Appointment,
            },
            {
                path:'/appoinment',
                component:Appointment,
                name:'appoinment'
            },
            {
                path:'/patient-list',
                component:PatientList,
                name:'patient-list'
            },
           
        ]
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})



export default router;