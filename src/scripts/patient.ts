export interface Patient {
  id: number;
  patient_name: string;
  age: number;
  sex: "male" | "female" | "other";
  date_of_birth: string;
  blood_group: string;
  is_admitted: number;
  phone_number: string;
  email: string;
  address: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  allergies: string;
  chronic_diseases: string;
  hospital_id: number;
  added_by_id: number;
  is_active: number;
  patient_id: string;
  created_at: string;
  updated_at: string;
}

