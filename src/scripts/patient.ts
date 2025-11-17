export interface Patient {
	id: number;
	generated_patient_id: string;
	patient_name: string;
	sex: 'male' | 'female';
	date_of_birth: string;
	age: number;
	blood_group?: string;
	allergies?: string;
	chronic_diseases?: string;
	phone_number: string;
	email?: string;
	address?: string;
	emergency_contact_name?: string;
	emergency_contact_phone?: string;
	keep_records?: 0 | 1;
	is_active: 0 | 1;
	is_admitted: 0 | 1;
	hospital_id: number;
	added_by_id: number;
	created_by: Creator|null;
}

interface Creator {
	id: number;
	name: string;
	email: string;
	role: string;
	username: string;
}
