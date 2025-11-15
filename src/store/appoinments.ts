import type { AppointmentPayload } from "@/scripts/appoinment";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

const useAppoinmnetStore = defineStore("appoinments", () => {
  let appointments = ref<any[]>([]);

  let per_page = ref<number>(8);
  let findByDoctorId = ref<number | null | undefined>(null);
  let appoinmentStatus = ref<string>("");
  let findStartDate = ref<string>("");
  let findEndDate = ref<string>("");
  let findByDate = ref<string>("");
  let addedBy = ref<number | undefined>(undefined);

  const buildParams = () => {

    const params: Record<string, any> = { per_page: per_page.value };

    if (findByDoctorId.value) params.doctor_id = findByDoctorId.value;
    if (appoinmentStatus.value) params.status = appoinmentStatus.value;
    if (findStartDate.value) params.start_date = findStartDate.value;
    if (findEndDate.value) params.end_date = findEndDate.value;
    if (findByDate.value) params.date = findByDate.value;
    if (addedBy.value) params.creatorId = addedBy.value;

    return params;
  };

  const retrieveAppoinments = async function () {
    try {
      const response = await axios.get("/api/doctors/appointments/filter", {
        params: buildParams(),
      });

      if (response.data && response.data.data) {
        appointments.value = response.data.data.data;
        console.log(appointments.value, "appo");
      } else {
        appointments.value = response.data;
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const retrieveAppoinmentsByStatus = async function (status: string) {
    appoinmentStatus.value = status;
    await retrieveAppoinments();
  };

  let retrievePerPage = async function (
    per_pagePageCount: number
  ): Promise<void> {
    per_page.value = per_pagePageCount;
    await retrieveAppoinments();
  };

  let createAppoinment = async function (payload: AppointmentPayload) {
    try {
      let response = await axios.post("/api/create-appointment", {
        payload,
      });

      if (response) {
        await retrieveAppoinments();
      }
    } catch (error) {
      console.log(error);
    }
  };

  let updateAppoinment = async function (payload: AppointmentPayload) {
    try {
      let response = await axios.post("/api/create-appointment", {
        payload,
      });
      if (response) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };



  return {
    appointments,
    /*methods*/
    retrieveAppoinments,
    retrievePerPage,
    retrieveAppoinmentsByStatus,
    createAppoinment,
    updateAppoinment,
  };
});

export default useAppoinmnetStore;
