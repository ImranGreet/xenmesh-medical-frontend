import Default from '@/layouts/Default.vue';
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
            }
        ]
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})



export default router;