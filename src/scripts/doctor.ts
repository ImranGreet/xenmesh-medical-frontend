export interface DoctorProfile {
  gender: string;
  address: string;
  description: string;
  specialization: string;
  qualification: string;
  [key: string]: any;
}

export interface Doctor {
  id: number;
  name: string;
  username: string;
  email: string;
  profile: DoctorProfile;
}

export interface DoctorDetails {
  id: number;
  name: string;
  email: string;
  role: string;
  username: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
}


export interface Doctor {
  id: number;
  doctor_id: number;
  department_id: number;
  gender: "male" | "female" | "other";
  address: string;
  description: string;
  specialization: string;
  qualification: string;
  experience_years: number;
  hospital_id: number;
  added_by_id: number;
  is_active: number;
  created_at: string;
  updated_at: string;

  doctor_details: DoctorDetails;
}