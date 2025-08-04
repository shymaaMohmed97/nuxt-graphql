<template>
    <header v-if="title" class="flex items-center justify-between p-4 bg-white">
        <h1 class="text-2xl font-bold">
            {{ title }}
        </h1>
    </header>
</template>

<script setup lang="ts">
defineProps<{
    title: string | undefined
}>()
</script>