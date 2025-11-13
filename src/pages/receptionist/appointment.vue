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



import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Badge from "@/components/ui/badge/Badge.vue";
import Button from "@/components/ui/button/Button.vue";

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
      <h1 class="text-2xl font-bold">Appointment Management</h1>
      <div>
        <Button>+ New Appoinment</Button>
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
          <div class="w-full flex justify-between items-center mt-2 mb-3.5 border-b pb-2">
            <h1 class="text-2xl font-semibold">Find Appoinments</h1>
            <div>
              <Button>+ Export</Button>
            </div>
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
                <TableCell class="font-medium p-3">
                  {{ invoice.invoice }}
                </TableCell>
                <TableCell class="p-3">
                  <Badge variant="destructive" v-if="invoice.paymentStatus === `Unpaid`">{{ invoice.paymentStatus }}
                  </Badge>
                  <Badge variant="outline" v-if="invoice.paymentStatus === `Paid`">{{ invoice.paymentStatus }}</Badge>
                  <Badge variant="secondary" v-if="invoice.paymentStatus === `Pending`">{{ invoice.paymentStatus }}
                  </Badge>
                </TableCell>
                <TableCell class="p-3">{{ invoice.paymentMethod }}</TableCell>
                <TableCell class="text-right p-3">
                  {{ invoice.totalAmount }}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </TabsContent>
    </Tabs>
  </section>



</template>