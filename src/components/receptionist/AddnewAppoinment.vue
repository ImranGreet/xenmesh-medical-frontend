<template>
  <div class="max-w-3xl mx-auto py-6 bg-white rounded-2xl  space-y-6">
  

    <form @submit.prevent="registerPatient" class="space-y-6">

      <!-- Gender -->
      <div>
        
        <Label for="gender" class="text-sm font-medium text-gray-700">Select Doctor</Label>
        <Select v-model="form.gender" class="mt-5 w-full" >
          <SelectTrigger class="w-full h-11 border rounded-lg px-3">
            <SelectValue placeholder="Select a doctor" />
          </SelectTrigger>
          <SelectContent class="max-h-48 overflow-y-auto">
            <SelectItem value="{{ doctor.name}}" v-for="doctor in doctors" >{{ doctor.name }}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <!-- Schedules Section -->
      <div class="bg-gray-50 ">
        <h3 class="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <svg class="w-5 h-5 text-gray-600">
            <use href="#calendar-icon" />
          </svg>
          Schedules
        </h3>

        <div class="mt-4 space-y-3">
          <div class="flex justify-between items-center bg-white  rounded-lgshadow-sm">
            <span class="font-medium text-gray-700">Sunday</span>
            <div class="text-sm text-gray-600">
              <p>10:00 AM - 2:00 PM</p>
              <p>4:00 PM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      
    </form>
  </div>
</template>


<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

import useDoctorStore from "@/store/doctor";
import { storeToRefs } from 'pinia';

const doctorStore = useDoctorStore();
const { doctors } = storeToRefs(doctorStore);

const { retrieveDoctors } = doctorStore; 

onMounted( async ()=>{
  await retrieveDoctors();
});


const form = ref({
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  gender: '',
  dob: '',
  address: '',
})

const registerPatient = () => {
  console.log('Patient Registered:', form.value)
  alert('Patient registered successfully!')
}

</script>
