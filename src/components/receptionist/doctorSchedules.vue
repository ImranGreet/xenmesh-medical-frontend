<template>
    <div class="space-y-4">

        <!-- Day Block -->
        <div class="flex gap-4" v-for="(slots, day) in groupedSchedules" :key="day">
            <div class="w-28 font-medium text-gray-700">
                {{ day }}
            </div>

            <div class="flex flex-wrap gap-2">
                <span v-for="(slot, index) in slots" :key="index"
                    class="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
                    {{ slot.from }} – {{ slot.to }}
                </span>

            </div>
        </div>


    </div>
</template>


<script lang="ts" setup>

import { computed } from "vue";

type Schedule = {
    day: string;
    time: { from: string; to: string };
    isActive: boolean;
};

const props = defineProps<{ schedules: Schedule[] }>();

// Group schedules by day
const groupedSchedules = computed(() => {
    return props.schedules.reduce((acc, schedule) => {
        if (!acc[schedule.day]) {
            acc[schedule.day] = [];
        }
        acc[schedule.day]!.push(schedule.time);
        return acc;
    }, {} as Record<string, { from: string; to: string }[]>);
});

</script>