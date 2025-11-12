<script setup lang="ts">
import AppSidebar from '@/components/ui/sidebar/Sidebar.vue'
import { SidebarProvider, SidebarTrigger,SidebarContent,SidebarHeader,SidebarFooter } from '@/components/ui/sidebar'
</script>

<template>
  <SidebarProvider>
    <AppSidebar>
        <SidebarHeader>
            Xenmesh
        </SidebarHeader>
        
        <SidebarContent>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </SidebarContent>
        <SidebarFooter>
            Admin
        </SidebarFooter>
    </AppSidebar>

    <main>
      <SidebarTrigger />
      <RouterView />
    </main>
  </SidebarProvider>
</template>