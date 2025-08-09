<script setup lang="ts">
const value = ref(1);
</script>
<template>
  <div class="flex items-center gap-2">
    <USelect
      v-model="value"
      size="xl"
      :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
      class="w-20"
    />
    <UButton
      class="flex-1 justify-center"
      size="xl"
      color="primary"
      label="Add to Cart"
    />
  </div>
</template>
