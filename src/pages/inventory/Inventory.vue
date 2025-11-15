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
} from '@/components/ui/select'


import Button from "@/components/ui/button/Button.vue";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import Badge from "@/components/ui/badge/Badge.vue";
import Card from "@/components/shared/Card.vue";

import PatientRegistration from "@/components/receptionist/PatientRegistration.vue";





const invoices = [
    {
        invoice: "INV001",
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
            <h1 class="text-2xl font-semibold">Inventory</h1>
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



        <div>

            <div class="w-full flex justify-between items-center">
                <h2 class="text-2xl font-bold">All Medicine Inventory Items</h2>
                <p>Showing 10 of 428 items</p>
            </div>
            <Table class="caption-top mt-10">
                <TableCaption>A list of your recent invoices.</TableCaption>
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
                    <TableRow v-for="invoice in invoices" :key="invoice.invoice">
                        <TableCell class="font-medium p-3">
                            {{ invoice.invoice }}
                        </TableCell>

                        <TableCell class="p-3">
                            <Badge variant="destructive" v-if="invoice.paymentStatus === `Unpaid`">{{
                                invoice.paymentStatus }}
                            </Badge>
                            <Badge variant="outline" v-if="invoice.paymentStatus === `Paid`">{{ invoice.paymentStatus }}
                            </Badge>
                            <Badge variant="secondary" v-if="invoice.paymentStatus === `Pending`">{{
                                invoice.paymentStatus }}
                            </Badge>
                        </TableCell>
                        <TableCell class="p-3">{{ invoice.paymentMethod }}</TableCell>
                        <TableCell class="text-right p-3">
                            {{ invoice.totalAmount }}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
        <div class="my-5">

            <div class="w-full flex justify-between items-center">
                <h2 class="text-2xl font-bold">All Labratory  Inventory Items</h2>
                <p>Showing 10 of 428 items</p>
            </div>
            <Table class="caption-top mt-10">
                <TableCaption>A list of your recent invoices.</TableCaption>
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
                    <TableRow v-for="invoice in invoices" :key="invoice.invoice">
                        <TableCell class="font-medium p-3">
                            {{ invoice.invoice }}
                        </TableCell>

                        <TableCell class="p-3">
                            <Badge variant="destructive" v-if="invoice.paymentStatus === `Unpaid`">{{
                                invoice.paymentStatus }}
                            </Badge>
                            <Badge variant="outline" v-if="invoice.paymentStatus === `Paid`">{{ invoice.paymentStatus }}
                            </Badge>
                            <Badge variant="secondary" v-if="invoice.paymentStatus === `Pending`">{{
                                invoice.paymentStatus }}
                            </Badge>
                        </TableCell>
                        <TableCell class="p-3">{{ invoice.paymentMethod }}</TableCell>
                        <TableCell class="text-right p-3">
                            {{ invoice.totalAmount }}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>

        <div class="my-5">

            <div class="w-full flex justify-between items-center">
                <h2 class="text-2xl font-bold">All Store Inventory Items</h2>
                <p>Showing 10 of 428 items</p>
            </div>
            <Table class="caption-top mt-10">
                <TableCaption>A list of your recent invoices.</TableCaption>
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
                    <TableRow v-for="invoice in invoices" :key="invoice.invoice">
                        <TableCell class="font-medium p-3">
                            {{ invoice.invoice }}
                        </TableCell>

                        <TableCell class="p-3">
                            <Badge variant="destructive" v-if="invoice.paymentStatus === `Unpaid`">{{
                                invoice.paymentStatus }}
                            </Badge>
                            <Badge variant="outline" v-if="invoice.paymentStatus === `Paid`">{{ invoice.paymentStatus }}
                            </Badge>
                            <Badge variant="secondary" v-if="invoice.paymentStatus === `Pending`">{{
                                invoice.paymentStatus }}
                            </Badge>
                        </TableCell>
                        <TableCell class="p-3">{{ invoice.paymentMethod }}</TableCell>
                        <TableCell class="text-right p-3">
                            {{ invoice.totalAmount }}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </section>





</template>