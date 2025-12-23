<script setup lang="ts">
import { ref } from "vue";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Users, Key, Save } from "lucide-vue-next";

type Permission = {
  id: number;
  name: string;
  description: string;
  category: string;
  assigned: boolean;
};

type Role = {
  id: number;
  name: string;
  description: string;
  icon: any;
  permissions: Permission[];
};

// Make roles reactive
const roles = ref<Role[]>([
  {
    id: 1,
    name: "Administrator",
    description: "Full system access with all permissions",
    icon: Shield,
    permissions: [
      { id: 1, name: "user.read", description: "View user profiles and data", category: "User Management", assigned: true },
      { id: 2, name: "user.write", description: "Create and modify users", category: "User Management", assigned: true },
      { id: 3, name: "user.delete", description: "Remove users from system", category: "User Management", assigned: true },
      { id: 4, name: "settings.read", description: "View system settings", category: "System", assigned: true },
      { id: 5, name: "settings.write", description: "Modify system settings", category: "System", assigned: true },
    ],
  },
  {
    id: 2,
    name: "Editor",
    description: "Can create and edit content but not delete",
    icon: Users,
    permissions: [
      { id: 1, name: "user.read", description: "View user profiles and data", category: "User Management", assigned: true },
      { id: 2, name: "user.write", description: "Create and modify users", category: "User Management", assigned: true },
      { id: 3, name: "user.delete", description: "Remove users from system", category: "User Management", assigned: false },
      { id: 6, name: "content.read", description: "View all content", category: "Content", assigned: true },
      { id: 7, name: "content.write", description: "Create and edit content", category: "Content", assigned: true },
      { id: 8, name: "content.delete", description: "Delete content", category: "Content", assigned: false },
    ],
  },
  {
    id: 3,
    name: "Viewer",
    description: "Read-only access to view content",
    icon: Key,
    permissions: [
      { id: 1, name: "user.read", description: "View user profiles and data", category: "User Management", assigned: true },
      { id: 6, name: "content.read", description: "View all content", category: "Content", assigned: true },
      { id: 9, name: "reports.read", description: "View system reports", category: "Analytics", assigned: true },
      { id: 4, name: "settings.read", description: "View system settings", category: "System", assigned: false },
    ],
  },
]);

// Auto toggle permission - simplified version
const togglePermission = (roleId: number, permissionId: number) => {
  const role = roles.value.find(r => r.id === roleId);
  if (!role) return;

  const permission = role.permissions.find(p => p.id === permissionId);
  if (!permission) return;

  // Simply toggle the boolean value
  permission.assigned = !permission.assigned;
};

// Count assigned permissions for a role
const countAssignedPermissions = (role: Role) => {
  return role.permissions.filter(p => p.assigned).length;
};

// Get unique categories from permissions
const getCategories = (permissions: Permission[]) => {
  return [...new Set(permissions.map(p => p.category))];
};

// Group permissions by category
const groupByCategory = (permissions: Permission[]) => {
  return permissions.reduce((groups, permission) => {
    const category = permission.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(permission);
    return groups;
  }, {} as Record<string, Permission[]>);
};

// Save roles to backend (simulated)
const saveRoles = () => {
  console.log("Saving roles:", JSON.parse(JSON.stringify(roles.value)));
  // Add your API call here
  alert("Roles saved successfully!");
};

// Reset to original state
const resetRoles = () => {
  roles.value = [...roles.value]; // Trigger reactivity
  console.log("Roles reset");
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
    <div class="max-w-7xl mx-auto space-y-8">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Role Permissions Management</h1>
          <p class="text-gray-600 mt-2">Manage access controls and permissions for different user roles</p>
        </div>
        <div class="flex items-center gap-3">
          <Button variant="outline" @click="resetRoles" class="gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reset
          </Button>
          <Button @click="saveRoles" class="gap-2 bg-blue-600 hover:bg-blue-700">
            <Save class="w-4 h-4" />
            Save Changes
          </Button>
        </div>
      </div>

      <!-- Stats Summary -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card class="bg-white border border-gray-200">
          <CardContent class="pt-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500">Total Roles</p>
                <h3 class="text-2xl font-bold text-gray-900">{{ roles.length }}</h3>
              </div>
              <div class="p-3 bg-blue-100 rounded-full">
                <Shield class="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card class="bg-white border border-gray-200">
          <CardContent class="pt-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500">Active Permissions</p>
                <h3 class="text-2xl font-bold text-gray-900">
                  {{ roles.reduce((acc, role) => acc + countAssignedPermissions(role), 0) }}
                </h3>
              </div>
              <div class="p-3 bg-green-100 rounded-full">
                <Key class="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card class="bg-white border border-gray-200">
          <CardContent class="pt-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500">Categories</p>
                <h3 class="text-2xl font-bold text-gray-900">
                  {{ [...new Set(roles.flatMap(r => r.permissions.map(p => p.category)))].length }}
                </h3>
              </div>
              <div class="p-3 bg-purple-100 rounded-full">
                <Users class="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <!-- Role Cards Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card 
          v-for="role in roles" 
          :key="role.id"
          class="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-200"
        >
          <CardHeader class="pb-4">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-gray-100 rounded-lg">
                  <component :is="role.icon" class="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <CardTitle class="text-lg font-semibold text-gray-900">{{ role.name }}</CardTitle>
                  <p class="text-sm text-gray-600 mt-1">{{ role.description }}</p>
                </div>
              </div>
              <Badge 
                :variant="role.name === 'Administrator' ? 'destructive' : 'secondary'"
                class="ml-2"
              >
                {{ countAssignedPermissions(role) }}/{{ role.permissions.length }}
              </Badge>
            </div>
          </CardHeader>

          <CardContent>
            <!-- Categories Accordion Style -->
            <div v-for="category in getCategories(role.permissions)" :key="category" class="mb-6 last:mb-0">
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wider">{{ category }}</h4>
                <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {{ role.permissions.filter(p => p.category === category && p.assigned).length }} active
                </span>
              </div>
              
              <div class="space-y-3">
                <div
                  v-for="permission in role.permissions.filter(p => p.category === category)"
                  :key="permission.id"
                  class="flex items-start justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div class="flex items-start gap-3 flex-1">
                    <div class="mt-1">
                      <Checkbox
                        :id="`${role.id}-${permission.id}`"
                        :checked="permission.assigned"
                        @click="togglePermission(role.id, permission.id)"
                        class="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                      />
                    </div>
                    <div class="flex-1">
                      <Label 
                        :for="`${role.id}-${permission.id}`" 
                        class="text-sm font-medium text-gray-900 cursor-pointer"
                      >
                        {{ permission.name }}
                      </Label>
                      <p class="text-xs text-gray-500 mt-1">{{ permission.description }}</p>
                    </div>
                  </div>
                  
                  <Badge 
                    :variant="permission.assigned ? 'default' : 'outline'"
                    class="ml-2 text-xs"
                    :class="permission.assigned ? 'bg-green-100 text-green-800 hover:bg-green-100' : 'bg-gray-100 text-gray-800'"
                  >
                    {{ permission.assigned ? 'Allowed' : 'Denied' }}
                  </Badge>
                </div>
              </div>
            </div>

            <!-- Role Summary -->
            <div class="mt-6 pt-4 border-t border-gray-200">
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-600">Permission Status</span>
                <span class="font-medium" :class="
                  countAssignedPermissions(role) === role.permissions.length ? 'text-green-600' :
                  countAssignedPermissions(role) === 0 ? 'text-red-600' :
                  'text-blue-600'
                ">
                  {{
                    countAssignedPermissions(role) === role.permissions.length ? 'Full Access' :
                    countAssignedPermissions(role) === 0 ? 'No Access' :
                    'Limited Access'
                  }}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <!-- Footer Info -->
      <div class="mt-8 text-center text-sm text-gray-500">
        <p>Click on any checkbox to toggle permission status. Changes are automatically applied.</p>
        <p class="mt-1">Remember to save changes when you're done configuring permissions.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Smooth transitions */
* {
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

/* Custom scrollbar for cards */
.card-content {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}

.card-content::-webkit-scrollbar {
  width: 4px;
}

.card-content::-webkit-scrollbar-track {
  background: transparent;
}

.card-content::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 20px;
}
</style>