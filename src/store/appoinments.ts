import { defineStore } from "pinia";

const useAppoinmnetStore = defineStore("appoinments", () => {
  const appoinments: any[] = [];

  const retrieveAppoinments = async function () {};

  return {
    /*properties*/
    appoinments,
    /*methods*/
    retrieveAppoinments,
  };
});

export default useAppoinmnetStore;
