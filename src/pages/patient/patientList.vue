<script setup lang="ts">

import { storeToRefs } from "pinia";
import { onMounted, ref, watch } from "vue";


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
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';


import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog'


import { PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev, PaginationRoot } from 'reka-ui'


import Badge from "@/components/ui/badge/Badge.vue";
import Card from "@/components/shared/Card.vue";

import PatientRegistration from "@/components/receptionist/PatientRegistration.vue";
import AddnewAppoinment from "@/components/receptionist/AddnewAppoinment.vue";

/*state*/
import usePatientStore from "@/store/patient";
import useDoctorStore from "@/store/doctor";
import DoubleLeft from "@/components/Global/DoubleLeft.vue";
import Left from "@/components/Global/Left.vue";
import DoubleRight from "@/components/Global/DoubleRight.vue";
import Right from "@/components/Global/Right.vue";
import PatientCard from "@/components/receptionist/PatientCard.vue";

const patientStore = usePatientStore();
const doctorStore = useDoctorStore();

const { patients, searchKeyword, links, metaKeyword,
  activePatientCount, deactivePatientCount,
  todaysPatientCount, thisMonthPatientCount,
  patientRecordeHolderCount, patientProfile } = storeToRefs(patientStore);

const { retrievePatients, registerNewPatient, retrievePatient,
  updatePatientInfo, updatePatientKeepRecordsStatus,
  retrievePatientCounts, getPatientList, resetForm } = patientStore;
const { retrieveDoctors } = doctorStore;

let perPage = ref<number>(10);


watch(perPage, (newValue) => {
  retrievePatients(newValue);
  getPatientList(1, newValue);
});

watch(searchKeyword, () => {
  retrievePatients(perPage.value);
});

const onPageChange = (page: number) => {
  patientStore.getPatientList(page);
};

let printPatientCard = () => {
  window.print();
};

onMounted(async () => {
  await retrieveDoctors();
  await retrievePatients(perPage.value);
  await retrievePatientCounts();
  await getPatientList();
});



</script>

<template>
  <section class="w-full">

    <div class="w-full flex justify-between items-center py-10">
      <h1 class="text-2xl font-bold">Patient Management</h1>
    </div>

    <div class="w-full mb-20">
      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card title="Todays Patients" iconId="calendar-icon" :count="todaysPatientCount" />
        <Card title="New This Month" iconId="calendar-icon" :count="thisMonthPatientCount" />
        <Card title="Active Patients" iconId="shield-active-icon" :count="activePatientCount" />
        <Card title="Deactive Patient" iconId="shield-deactive-icon" :count="deactivePatientCount" />
        <Card title="Patients with Records" iconId="records-icon" :count="patientRecordeHolderCount" />
      </div>
    </div>


    <div class="w-full flex-col md:flex-row flex justify-between items-center mt-2 mb-3.5 pb-2">
      <h1 class="text-2xl font-semibold">Find Patients</h1>
      <div class="flex flex-wrap gap-1.5">

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="deactive">
                Deactive
              </SelectItem>
              <SelectItem value="active">
                Active
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button class="justify-self-end">+ Export</Button>

        <Sheet>
          <SheetTrigger as-child>
            <Button variant="outline" @click="resetForm">
              + Add New Patient
            </Button>
          </SheetTrigger>
          <SheetContent class="sm:max-w-md">
            <SheetHeader>
              <SheetTitle>Patient Registration</SheetTitle>
              <SheetDescription>
              </SheetDescription>
            </SheetHeader>
            <PatientRegistration class="overflow-y-auto" />

            <SheetFooter>
              <Button type="submit" @click="registerNewPatient">
                Register Patient
              </Button>
              <SheetClose as-child>
                <Button variant="outline">
                  Close
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>

      </div>
    </div>


    <Input placeholder="Search by Patient id ,patien name" v-model="searchKeyword" type="text"
      @update:model-value="retrievePatients(perPage)" />

    <div class="table-container">
      <Table class="caption-top mt-5 ">
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
            <TableHead class="text-gray-800">Keep Records</TableHead>
            <TableHead class="text-gray-800 text-right">Blood Group</TableHead>
            <TableHead class="text-left text-gray-800">
              Allergies
            </TableHead>
            <TableHead class="text-right text-gray-800">
              Gender
            </TableHead>
            <TableHead class="text-right text-gray-800">
              Admitted
            </TableHead>
            <TableHead class="text-left text-gray-800">
              Address
            </TableHead>
            <TableHead class="text-left text-gray-800">
              Created By
            </TableHead>
            <TableHead class="text-left text-gray-800">
              Bill
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
            <TableCell class="p-3">
              <Badge variant="outline" v-if="patient.keep_records === 1" class="bg-blue-500 text-white">Yes</Badge>
              <Badge variant="destructive" v-else>No</Badge>
              <div class="mt-2" v-if="Number(patient.keep_records) === 0">
                <Select v-model="patient.keep_records"
                  @update:modelValue="updatePatientKeepRecordsStatus(patient.id, Number(patient.keep_records) === 1)">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                  <SelectContent class="max-h-72 overflow-y-auto">
                    <SelectGroup>
                      <SelectLabel>Records Status</SelectLabel>
                      <SelectItem value="1">Yes</SelectItem>
                      <SelectItem value="0">No</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </TableCell>
            <TableCell class="p-3 text-center">
              <Badge v-if="patient.blood_group === 'O-'" variant="destructive">{{ patient.blood_group }}</Badge>
              <span v-else>{{ patient.blood_group }}</span>
            </TableCell>
            <TableCell class="text-left p-3">
              {{ patient.allergies }}
            </TableCell>
            <TableCell class="text-right p-3 capitalize">
              {{ patient.sex }}
            </TableCell>
            <TableCell class="text-right p-3">
              <Badge v-if="patient.is_admitted === 1" variant="default">Yes</Badge>
              <Badge v-if="patient.is_admitted === 0" variant="destructive">No</Badge>

            </TableCell>
            <TableCell class="text-left p-3">
              {{ patient.address }}
            </TableCell>
            <TableCell class="text-center p-3">
              <div class="text-left">
                <p class="text-md font-semibold"> {{ patient.created_by?.name }}</p>
                <p> {{ patient.created_by?.role }}</p>
              </div>
            </TableCell>
            <TableCell class="text-left ">
              <span v-for="bill in patient.bills">
                {{ Math.floor(bill.total) }}
              </span>
            </TableCell>
            <TableCell class="text-left p-3">
              <div class="flex gap-1">

                <Sheet>
                  <SheetTrigger as-child>
                    <Button variant="secondary" class="w-5 h-5 bg-green-700 hover:bg-green-800"
                      @click="retrievePatient(patient.id)">
                      <svg class="w-2.5 h-2.5 text-white">
                        <use href="#square-pen-icon" />
                      </svg>
                    </Button>
                  </SheetTrigger>
                  <SheetContent class="sm:max-w-md">
                    <SheetHeader>
                      <SheetTitle>Update Patient</SheetTitle>
                      <SheetDescription>
                      </SheetDescription>
                    </SheetHeader>
                    <PatientRegistration class="overflow-y-auto" />

                    <SheetFooter>
                      <Button type="submit" @click="updatePatientInfo(patient.id)">
                        Update Patient
                      </Button>
                      <SheetClose as-child>
                        <Button variant="outline">
                          Close
                        </Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>


                <Sheet>
                  <SheetTrigger>
                    <Button variant="secondary" class="w-5 h-5 bg-purple-700 hover:bg-purple-800">
                      <svg class="w-2.5 h-2.5 text-white">
                        <use href="#plus-icon" />
                      </svg>
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Appointment of Patient</SheetTitle>
                      <SheetDescription>
                        <AddnewAppoinment />
                      </SheetDescription>
                    </SheetHeader>
                    <SheetFooter>
                      <Button type="submit" @click="updatePatientInfo(patient.id)">
                        Update Patient
                      </Button>
                      <SheetClose as-child>
                        <Button variant="outline">
                          Close
                        </Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>

                <Sheet>
                  <SheetTrigger>
                    <Button variant="secondary" class="w-5 h-5 bg-purple-700 hover:bg-purple-800">
                      <svg class="w-2.5 h-2.5 text-white">
                        <use href="#component-icon" />
                      </svg>
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Are you absolutely sure?</SheetTitle>
                      <SheetDescription>
                        <AddnewAppoinment />
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>

                <Dialog size="lg">

                  <DialogTrigger as-child>
                    <Button variant="outline" class="w-5 h-5" @click="retrievePatient(patient.id)">
                      <svg class="w-2.5 h-2.5">
                        <use href="#expand-icon" />
                      </svg>
                    </Button>
                  </DialogTrigger>
                  <DialogContent class="sm:max-w-4xl px-6">

                    <div class="max-h-[80vh] overflow-y-auto w-full">
                      <PatientCard :patientInfo="patientProfile" v-if="patientProfile" />
                    </div>
                    <DialogFooter>
                      <DialogClose as-child>
                        <Button variant="outline">
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button type="submit" variant="outline"
                        class="bg-[#2a5caa] hover:bg-[#1d4c97] text-white hover:text-white" @click="printPatientCard">
                        <svg class="w-2.5 h-2.5">
                          <use href="#print-icon" />
                        </svg> Print
                      </Button>
                    </DialogFooter>
                  </DialogContent>

                </Dialog>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    <div class="w-full flex justify-between items-center">


      <Select v-model="perPage" @update:model-value="retrievePatients(perPage)">
        <SelectTrigger>
          <SelectValue placeholder="Per Page" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Per Page</SelectLabel>
            <SelectItem value="10">
              10
            </SelectItem>
            <SelectItem value="20">
              20
            </SelectItem>
            <SelectItem value="25">
              25
            </SelectItem>
            <SelectItem value="30">
              30
            </SelectItem>
            <SelectItem value="50">
              50
            </SelectItem>
            <SelectItem value="100">
              100
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>



      <PaginationRoot :total="metaKeyword?.total || 0" :items-per-page="metaKeyword?.per_page || 10"
        :default-page="metaKeyword?.current_page || 1" :sibling-count="1" show-edges @update:page="onPageChange">
        <PaginationList v-slot="{ items }" class="flex items-center gap-1 text-stone-700 dark:text-white">

          <!-- FIRST -->
          <PaginationFirst class="btn">
            <DoubleLeft />
          </PaginationFirst>

          <!-- PREV -->
          <PaginationPrev :disabled="!links.value?.prev"
            class="w-9 h-9 flex items-center justify-center bg-transparent hover:bg-white dark:hover:bg-stone-700/70 transition mr-4 disabled:opacity-50 rounded-lg">
            <Left />
          </PaginationPrev>

          <!-- PAGES -->
          <template v-for="(page, index) in items" :key="index">
            <PaginationListItem v-if="page.type === 'page'" :value="page.value"
              class="w-9 h-9 border dark:border-stone-800 rounded-lg data-[selected]:!bg-white data-[selected]:text-blackA11 shadow-sm hover:bg-white dark:hover:bg-stone-700/70 transition">
              {{ page.value }}
            </PaginationListItem>

            <PaginationEllipsis v-else class="w-9 h-9 flex items-center justify-center">…</PaginationEllipsis>
          </template>

          <!-- NEXT -->
          <PaginationNext :disabled="!links.value?.next"
            class="w-9 h-9 flex items-center justify-center bg-transparent hover:bg-white dark:hover:bg-stone-700/70 transition ml-4 disabled:opacity-50 rounded-lg">
            <Right />
          </PaginationNext>

          <!-- LAST -->
          <PaginationLast
            class="w-9 h-9 flex items-center justify-center bg-transparent hover:bg-white dark:hover:bg-stone-700/70 transition disabled:opacity-50 rounded-lg">
            <DoubleRight />
          </PaginationLast>

        </PaginationList>
      </PaginationRoot>

    </div>
  </section>

</template>

<style scoped>
.table-container {
  max-height: 370px;
  overflow-y: auto;
}
</style>