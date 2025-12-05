<template>
  <div class="px-2 sm:px-4">


    <form class="space-y-6">

      <!-- SECTION: Basic Info -->
      <div class="space-y-3">
        <h3 class="text-lg font-semibold text-gray-700 border-l-4 border-blue-500 pl-2">Basic Information</h3>

        <!-- Patient Name -->
        <div>
          <Label for="patient_name" class="font-semibold md:font-medium md:text-lg">Patient Name </Label>
          <Input id="patient_name" placeholder="John Doe" class="mt-2" v-model="form.patient_name" required />
        </div>

        <!-- Age + Sex -->
        <div class="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <div class="w-full">
            <Label for="age" class="font-semibold md:font-medium  md:text-lg">Age</Label>
            <Input id="age" type="number" min="0" placeholder="30" class="mt-1" v-model="form.age" required />
          </div>

          <div class="w-full">
            <Label class="font-semibold md:font-medium  md:text-lg">Sex</Label>
            <Select v-model="form.gender">
              <SelectTrigger class="mt-1">
                <SelectValue placeholder="Select sex" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <!-- DOB + Blood Group -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label for="dob" class="font-semibold md:font-medium  md:text-lg">Date of Birth</Label>
            <Input id="dob" type="date" class="mt-1" />
          </div>

          <div>
            <Label class="font-semibold md:font-medium  md:text-lg">Blood Group</Label>
            <Select v-model="form.blood_group">
              <SelectTrigger class="mt-1">
                <SelectValue placeholder="Choose blood group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A+">A+</SelectItem>
                <SelectItem value="A-">A-</SelectItem>
                <SelectItem value="B+">B+</SelectItem>
                <SelectItem value="B-">B-</SelectItem>
                <SelectItem value="O+">O+</SelectItem>
                <SelectItem value="O-">O-</SelectItem>
                <SelectItem value="AB+">AB+</SelectItem>
                <SelectItem value="AB-">AB-</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <!-- Is Admitted -->
        <div class="flex items-center gap-2">
          <Checkbox id="terms" v-model="form.is_admitted" />
          <Label for="terms">Is Admitted?</Label>
        </div>
      </div>

      <!-- SECTION: Contact Info -->
      <div class="space-y-3">
        <h3 class="text-lg font-semibold text-gray-700 border-l-4 border-green-500 pl-2">Contact Information</h3>

        <!-- Phone -->
        <div>
          <Label for="phone" class="font-semibold md:font-medium text-lg md:text-lg">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="+8801XXXXXXXXX" class="mt-1" v-model="form.phone" required />
        </div>

        <!-- Email -->
        <div>
          <Label for="email" class="font-semibold md:font-medium text-lg md:text-lg">Email</Label>
          <Input id="email" type="email" placeholder="example@mail.com" class="mt-1" v-model="form.email" />
        </div>

        <!-- Address -->
        <div>
          <Label for="address" class="font-semibold md:font-medium text-lg md:text-lg">Address</Label>
          <Textarea id="address" placeholder="Enter full address" rows="2" class="mt-1" v-model="form.address" />
        </div>

        <!-- Emergency Contact -->
        <div>
          <Label for="emergency_contact_phone" class="font-semibold md:font-medium text-lg md:text-lg">Emergency Contact</Label>
          <Input id="emergency_contact_phone" type="tel" placeholder="+8801XXXXXXXXX" class="mt-1"
            v-model="form.emergency_contact_phone" />
        </div>
      </div>

      <!-- SECTION: Medical Info -->
      <div class="space-y-3">
        <h3 class="text-lg font-semibold text-gray-700 border-l-4 border-red-500 pl-2">Medical Information</h3>

        <!-- Keep Records -->
        <div class="flex items-center gap-2">
          <Checkbox id="terms" v-model="form.keep_records" />
          <Label for="terms">Keep Records?</Label>
        </div>

        <!-- Allergies -->
        <div>
          <Label for="allergies" class="font-semibold md:font-medium text-lg md:text-lg">Allergies</Label>
          <Textarea id="allergies" placeholder="List allergies..." rows="2" class="mt-1" v-model="form.allergies" />
        </div>

        <!-- Chronic Diseases -->
        <div>
          <Label for="chronic_diseases" class="font-semibold md:font-medium text-lg md:text-lg">Chronic Diseases</Label>
          <Textarea id="chronic_diseases" placeholder="Describe chronic diseases..." rows="2" class="mt-1" v-model="form.chronic_diseases" />
        </div>
      </div>



    </form>
  </div>
</template>


<script lang="ts" setup>
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import Checkbox from '../ui/checkbox/Checkbox.vue'
import usePatientStore from '@/store/patient'
import { storeToRefs } from 'pinia'

const patientStore = usePatientStore();
const { form } = storeToRefs(patientStore);


</script>
