import { type Patient } from "./patient";
import { type Doctor } from "./doctor";
import { type AddedBy } from "./user";

export interface Appointment {
  id: number;
  appointment_date: string;
  appointment_time: string;
  status: string;
  appointment_fee: string;
  notes: string;
  reason: string;
  room_number: string;
  duration: number;
  patient_id: number;
  appointed_doctor_id: number;
  added_by_id: number;
  created_at: string;
  updated_at: string;

  patient: Patient;
  doctor: Doctor;
  added_by: AddedBy;
}

export interface AppointmentPayload {
  id?: number;
  appointment_date: string;
  appointment_time: string;
  patient_id: number;
  appointed_doctor_id: number;
  reason: string;
  status: string;
  notes?: string;
  room_number?: string;
  duration?: number;
}
