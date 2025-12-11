<script setup lang="ts">
import { onMounted, ref } from "vue";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from '@/components/ui/button';

import useDoctorStore from "@/store/doctor";
import { storeToRefs } from "pinia";
import useQRcodeStore from "@/store/module/publicaccess/qrcode";

const doctorStore = useDoctorStore();
const { doctors } = storeToRefs(doctorStore);
const qrcodePublic = useQRcodeStore();

const { retrieveDoctors } = doctorStore;
const {createPublicAppoinmnet} = qrcodePublic;


// Example patient data
const patient = {
    name: "Faria Rahman",
    age: "26",
    dob: "1999-04-12",
    address: "Dhanmondi, Dhaka",
};



const doctorSchedule = [
    { id: "morning", label: "Morning (9:00 AM - 12:00 PM)" },
    { id: "afternoon", label: "Afternoon (1:00 PM - 4:00 PM)" },
    { id: "evening", label: "Evening (5:00 PM - 8:00 PM)" },
];

const selectedDoctor = ref("");

onMounted(async ()=>{
    await retrieveDoctors();
})
</script>

<template>
    <div class="w-full max-w-md mx-auto p-4 space-y-5">

        <!-- 🌿 Hospital Info (Top) -->
        <Card class="rounded-2xl shadow-sm">
            <CardContent class="p-4 space-y-2 text-sm">

                <p class="text-lg font-semibold text-center">
                    Green Valley Medical Center Ltd.
                </p>

                <div class="space-y-1">
                    <p><span class="font-semibold">Hotline:</span> 10633</p>
                    <p><span class="font-semibold">Phone Number:</span> 09666700100</p>
                    <p><span class="font-semibold">Customer Care:</span> 01313777600</p>
                    <p><span class="font-semibold">24hrs Emergency:</span> +8801712345678</p>
                </div>

            </CardContent>
        </Card>

        <!-- 👤 Patient Info (Readable Text Only) -->
        <Card class="rounded-2xl shadow-sm">
            <CardContent class="pt-4 space-y-4">

                <div class="space-y-1">
                    <Label>Patient Name</Label>
                    <p class="font-medium">{{ patient.name }}</p>
                </div>

                <div class="space-y-1">
                    <Label>Age</Label>
                    <p class="font-medium">{{ patient.age }}</p>
                </div>

                <div class="space-y-1">
                    <Label>Date of Birth</Label>
                    <p class="font-medium">{{ patient.dob }}</p>
                </div>

                <div class="space-y-1">
                    <Label>Address</Label>
                    <p class="font-medium">{{ patient.address }}</p>
                </div>

            </CardContent>
        </Card>


        <Card>
            <CardContent>

                <!-- 🩺 Doctor Select -->
                <div class="space-y-1">
                    <Label>Select Doctor</Label>

                    <Select v-model="selectedDoctor">
                        <SelectTrigger class="w-full">
                            <SelectValue placeholder="Choose a doctor" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem v-for="doc in doctors" :key="doc.id" :value="doc.id">
                                {{ doc.name }}
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>

        <!-- 🕘 Doctor Schedule -->
        <Card v-if="selectedDoctor" class="rounded-2xl shadow-sm">
            <CardContent class="pt-4 space-y-3">

                <Label>Available Schedule</Label>

                <div class="space-y-3">
                    <div v-for="slot in doctorSchedule" :key="slot.id" class="flex items-center gap-2">
                        <input type="radio" :name="'slot'" class="h-4 w-4" />
                        <span>{{ slot.label }}</span>
                    </div>
                </div>
                <Button  class="w-full" @click="createPublicAppoinmnet">Submit Appointment</Button>
            </CardContent>
        </Card>

    </div>
</template>
