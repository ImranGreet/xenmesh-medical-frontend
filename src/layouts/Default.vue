<script setup lang="ts">
import AppSidebar from '@/components/ui/sidebar/Sidebar.vue'
import { SidebarProvider, SidebarTrigger, SidebarContent, SidebarHeader, SidebarFooter } from '@/components/ui/sidebar'
</script>

<template>
  <SidebarProvider>
    <AppSidebar>
      <SidebarHeader>
        Xenmesh
      </SidebarHeader>

      <SidebarContent class="px-8">
        <ul>
          <li>
            <RouterLink :to="{ name: 'appoinment' }" activeClass="border-indigo-500"
              exactActiveClass="border-indigo-700">Appoinment</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'patient-list' }">Patient List</RouterLink>
          </li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </SidebarContent>
      <SidebarFooter>
        Receptionist
      </SidebarFooter>
    </AppSidebar>

    <main class="w-full">
      <SidebarTrigger class="fixed" />
      <div class="p-8">
        <RouterView />

      </div>
    </main>
  </SidebarProvider>
</template>