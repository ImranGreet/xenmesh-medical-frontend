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
import { onMounted } from "vue";

const patientStore = usePatientStore();

const { patients } = storeToRefs(patientStore);
const { retrievePatients } = patientStore;


onMounted(async () => {
  await retrievePatients();
})




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
      <div class="w-full flex gap-3.5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>


    <div class="w-full flex justify-between items-center mt-2 mb-3.5 pb-2">
      <h1 class="text-2xl font-semibold">Find Patients</h1>
      <div class="flex gap-1.5">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select date" />
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
            <SelectValue placeholder="Select days" />
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
        <Button>+ Export</Button>
      </div>
    </div>


    <Input placeholder="Patient Name" />

    <Table class="caption-top mt-10">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            Patient id
          </TableHead>
          <TableHead>
            Patient Name
          </TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead class="text-right">
            Amount
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
          <TableCell class="text-right p-3">
            {{ patient.allergies }}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </section>

</template>