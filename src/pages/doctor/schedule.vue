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
</script>

<template>
  <div class="w-full min-h-screen flex flex-col justify-center items-center">
    <Accordion type="single" collapsible class="w-2xl mx-auto border px-5 py-8 rounded-lg" default-value="item-1">
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
            <Button class="bg-green-500 hover:bg-green-400"> <svg class="w-2.5 h-2.5 text-white">
                <use href="#plus-icon" />
              </svg> Add More </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent>
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p class="mt-2">
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent>
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you're not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p class="mt-2">
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
