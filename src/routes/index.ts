import Schedule from '@/pages/doctor/schedule.vue';
import {
	createRouter,
	createWebHistory,
	type RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '',
		component: () => import('@/layouts/Default.vue'),
		children: [
			{
				path: '',
				component: () => import('@/pages/Dashboard.vue'),
				name: 'dashboard',
			},
			{
				path: '/appoinment',
				component: () => import('@/pages/receptionist/appointment.vue'),
				name: 'appoinment',
			},

			{
				path: '/patient-list',
				component: () => import('@/pages/patient/patientList.vue'),
				name: 'patient-list',
			},
			/*doctor panle*/
			{
				path: '/prescription',
				component: () => import('@/pages/doctor/prescriptionList.vue'),
				name: 'prescription',
			},
			{
				path: '/medical-records',
				component: () => import('@/pages/doctor/MedicalRecords.vue'),
				name: 'medical-records',
			},

			/* inventory managment*/
			{
				path: 'inventory-management',
				component: () => import('@/pages/inventory/Inventory.vue'),
				name: 'inventory-management',
			},
			/*doctor*/
			{
				path: '/doctor-list',
				component: () => import('@/pages/doctor/doctorlist.vue'),
				name: 'doctor-list',
			},
			{
				path:'/doctor-schedule',
				component:()=>import('@/pages/doctor/schedule.vue'),
				name:'doctor-schedule-list'
			}
		],
	},
	{
		path: '/patient-public',
		component: () => import('@/pages/global/patientPublicAppoinment.vue'),
		name: 'public-patient-appointment',
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
