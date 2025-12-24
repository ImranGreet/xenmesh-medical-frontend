<template>
  <div class="space-y-4">
    <div
      class="flex gap-4"
      v-for="(slots, day) in groupedSchedules"
      :key="day"
    >
      <div class="w-28 font-medium text-gray-700 capitalize">
        {{ day }}
      </div>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="(slot, index) in slots"
          :key="index"
          class="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full"
        >
          {{ formatTime24To12(slot.from_time) }} – {{ formatTime24To12(slot.to_time) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatTime24To12 } from "@/store/helper";
import { computed } from "vue";

type Schedule = {
  day: string;
  from_time: string;
  to_time: string;
  status: number;
};

const props = defineProps<{
  schedules?: Schedule[];
}>();

const groupedSchedules = computed(() => {
  if (!props.schedules) return {};

  return props.schedules.reduce((acc, schedule) => {
    if (!acc[schedule.day]) {
      acc[schedule.day] = [];
    }
    acc[schedule.day]!.push(schedule);
    return acc;
  }, {} as Record<string, Schedule[]>);
});
</script>
