<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import useUserAuthenticationStore from '@/store/module/auth/auth';
/*pinia*/
import useAuthRoleStore from '@/store/module/auth/role';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

/*data*/
const rolesStore = useAuthRoleStore();
const { roles } = storeToRefs(rolesStore);
const { retrieveRoles } = rolesStore;

/*user authentication*/
const userAuthentication = useUserAuthenticationStore();
const { name, username, email, selectedRole, password, confirmPassword } = storeToRefs(userAuthentication);
const { submitRegistrationForm } = userAuthentication;
const router = useRouter();

const errors = ref<Record<string, string>>({});

const validateForm = () => {
    errors.value = {};

    if (!name.value.trim()) {
        errors.value.name = 'Name is required';
    }

    if (!username.value.trim()) {
        errors.value.username = 'Username is required';
    }

    if (!email.value.trim()) {
        errors.value.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        errors.value.email = 'Please enter a valid email';
    }

    if (!password.value) {
        errors.value.password = 'Password is required';
    } else if (password.value.length < 6) {
        errors.value.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword.value) {
        errors.value.confirmPassword = 'Please confirm your password';
    } else if (password.value !== confirmPassword.value) {
        errors.value.confirmPassword = 'Passwords do not match';
    }

    if (!selectedRole.value) {
        errors.value.role = 'Please select a role';
    }

    return Object.keys(errors.value).length === 0;
};

const handleSubmit = async (e: Event) => {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }
    await submitRegistrationForm(e);

};

const navigateToSignIn = () => {
    router.push('/signin');
};

const getRoleInitial = (roleName: string) => {
    const words = roleName.split(' ');
    if (words.length > 1) {
        return (words[0]?.[0] || '') + (words[1]?.[0] || '');
    }
    return roleName.substring(0, 2).toUpperCase();
};

onMounted(async () => {
    await retrieveRoles();
});

</script>

<template>
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div class="w-full max-w-3xl bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <!-- Header -->
            <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 sm:p-8">
                <div class="flex items-center justify-center gap-3 mb-4">
                    <div class="p-2 bg-white/20 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 2v20M2 12h20M5.5 5.5l13 13M18.5 5.5l-13 13" />
                        </svg>
                    </div>
                    <span class="text-xl font-semibold tracking-tight">Xenmesh HMS</span>
                </div>
                <h1 class="text-2xl font-bold text-center mb-2">Staff Registration</h1>
                <p class="text-blue-100 text-center text-sm">Create a new staff account for hospital management system
                </p>
            </div>

            <!-- Form Content -->
            <div class="p-6 sm:p-8">
                <form @submit="handleSubmit" class="space-y-6">
                    <!-- Personal Information Section -->
                    <div class="space-y-2">
                        <div class="flex items-center gap-2 pb-3 border-b border-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <h3 class="text-lg font-semibold text-gray-800">Personal Information</h3>
                        </div>

                        <!-- Name field -->
                        <div>
                            <Label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </Label>
                            <Input id="name" v-model="name" name="name"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                :class="{ 'border-red-500': errors.name }" placeholder="Dr. John Smith" />
                            <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
                        </div>

                        <div class="w-full flex flex-col sm:flex-row gap-4">
                            <!-- Username field -->
                            <div class="w-full">
                                <Label for="username" class="block text-sm font-medium text-gray-700 mb-1">
                                    Username
                                </Label>
                                <Input id="username" v-model="username" name="username"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    :class="{ 'border-red-500': errors.username }" placeholder="jsmith" />
                                <p v-if="errors.username" class="mt-1 text-sm text-red-600">{{ errors.username }}</p>
                            </div>

                            <!-- Email field -->
                            <div class="w-full">
                                <Label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </Label>
                                <Input id="email" v-model="email" name="email" type="email"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    :class="{ 'border-red-500': errors.email }" placeholder="john.smith@hospital.org" />
                                <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Security Section -->
                    <div class="space-y-2">
                        <div class="flex items-center gap-2 pb-3 border-b border-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <h3 class="text-lg font-semibold text-gray-800">Security</h3>
                        </div>

                        <div class="w-full flex flex-col sm:flex-row gap-4">
                            <!-- Password field -->
                            <div class="w-full">
                                <Label for="password" class="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </Label>
                                <Input id="password" v-model="password" name="password" type="password"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    :class="{ 'border-red-500': errors.password }" placeholder="Enter your password" />
                                <p v-if="errors.password" class="mt-1 text-sm text-red-600">{{ errors.password }}</p>
                            </div>

                            <!-- Confirm Password field -->
                            <div class="w-full">
                                <Label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm Password
                                </Label>
                                <Input id="confirmPassword" v-model="confirmPassword" name="confirmPassword"
                                    type="password"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    :class="{ 'border-red-500': errors.confirmPassword }"
                                    placeholder="Confirm your password" />
                                <p v-if="errors.confirmPassword" class="mt-1 text-sm text-red-600">{{
                                    errors.confirmPassword
                                    }}</p>
                            </div>
                        </div>

                    </div>

                    <!-- Role Section -->
                    <div class="space-y-2">
                        <div class="flex items-center gap-2 pb-3 border-b border-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <h3 class="text-lg font-semibold text-gray-800">Hospital Role</h3>
                        </div>

                        <div>
                            <Label for="role" class="block text-sm font-medium text-gray-700 mb-1">
                                Staff Role
                            </Label>
                            <Select v-model="selectedRole">
                                <SelectTrigger
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    :class="{ 'border-red-500': errors.role }">
                                    <SelectValue placeholder="Select your role" />
                                </SelectTrigger>
                                <SelectContent
                                    class="mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg py-1">
                                    <SelectGroup>
                                        <SelectLabel
                                            class="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            Hospital Roles
                                        </SelectLabel>
                                        <SelectItem v-for="role in roles" :key="role.id" :value="role.name"
                                            class="px-3 py-2 hover:bg-gray-50 cursor-pointer transition-colors">
                                            <div class="flex items-center gap-3">
                                                <div
                                                    class="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-md text-xs font-semibold">
                                                    {{ getRoleInitial(role.name) }}
                                                </div>
                                                <span class="text-gray-700">{{ role.name }}</span>
                                            </div>
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <p v-if="errors.role" class="mt-1 text-sm text-red-600">{{ errors.role }}</p>
                        </div>
                    </div>

                    <!-- Form Actions -->
                    <div class="pt-4 border-t border-gray-200">
                        <div class="flex flex-col sm:flex-row gap-3">
                            <button type="button" @click="navigateToSignIn"
                                class="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Already have an account? Sign In
                            </button>
                            <button type="submit"
                                class="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md hover:shadow-lg">
                                Register Account
                            </button>
                        </div>
                    </div>
                </form>

                <!-- Privacy Notice -->
                <div class="mt-8 pt-6 border-t border-gray-200">
                    <p class="text-xs text-gray-500 text-center leading-relaxed">
                        Your information is protected by HIPAA compliance standards.
                        By registering, you agree to our
                        <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Privacy Policy</a> and
                        <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Terms of Service</a>.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Custom styles for select components */
:deep(.select-content) {
    z-index: 50;
}

:deep(.select-item[data-highlighted]) {
    background-color: #3b82f6;
    color: white;
}

:deep(.select-item[data-highlighted] .bg-blue-100) {
    background-color: rgba(255, 255, 255, 0.2);
}

:deep(.select-item[data-highlighted] .text-blue-600) {
    color: white;
}

:deep(.select-item[data-highlighted] .text-gray-700) {
    color: white;
}
</style>