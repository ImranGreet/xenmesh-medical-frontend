<script setup lang="ts">
import Card from '@/components/shared/Card.vue';
import Button from '@/components/ui/button/Button.vue';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

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
]



</script>

<template>
    <section>
        <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div class="my-20">
            <div class="flex gap-3 flex-wrap md:flex-nowrap">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>

        <div class="w-full flex flex-col md:flex-row gap-10">
            <div class="w-full border rounded-lg p-5">
                <div class="flex justify-between items-center border-b pb-2">
                    <h2 class="text-xl font-bold tracking-tight">Appoinment</h2>

                    <Button>View All</Button>
                </div>
                <Table>
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
                            <TableCell class="font-medium">
                                {{ invoice.invoice }}
                            </TableCell>
                            <TableCell>{{ invoice.paymentStatus }}</TableCell>
                            <TableCell>{{ invoice.paymentMethod }}</TableCell>
                            <TableCell class="text-right">
                                {{ invoice.totalAmount }}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div class="w-full border rounded-lg p-5">
                <div class="flex justify-between items-center border-b pb-2">
                    <h2 class="text-xl font-bold tracking-tight">Patients List</h2>

                    <Button>View All</Button>
                </div>
                <Table>
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
                            <TableCell class="font-medium">
                                {{ invoice.invoice }}
                            </TableCell>
                            <TableCell>{{ invoice.paymentStatus }}</TableCell>
                            <TableCell>{{ invoice.paymentMethod }}</TableCell>
                            <TableCell class="text-right">
                                {{ invoice.totalAmount }}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>

        <!-- chart -->
        <div class="w-full my-10">
            <h2 class="text-3xl font-bold tracking-tight">Budget</h2>

        </div>

    </section>
</template>
