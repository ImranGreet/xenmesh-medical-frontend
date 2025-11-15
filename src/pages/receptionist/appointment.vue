<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';


import Badge from "@/components/ui/badge/Badge.vue";
import Button from "@/components/ui/button/Button.vue";
import AddnewAppoinment from "@/components/receptionist/AddnewAppoinment.vue";
import Card from "@/components/shared/Card.vue";


import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

/*store or pinia*/

import useAppoinmnetStore from "@/store/appoinments";
import useStatusStore from "@/store/status";
import useDoctorStore from "@/store/doctor";



const appoinmentStore = useAppoinmnetStore();
const statusStore = useStatusStore();
const doctorStore = useDoctorStore();

const { statuses } = storeToRefs(statusStore);
const { appointments } = storeToRefs(appoinmentStore);
const { doctors } = storeToRefs(doctorStore);


const { retrieveAppoinments } = appoinmentStore;
const { retrieveStatuses } = statusStore;
const { retrieveDoctors } = doctorStore;


onMounted(async () => {
  await retrieveAppoinments();
  await retrieveStatuses();
  await retrieveDoctors();
})


</script>

<template>
  <section class="w-full">




    <div class="w-full flex justify-between items-center py-10">
      <h1 class="text-2xl font-bold">Appointment Management </h1>

      <Dialog>
        <DialogTrigger as-child>
          <Button class="capitalize">
            + New Appoinment
          </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-xl block">
          <DialogHeader>
            <DialogTitle>Patient Appoinment</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <AddnewAppoinment />
          <DialogFooter>
            <Button type="submit">
              Add Patient </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>


    <div class="w-full mb-20">
      <div class="w-full flex flex-wrap lg:flex-nowrap gap-3.5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>


    <div class="w-full flex flex-col lg:flex-row gap-3.5 lg:gap-0 justify-between items-center mt-2 mb-3.5 pb-2">
      <h1 class="text-2xl font-semibold">Find Appoinments</h1>
      <div class="flex flex-wrap gap-1.5">
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
              <SelectLabel>Days</SelectLabel>
              <SelectItem value="apple">
                10
              </SelectItem>
              <SelectItem value="apple">
                20
              </SelectItem>
              <SelectItem value="apple">
                30
              </SelectItem>
              <SelectItem value="apple">
                40
              </SelectItem>
              <SelectItem value="apple">
                60
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
              <SelectLabel>Doctors</SelectLabel>
              <SelectItem value="apple" v-for="doctor in doctors">
                {{ doctor.name }}
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
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="{{ status.id }}" v-for="status in statuses">
                {{ status }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button>+ Export</Button>
      </div>
    </div>





    <Tabs default-value="account" class="w-full">

      <TabsList class="h-10 p-6">
        <TabsTrigger value="account" class="p-4">
          Account
        </TabsTrigger>
        <TabsTrigger value="password" class="p-4">
          Password
        </TabsTrigger>
        <TabsTrigger value="appo" class="p-4">
          Appoinment
        </TabsTrigger>
      </TabsList>

      <Input class="my-3" />
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">
        Change your password here.
      </TabsContent>

      <TabsContent value="appo">
        <section>
          <div class="h-[600px] scroll-auto overflow-y-auto">

            <Table class="caption-top">
              <TableCaption class="text-2xl font-bold text-gray-700 border-b pb-1.5">A list of your recent invoices.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead class="w-[100px]">
                    Invoice
                  </TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead class="text-right">
                    Amount
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow v-for="appoinment in appointments" :key="appoinment.id">
                  <TableCell class="font-medium p-3">
                    {{ appoinment.status }} </TableCell>
                  <TableCell class="p-3">
                    <Badge variant="destructive">{{ appoinment.status }}</Badge>
                  </TableCell>
                  <TableCell class="p-3">{{ appoinment.appointment_date }}</TableCell>
                  <TableCell class="text-right p-3">
                    {{ appoinment.reason }} </TableCell>
                </TableRow>
              </TableBody>
            </Table>

          </div>

          <div class="flex gap-2">

            <Select>
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
                </SelectGroup>
              </SelectContent>
            </Select>

            <Pagination v-slot="{ page }" :items-per-page="10" :total="30" :default-page="2" class="my-2">
              <PaginationContent v-slot="{ items }">
                <PaginationPrevious />

                <template v-for="(item, index) in items" :key="index">
                  <PaginationItem v-if="item.type === 'page'" :value="item.value" :is-active="item.value === page">
                    {{ item.value }}
                  </PaginationItem>
                </template>

                <PaginationEllipsis :index="4" />

                <PaginationNext />
              </PaginationContent>
            </Pagination>
          </div>
        </section>
      </TabsContent>
    </Tabs>
  </section>



</template>