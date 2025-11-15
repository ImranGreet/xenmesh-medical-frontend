import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

const useAppoinmnetStore = defineStore("appoinments", () => {
  let appointments = ref<any[]>([]);

  let per_page = ref<number>(8);

  const retrieveAppoinments = async function () {
    try {
      const response = await axios.get("/api/doctors/appointments/filter", {
        params: {
          per_page: per_page.value,
        },
      });
      console.log("Full response:", response);
      console.log("Response data:", response.data);

      if (response.data && response.data.data) {
        appointments.value = response.data.data.data;
      } else {
        appointments.value = response.data;
      }

      console.log("Appointments after assignment:", appointments.value);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  let retrievePerPage = async function (
    per_pagePageCount: number
  ): Promise<void> {
    per_page.value = per_pagePageCount;
    await retrieveAppoinments();
  };

  return {
    /*properties*/
    appointments,
    /*methods*/
    retrieveAppoinments,
    retrievePerPage,
  };
});

export default useAppoinmnetStore;
