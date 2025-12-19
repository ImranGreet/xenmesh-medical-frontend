<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Button from "@/components/ui/button/Button.vue";
import { Card, CardContent } from "@/components/ui/card";
import useDoctorStore from '@/store/doctor';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router'; 
import { storeToRefs } from 'pinia';

const doctorStore = useDoctorStore();
const {doctorProfile} = storeToRefs(doctorStore);
const { retrieveDoctorByID } = doctorStore;
const route = useRoute(); 
const doctorId = route.params.id; 

onMounted(async () => {
  if (doctorId) {
    await retrieveDoctorByID(Number(doctorId));
  }
  console.log(doctorId,'so');
});

watch(
  () => route.params.id,
  async (newId) => {
    if (newId) {
      await retrieveDoctorByID(Number(newId));
    }
  }
);
</script>

<template>
  <div class="w-full min-h-screen flex flex-col justify-center items-center gap-y-5">
    <div v-if="doctorId" class="text-sm text-gray-500">
      Loading data for Doctor ID: {{ doctorId }}
    </div>
    
    <Card class="w-2xl rounded-2xl shadow-sm">
      <CardContent class="p-4 space-y-2 text-sm">
        <p class="text-lg font-semibold text-center">
          {{ doctorProfile.doctor_details.name }}
        </p>

        <div class="space-y-1">
          <p><span class="font-semibold">Hotline:</span> 10633</p>
          <p><span class="font-semibold">Phone Number:</span> 09666700100</p>
          <p><span class="font-semibold">Customer Care:</span> 01313777600</p>
          <p><span class="font-semibold">24hrs Emergency:</span> +8801712345678</p>
        </div>

      </CardContent>
    </Card>
    
    <Accordion type="single" collapsible class="w-2xl mx-auto border px-5 py-8 rounded-2xl" default-value="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Saturday</AccordionTrigger>
        <AccordionContent>
          <div class="w-full flex justify-between gap-8">
            <div class="w-full">
              <Label for="patient_name" class="font-semibold md:font-medium md:text-lg mb-2">From </Label>
              <Input placeholder="John Doe" class="mt-2 w-full" required type="time" id="appointment-time"
                name="appointment-time" min="09:00" max="18:00" />
            </div>
            <div class="w-full">
              <Label for="patient_name" class="font-semibold md:font-medium md:text-lg mb-2">To</Label>
              <Input placeholder="John Doe" class="mt-2 w-full" required type="time" id="appointment-time"
                name="appointment-time" min="09:00" max="18:00" />
            </div>
          </div>
          <div class="float-right py-2.5">
            <Button class="bg-green-500 hover:bg-green-400"> 
              <svg class="w-2.5 h-2.5 text-white">
                <use href="#plus-icon" />
              </svg> 
              Add More 
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
      
    </Accordion>
  </div>
</template>