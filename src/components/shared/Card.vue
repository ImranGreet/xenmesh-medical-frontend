<template>
    <div class="w-full rounded-lg border bg-card text-card-foreground shadow">
        <div class="gap-y-1.5 p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 class="tracking-tight text-lg font-medium capitalize">{{ props.title }}</h3><svg class=" w-5 h-5">
               <use :href="`#${props.iconId}`" />
            </svg>
        </div>
        <div class="p-6 pt-0">
            <div class="text-2xl font-bold"> +{{ props.count }} </div>
            <p class="text-xs text-muted-foreground"> +180.1% from last month </p>
        </div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps({
    title: {
        type: String,
        required: false,
        default: 'Subscriptions',
    },
    iconId: {
        type: String,
        required: false,
        default: 'people-icon'
    },
    count:{
        type:Number,
        required:false,
        default:0,
    }
});
</script>
