import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

const useStatusStore = defineStore("statusStore", () => {
  const statuses = ref<string[]>([]);

  let retrieveStatuses = async function () {
    try {
      let response = await axios.get("/api/retrieve-statuses");
      statuses.value = response.data.statuses;
      console.log(response.data.statuses);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    statuses,
    /*methods*/
    retrieveStatuses,
  };
});

export default useStatusStore;
