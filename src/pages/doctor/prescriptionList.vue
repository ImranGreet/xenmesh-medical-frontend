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
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";



import { Input } from "@/components/ui/input";


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


import { onMounted } from "vue";
import usePrescriptionStore from "@/store/prescription";
import { storeToRefs } from "pinia";
const prescriptionStore = usePrescriptionStore();
const { prescriptions } = storeToRefs(prescriptionStore);
const { retrievePrescriptions } = prescriptionStore

onMounted(async () => {
    await retrievePrescriptions();
});


const invoices = [
    {
        invoice: "INV001 INV001 INV001 INV001 INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]
</script>

<template>
    <section class="w-full">




        <div class="w-full flex justify-between items-center py-10">
            <h1 class="text-2xl font-bold">Prescription Management </h1>

            <Dialog>
                <DialogTrigger as-child>
                    <Button class="capitalize">
                        + create prescription
                    </Button>
                </DialogTrigger>
                <DialogContent class="sm:max-w-xl block">
                    <DialogHeader>
                        <DialogTitle class="capitalize">Generate A prescription</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <AddnewAppoinment />
                    <DialogFooter>
                        <Button type="submit">
                            Generate Prescription </Button>
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
            <h1 class="text-2xl font-semibold">Find prescription</h1>
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




        <Input placeholder="Patient Name,Patient Id" />

        <Table class="caption-top mt-10">
            <TableCaption>A list of your recent prescription.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead >
                        Patient Id
                    </TableHead>
                    <TableHead>Patient Name</TableHead>
                    <TableHead class="capitalize">diagnosis</TableHead>
                    <TableHead class="text-left">
                        Notes
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="prescription in prescriptions" :key="prescription.id">
                    <TableCell class="font-medium p-3">
                        {{ prescription.patient.generated_patient_id }}
                    </TableCell>

                    <TableCell class="p-3">
                        {{ prescription.patient.patient_name }}
                    </TableCell>
                    <TableCell class="p-3">
                        {{ prescription.diagnosis }}
                    </TableCell>
                    <TableCell class="p-3">
                        {{ prescription.notes }}
                    </TableCell>

                </TableRow>
            </TableBody>
        </Table>


    </section>



</template>