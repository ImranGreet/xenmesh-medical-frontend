import { ref } from 'vue';

const currentUserRole = ref<string>('doctor');
const currentUserName = ref<string>('');
const hospitalName = ref<string>('');
const hospitalMotto = ref<string>('');
const userId = ref<number | undefined>(undefined);

let hospitalData = {
	currentUserName,
	hospitalName,
	hospitalMotto,
};
export { currentUserRole, hospitalData, userId };
