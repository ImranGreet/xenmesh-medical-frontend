<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import useUserAuthenticationStore from '@/store/module/auth/auth';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

/* User authentication */
const userAuthentication = useUserAuthenticationStore();
const { email, password } = storeToRefs(userAuthentication);
const {  } = userAuthentication;
const router = useRouter();

const errors = ref<Record<string, string>>({});
const isLoading = ref(false);

const validateForm = () => {
    errors.value = {};

    if (!email.value.trim()) {
        errors.value.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        errors.value.email = 'Please enter a valid email';
    }

    if (!password.value) {
        errors.value.password = 'Password is required';
    }

    return Object.keys(errors.value).length === 0;
};

const handleSubmit = async (e: Event) => {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    isLoading.value = true;
    try {
        
        // Navigation will be handled by the store or router guard
    } catch (error) {
        errors.value.submit = 'Login failed. Please check your credentials.';
    } finally {
        isLoading.value = false;
    }
};

const navigateToSignUp = () => {
    router.push('/signup');
};

const navigateToForgotPassword = () => {
    router.push('/forgot-password');
};
</script>

<template>
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
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
                <h1 class="text-2xl font-bold text-center mb-2">Staff Login</h1>
                <p class="text-blue-100 text-center text-sm">Access your hospital management system account</p>
            </div>

            <!-- Form Content -->
            <div class="p-6 sm:p-8">
                <form @submit="handleSubmit" class="space-y-6">
                    <!-- Error Message -->
                    <div v-if="errors.submit" class="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p class="text-sm text-red-600">{{ errors.submit }}</p>
                        </div>
                    </div>

                    <!-- Login Section -->
                    <div class="space-y-4">
                        <div class="flex items-center gap-2 pb-3 border-b border-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <h3 class="text-lg font-semibold text-gray-800">Account Login</h3>
                        </div>

                        <!-- Email field -->
                        <div>
                            <Label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </Label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <Input id="email" v-model="email" name="email" type="email"
                                    class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    :class="{ 'border-red-500': errors.email }" placeholder="john.smith@hospital.org" />
                            </div>
                            <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                        </div>

                        <!-- Password field -->
                        <div>
                            <div class="flex items-center justify-between mb-1">
                                <Label for="password" class="block text-sm font-medium text-gray-700">
                                    Password
                                </Label>
                                <button type="button" @click="navigateToForgotPassword"
                                    class="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
                                    Forgot Password?
                                </button>
                            </div>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <Input id="password" v-model="password" name="password" type="password"
                                    class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    :class="{ 'border-red-500': errors.password }" placeholder="Enter your password" />
                            </div>
                            <p v-if="errors.password" class="mt-1 text-sm text-red-600">{{ errors.password }}</p>
                        </div>

                        <!-- Remember Me & Stay Signed In -->
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <Checkbox id="rememberMe"  name="rememberMe" class="mr-2" />
                                <Label for="rememberMe" class="text-sm text-gray-700 cursor-pointer">
                                    Remember me
                                </Label>
                            </div>
                            <div class="flex items-center">
                                <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                <span class="text-xs text-gray-500">Secure connection</span>
                            </div>
                        </div>
                    </div>

                    <!-- Form Actions -->
                    <div class="pt-4 border-t border-gray-200">
                        <button type="submit" :disabled="isLoading"
                            class="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none">
                            <div class="flex items-center justify-center gap-2">
                                <svg v-if="isLoading" class="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                                <span>{{ isLoading ? 'Signing in...' : 'Sign In' }}</span>
                            </div>
                        </button>

                        <div class="mt-4 flex items-center justify-center">
                            <div class="flex-1 border-t border-gray-300"></div>
                            <span class="px-4 text-sm text-gray-500">or</span>
                            <div class="flex-1 border-t border-gray-300"></div>
                        </div>

                        <button type="button" @click="navigateToSignUp"
                            class="w-full mt-4 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <div class="flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                                <span>Create New Account</span>
                            </div>
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<style scoped>
/* Custom styles for checkbox */
:deep(.checkbox) {
    border-radius: 0.375rem;
}

:deep(.checkbox[data-state="checked"]) {
    background-color: #3b82f6;
    border-color: #3b82f6;
}

/* Smooth transitions */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
}

/* Focus styles */
button:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
}
</style>