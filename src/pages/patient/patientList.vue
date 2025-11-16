<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button/Button.vue";


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Badge from "@/components/ui/badge/Badge.vue";

import PatientRegistration from "@/components/receptionist/PatientRegistration.vue";
import Card from "@/components/shared/Card.vue";

import usePatientStore from "@/store/patient";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import AddnewAppoinment from "@/components/receptionist/AddnewAppoinment.vue";

const patientStore = usePatientStore();

const { patients } = storeToRefs(patientStore);
const { retrievePatients } = patientStore;


onMounted(async () => {
  await retrievePatients();
})

let todaysPatient = ref<number>(25);
let thisMonthPatientCount = ref<number>(250);
let activePatientCount = ref<number>(1250);
let deactivePatientCount = ref<number>(125);


</script>

<template>
  <section class="w-full">


    <div class="w-full flex justify-between items-center py-10">
      <h1 class="text-2xl font-bold">Patient Management</h1>

      <Dialog>
        <DialogTrigger as-child>
          <Button>
            + Add New Patient
          </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-xl block">
          <DialogHeader>
            <DialogTitle>Patient </DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <PatientRegistration />
          <DialogFooter>
            <Button type="submit">
              Add Patient </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>


    <div class="w-full mb-20">
      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card title="Todays Patients" iconId="calendar-icon" :count=todaysPatient />
        <Card title="New This Month" iconId="calendar-icon" :count="thisMonthPatientCount" />
        <Card title="Active Patients" iconId="shield-active-icon" :count="activePatientCount" />
        <Card title="Deactive Patient" iconId="shield-deactive-icon" :count="deactivePatientCount" />
      </div>
    </div>


    <div class="w-full flex-col md:flex-row flex justify-between items-center mt-2 mb-3.5 pb-2">
      <h1 class="text-2xl font-semibold">Find Patients</h1>
      <div class="flex flex-wrap gap-1.5">

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a doctor" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">
                Apple
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">
                Apple
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button class="justify-self-end">+ Export</Button>
      </div>
    </div>


    <Input placeholder="Patient Name" />

    <Table class="caption-top mt-5">
      <TableCaption class="text-xl font-semibold border-b pb-2">A list of Registered Patients.</TableCaption>
      <TableHeader class="font-bold text-md ">
        <TableRow>
          <TableHead class="text-gray-800">
            Patient id
          </TableHead>
          <TableHead class="text-gray-800">
            Patient Name
          </TableHead>
          <TableHead class="text-gray-800">Status</TableHead>
          <TableHead class="text-gray-800">Phone Number</TableHead>
          <TableHead class="text-gray-800">Age</TableHead>
          <TableHead class="text-gray-800 text-right">Blood Group</TableHead>
          <TableHead class="text-right text-gray-800">
            Allergies
          </TableHead>
          <TableHead class="text-right text-gray-800">
            Gender
          </TableHead>
          <TableHead class="text-right text-gray-800">
            Admitted
          </TableHead>
          <TableHead class="text-center text-gray-800">
            Address
          </TableHead>
          <TableHead class="text-left text-gray-800">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="patient in patients" :key="patient.id">
          <TableCell class="font-medium p-3">
            <span class="text-gray-500">{{ patient.generated_patient_id }}</span>
          </TableCell>
          <TableCell class="font-medium p-3">
            {{ patient.patient_name }}
          </TableCell>

          <TableCell class="p-3">
            <Badge variant="default" v-if="patient.is_active === 1" class="bg-blue-500">Active</Badge>
            <Badge variant="destructive" v-if="patient.is_active === 0">Not Active</Badge>

          </TableCell>
          <TableCell class="p-3">{{ patient.phone_number }}</TableCell>
          <TableCell class="p-3">{{ patient.age }}</TableCell>
          <TableCell class="p-3 text-center">{{ patient.blood_group }}</TableCell>
          <TableCell class="text-right p-3">
            {{ patient.allergies }}
          </TableCell>
          <TableCell class="text-right p-3 capitalize">
            {{ patient.sex }}
          </TableCell>
          <TableCell class="text-right p-3">


            <Badge v-if="patient.is_admitted === 1" variant="default">Yes</Badge>
            <Badge v-if="patient.is_admitted === 0" variant="destructive">No</Badge>

          </TableCell>
          <TableCell class="text-center p-3">
            {{ patient.address }}
          </TableCell>
          <TableCell class="text-left p-3">
            <div class="flex gap-1">


              <Dialog>
                <DialogTrigger as-child>
                  <Button variant="secondary" class="w-5 h-5 bg-purple-700 hover:bg-purple-800">
                    <svg class="w-2.5 h-2.5 text-white">
                      <use href="#plus-icon" />
                    </svg>
                  </Button>
                </DialogTrigger>
                <DialogContent class="sm:max-w-xl block">
                  <DialogHeader>
                    <DialogTitle class="mb-5">Patient </DialogTitle>
                    <div class="bg-white rounded-2xl  space-y-4">

                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <p class="text-sm text-gray-500">Patient Name</p>
                          <p class="text-base font-medium text-gray-800">Imran Hossain</p>
                        </div>

                        <div>
                          <p class="text-sm text-gray-500">Gender</p>
                          <p class="text-base font-medium text-gray-800 capitalize">Male</p>
                        </div>

                        <div>
                          <p class="text-sm text-gray-500">Appointed Doctor</p>
                          <p class="text-base font-medium text-gray-800">Xenifer Ahmed</p>
                        </div>

                        <div>
                          <p class="text-sm text-gray-500">Patient ID</p>
                          <p class="text-base font-medium text-gray-800">PAT-xsionm</p>
                        </div>
                      </div>
                    </div>
                    
                  </DialogHeader>
                  <AddnewAppoinment />
                  <DialogFooter class="mt-2">
                    <Button type="submit">
                      Add Patient </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Button class="w-5 h-5">
                <svg class="w-2.5 h-2.5 text-white">
                  <use href="#component-icon" />
                </svg>
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </section>

</template>