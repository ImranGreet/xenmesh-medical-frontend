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
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button/Button.vue";
import Badge from "@/components/ui/badge/Badge.vue";
import Card from "@/components/shared/Card.vue";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose,
} from "@/components/ui/sheet";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'

import PatientRegistration from "@/components/receptionist/PatientRegistration.vue";
import AddnewAppoinment from "@/components/receptionist/AddnewAppoinment.vue";
import useDoctorStore from "@/store/doctor";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import DoctorSchedules from "@/components/receptionist/doctorSchedules.vue";

const doctorStore = useDoctorStore();
const { docotrSchedules } = storeToRefs(doctorStore);
const { retrieveDoctorSchedule } = doctorStore;
onMounted(async () => {
    await retrieveDoctorSchedule();
});
</script>

<template>
    <section class="w-full">

        <!-- Header -->
        <div class="flex justify-between items-center py-10">
            <h1 class="text-2xl font-bold">Doctor Schedules Management</h1>
        </div>

        <!-- Stat Cards -->
        <div class="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card title="Todays Doctors" iconId="calendar-icon" :count="12" />
            <Card title="New This Month" iconId="calendar-icon" :count="56" />
            <Card title="Active Doctors" iconId="shield-active-icon" :count="230" />
            <Card title="Deactive Doctors" iconId="shield-deactive-icon" :count="14" />
        </div>

        <!-- Filters -->
        <div class="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
            <h2 class="text-xl font-semibold">Find Doctor</h2>

            <div class="flex gap-2 flex-wrap">
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Doctor" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Doctors</SelectLabel>
                            <SelectItem value="1">Dr. Imran Hossain</SelectItem>
                            <SelectItem value="2">Dr. Mahmud Hasan</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                </Select>

                <Button>+ Export</Button>

                <Sheet>
                    <SheetTrigger as-child>
                        <Button variant="outline">+ Add New Patient</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>DoctorRegistration</SheetTitle>
                        </SheetHeader>
                        <PatientRegistration />
                        <SheetFooter>
                            <Button>Register</Button>
                            <SheetClose as-child>
                                <Button variant="outline">Close</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </div>

        <!-- Search -->
        <Input placeholder="Search patient..." />

        <!-- Table -->
        <div class="table-container mt-5">
            <Table>
                <TableCaption class="text-lg font-semibold">
                    Registered Doctors
                </TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Schedules</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Age</TableHead>
                        <TableHead>Blood</TableHead>
                        <TableHead>Gender</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow v-for="schedule in docotrSchedules" :key="schedule.id">
                        <TableCell>#P-1021</TableCell>
                        <TableCell>{{ schedule.doctor.name }}</TableCell>
                        <TableCell>
                            <Badge class="bg-blue-500">Active</Badge>
                        </TableCell>
                        <TableCell>
                            <Dialog>

                                <DialogTrigger as-child>
                                    <Button variant="outline">
                                        Schedules
                                    </Button>
                                </DialogTrigger>
                                <DialogContent class="sm:max-w-[650px]">
                                    <DialogHeader>
                                        <DialogTitle>See Schedules</DialogTitle>
                                        <DialogDescription>
                                            See The schedule details and available time slots.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div class="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">

                                        <!-- Doctor Info -->
                                        <div class="border-b pb-4">
                                            <h2 class="text-2xl font-semibold text-gray-800">
                                                {{ schedule.doctor.name }}
                                            </h2>
                                            <p class="text-gray-600 mt-1">
                                                {{ schedule.doctor.qualification }}
                                            </p>
                                            <p class="text-sm text-gray-500 mt-1">
                                                {{ schedule.doctor.specialization }}
                                            </p>
                                        </div>

                                        <!-- Schedules -->
                                        <DoctorSchedules :schedules="schedule.schedules"></DoctorSchedules>
                                    </div>

                                    <DialogFooter>
                                        <DialogClose as-child>
                                            <Button variant="outline">
                                                Cancel
                                            </Button>
                                        </DialogClose>

                                    </DialogFooter>
                                </DialogContent>

                            </Dialog>

                        </TableCell>
                        <TableCell>017xxxxxxxx</TableCell>
                        <TableCell>28</TableCell>
                        <TableCell>O+</TableCell>
                        <TableCell>Male</TableCell>
                        <TableCell>Dhaka</TableCell>
                        <TableCell>
                            <div class="flex gap-1">
                                <Sheet>
                                    <SheetTrigger as-child>
                                        <Button size="sm">Edit</Button>
                                    </SheetTrigger>
                                    <SheetContent>
                                        <PatientRegistration />
                                    </SheetContent>
                                </Sheet>

                                <Sheet>
                                    <SheetTrigger as-child>
                                        <Button size="sm" variant="secondary">+</Button>
                                    </SheetTrigger>
                                    <SheetContent>
                                        <AddnewAppoinment />
                                    </SheetContent>
                                </Sheet>

                                <Dialog>
                                    <DialogTrigger as-child>
                                        <Button size="sm" variant="outline">View</Button>
                                    </DialogTrigger>
                                    <DialogContent class="sm:max-w-4xl">
                                        <DialogFooter>
                                            <DialogClose as-child>
                                                <Button variant="outline">Close</Button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
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
    max-height: 380px;
    overflow-y: auto;
}
</style>
