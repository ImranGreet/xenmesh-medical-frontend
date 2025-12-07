export interface Hospital {
	id: number;
	hospital_name: string;
	code: string;
	address: string;
	city: string;
	state: string;
	country: string;
	postal_code: string;
	phone_number: string;
	email: string;
	website: string;
	established_year: string; // string because your API gives "2010"
	number_of_beds: number;
	description: string;
	is_active: number; // 1 or 0 from DB
	added_by_id: number;
	created_at: string; // ISO timestamp
	updated_at: string; // ISO timestamp
}

export interface HospitalApiResponse {
	status: string;
	message: string;
	hospital_info: Hospital;
}
