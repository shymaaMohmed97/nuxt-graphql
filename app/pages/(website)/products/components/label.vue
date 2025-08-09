<script setup lang="ts">
defineProps<{
  message: string;
  bgColor: string;
  color: string;
  iconColor: string;
}>();
</script>
<template>
  <div class="p-3 rounded-lg flex items-center gap-2" :class="bgColor">
    <UIcon
      name="i-heroicons-exclamation-circle"
      class=" size-6"
      :class="iconColor"
    />
    <p class="text-sm font-bold" :class="color">
      {{ message }}
    </p>
  </div>
</template>
