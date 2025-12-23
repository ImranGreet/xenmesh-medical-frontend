<template>
  <div class="max-w-3xl mx-auto py-6 bg-white rounded-2xl  space-y-6">


    <form @submit.prevent="registerPatient" class="space-y-6">



      <div>
        <Label for="patient_name" class="font-semibold md:font-medium md:text-lg mt-8">Patient Name </Label>
        <Input id="patient_name" placeholder="John Doe" class="mt-2" required />
      </div>
      <div>
        <Label for="patient_name" class="font-semibold md:font-medium md:text-lg mb-2">Patient id </Label>
        <Input id="patient_name" placeholder="John Doe" class="mt-2" required />
      </div>
      <div>
        <Label for="patient_name" class="font-semibold md:font-medium md:text-lg mb-2">Phone Number </Label>
        <Input id="patient_name" placeholder="John Doe" class="mt-2" required />
      </div>
      <div>
        <Label for="patient_name" class="font-semibold md:font-medium md:text-lg mb-2">Age </Label>
        <Input id="patient_name" placeholder="John Doe" class="mt-2" type="number" required />
      </div>


      <div>

        <Label for="gender" class="text-sm font-medium text-gray-700 mb-2">Select Doctor</Label>
        <Select v-model="form.gender" class="mt-5 w-full">
          <SelectTrigger class="w-full h-11 border rounded-lg px-3 ">
            <SelectValue placeholder="Select a doctor" />
          </SelectTrigger>
          <SelectContent class="max-h-48 overflow-y-auto">
            <SelectItem value="{{ doctor.name}}" v-for="doctor in doctors">{{ doctor.name }}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label for="patient_name" class="font-semibold md:font-medium md:text-lg mt-8">Appointment Fees</Label>
        <Input id="patient_name" placeholder="fees 500" class="mt-2" required />
      </div>

      <!-- Schedules Section -->
      <div class="bg-gray-50 ">
        <h3 class="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <svg class="w-5 h-5 text-gray-600">
            <use href="#calendar-icon" />
          </svg>
          Schedules
        </h3>

        <div class="mt-4 rounded-sm space-y-6 ">

          <div class="flex justify-between items-center px-3 py-2  even:bg-stone-200">
            <span class="font-medium text-gray-700">Sunday</span>

            <RadioGroup default-value="comfortable">
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="r1" value="default" />
                <Label for="r1">10:00 AM - 2:00 PM</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="r2" value="comfortable" />
                <Label for="r2">4:00 PM - 6:00 PM</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="r3" value="compact" />
                <Label for="r3">8:00 PM - 10:00 PM</Label>
              </div>
            </RadioGroup>
          </div>
          <div class="flex justify-between items-center px-3 py-2  even:bg-stone-200">
            <span class="font-medium text-gray-700">Monday</span>

            <RadioGroup default-value="comfortable">
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="r1" value="default" />
                <Label for="r1">10:00 AM - 2:00 PM</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="r2" value="comfortable" />
                <Label for="r2">4:00 PM - 6:00 PM</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="r3" value="compact" />
                <Label for="r3">8:00 PM - 10:00 PM</Label>
              </div>
            </RadioGroup>
          </div>

        </div>
      </div>


    </form>
  </div>
</template>


<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

import useDoctorStore from "@/store/doctor";
import { storeToRefs } from 'pinia';

const doctorStore = useDoctorStore();
const { doctors } = storeToRefs(doctorStore);

const { retrieveDoctors } = doctorStore;

import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group';


let props = defineProps<{
  // patinetInfo: Appointment,
  // required:false
}>();

onMounted(async () => {
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
