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




import Badge from "@/components/ui/badge/Badge.vue";
import Card from "@/components/shared/Card.vue";


/*state*/
import useDoctorStore from "@/store/doctor";
import router from "@/routes";

const doctorStore = useDoctorStore();

const { retrieveDoctors } = doctorStore;

const { doctors } = storeToRefs(doctorStore);

let seeDoctorSchedule = function (doctorID: number) {
  router.push({ name: 'doctor-schedule-list', params: { id: doctorID } })
}

onMounted(async () => {
  await retrieveDoctors();
});



</script>

<template>
  <section class="w-full">


    <div class="w-full flex justify-between items-center py-10">
      <h1 class="text-2xl font-bold">Doctor Management</h1>


    </div>


    <div class="w-full mb-20">
      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card title="Todays Patients" iconId="calendar-icon" />
        <Card title="New This Month" iconId="calendar-icon" />
        <Card title="Active Patients" iconId="shield-active-icon" />
        <Card title="Deactive Patient" iconId="shield-deactive-icon" />
        <Card title="Patients with Records" iconId="records-icon" />
      </div>
    </div>


    <div class="w-full flex-col md:flex-row flex justify-between items-center mt-2 mb-3.5 pb-2">
      <h1 class="text-2xl font-semibold">Find Doctor</h1>
      <div class="flex flex-wrap gap-1.5">

        <Button class="justify-self-end">+ Export</Button>

        <Sheet>
          <SheetTrigger as-child>
            <Button variant="outline">
              + Add New Doctor
            </Button>
          </SheetTrigger>
          <SheetContent class="sm:max-w-md">
            <SheetHeader>
              <SheetTitle>Patient Registration</SheetTitle>
              <SheetDescription>
              </SheetDescription>
            </SheetHeader>

            <SheetFooter>
              <Button type="submit">
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


    <Input placeholder="Search by Patient id ,patien name" type="text" />

    <div class="table-container">
      <Table class="caption-top mt-5 ">
        <TableCaption class="text-xl font-semibold border-b pb-2">A list of Registered Patients.</TableCaption>
        <TableHeader class="font-bold text-md ">
          <TableRow>

            <TableHead class="text-gray-800">
              Doctor Name
            </TableHead>
            <TableHead class="text-gray-800">Email</TableHead>
            <TableHead class="text-gray-800">User Name</TableHead>
            <TableHead class="text-gray-800">Expereinces</TableHead>
            <TableHead class="text-gray-800">Department</TableHead>
            <TableHead class="text-left text-gray-800">
              Appointment Fess
            </TableHead>

            <TableHead class="text-left text-gray-800">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="doctor in doctors" :key="doctor.id">
            <TableCell class="font-medium p-3">
              <span class="text-gray-500">{{ doctor.name }}</span>
            </TableCell>
            <TableCell class="font-medium p-3">
              {{ doctor.email }}
            </TableCell>

            <TableCell class="p-3">
              <Badge variant="default" class="bg-blue-500">{{ doctor.username }}</Badge>

            </TableCell>
            <TableCell class="p-3">{{ doctor.profile.experience_years }}</TableCell>
            <TableCell class="p-3">{{ doctor.profile.specialization }}</TableCell>
            <TableCell class="p-3">
              <Badge variant="outline" class="bg-red-500 text-white">5000</Badge>
            </TableCell>


            <TableCell class="text-left p-3">
              <div class="flex items-center gap-1">

                <Sheet>
                  <SheetTrigger as-child>
                    <Button variant="secondary" class="w-5 h-5 bg-green-700 hover:bg-green-800">
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

                    <SheetFooter>
                      <Button type="submit">
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
                      </SheetDescription>
                    </SheetHeader>
                    <SheetFooter>
                      <Button type="submit">
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
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>

                <Dialog size="lg">

                  <DialogTrigger as-child>
                    <Button variant="outline" class="w-5 h-5">
                      <svg class="w-2.5 h-2.5">
                        <use href="#expand-icon" />
                      </svg>
                    </Button>
                  </DialogTrigger>
                  <DialogContent class="sm:max-w-4xl px-6">


                    <DialogFooter>
                      <DialogClose as-child>
                        <Button variant="outline">
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button type="submit" variant="outline"
                        class="bg-[#2a5caa] hover:bg-[#1d4c97] text-white hover:text-white">
                        <svg class="w-2.5 h-2.5">
                          <use href="#print-icon" />
                        </svg> Print
                      </Button>
                    </DialogFooter>
                  </DialogContent>

                </Dialog>


                <Button variant="outline" class="w-5 h-5 bg-teal-700 hover:bg-teal-800 text-white hover:text-white"
                  @click="seeDoctorSchedule(doctor.id)">
                  <svg class="w-2.5 h-2.5">
                    <use href="#time-icon" />
                  </svg>
                </Button>


              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

  </section>

</template>

<style scoped>
.table-container {
  max-height: 370px;
  overflow-y: auto;
}
</style>