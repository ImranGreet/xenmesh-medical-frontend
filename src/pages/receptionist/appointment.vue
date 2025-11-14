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
} from "@/components/ui/dialog"



import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Badge from "@/components/ui/badge/Badge.vue";
import Button from "@/components/ui/button/Button.vue";
import AddnewAppoinment from "@/components/receptionist/AddnewAppoinment.vue";



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

     <div class="w-full flex gap-3.5">
            <div class="rounded-xl border bg-card text-card-foreground shadow">
                <div class="gap-y-1.5 p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                    <h3 class="tracking-tight text-sm font-medium"> Subscriptions </h3><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        class="h-4 w-4 text-muted-foreground">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>
                <div class="p-6 pt-0">
                    <div class="text-2xl font-bold"> +2350 </div>
                    <p class="text-xs text-muted-foreground"> +180.1% from last month </p>
                </div>
            </div>
            <div class="rounded-xl border bg-card text-card-foreground shadow">
                <div class="gap-y-1.5 p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                    <h3 class="tracking-tight text-sm font-medium"> Subscriptions </h3><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        class="h-4 w-4 text-muted-foreground">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>
                <div class="p-6 pt-0">
                    <div class="text-2xl font-bold"> +2350 </div>
                    <p class="text-xs text-muted-foreground"> +180.1% from last month </p>
                </div>
            </div>
        </div>

        
    <div class="w-full flex justify-between items-center py-10">
      <h1 class="text-2xl font-bold">Appointment Management</h1>
      
          <Dialog>
            <DialogTrigger as-child>
              <Button>
                + Add New Patient
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