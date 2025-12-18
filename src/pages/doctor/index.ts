import { ref } from "vue";

export interface TimeSlot {
  from: string;
  to: string;
}

export interface DaySchedule {
  day: string;
  enabled: boolean;
  schedules: TimeSlot[];
}

export const schedules = ref<DaySchedule[]>([
  {
    day: "saturday",
    enabled: false,
    schedules: [{ from: "", to: "" }],
  },
  {
    day: "sunday",
    enabled: false,
    schedules: [{ from: "", to: "" }],
  },
  {
    day: "monday",
    enabled: false,
    schedules: [{ from: "", to: "" }],
  },
  {
    day: "tuesday",
    enabled: false,
    schedules: [{ from: "", to: "" }],
  },
  {
    day: "wednesday",
    enabled: false,
    schedules: [{ from: "", to: "" }],
  },
  {
    day: "thursday",
    enabled: false,
    schedules: [{ from: "", to: "" }],
  },
  {
    day: "friday",
    enabled: false,
    schedules: [{ from: "", to: "" }],
  },
]);

