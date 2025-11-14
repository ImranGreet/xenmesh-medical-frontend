<template>
  <div class="max-w-full mx-auto p-4 sm:p-6 bg-white rounded-2xl  space-y-4">
    <h2 class="text-xl font-semibold text-gray-800 text-center"></h2>

    <form @submit.prevent="registerPatient" class="space-y-3">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <Label for="first_name">First Name</Label>
          <Input id="first_name" v-model="form.first_name" placeholder="John" required />
        </div>

        <div>
          <Label for="last_name">Last Name</Label>
          <Input id="last_name" v-model="form.last_name" placeholder="Doe" required class="focus-visible:shadow-none" />
        </div>
      </div>

      <div>
        <Label for="phone">Phone Number</Label>
        <Input id="phone" type="tel" v-model="form.phone" placeholder="+8801XXXXXXXXX" required />
      </div>

      <div>
        <Label for="email">Email</Label>
        <Input id="email" type="email" v-model="form.email" placeholder="example@mail.com" />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <Label for="gender">Gender</Label>
          <Select v-model="form.gender">
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label for="dob">Date of Birth</Label>
          <Input id="dob" type="date" v-model="form.dob" required />
        </div>
      </div>

      <div>
        <Label for="address">Address</Label>
        <Textarea id="address" v-model="form.address" placeholder="Enter full address" rows="2" />
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const form = ref({
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  gender: '',
  dob: '',
  address: '',
})

const registerPatient = () => {
  console.log('Patient Registered:', form.value)
  alert('Patient registered successfully!')
}

</script>
