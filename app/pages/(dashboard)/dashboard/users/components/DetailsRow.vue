<template>
  <div class="space-y-2">
    <div v-for="(row, index) in data" :key="index" class="space-y-3">
      <div v-for="item in row" :key="item.label" class="flex flex-col gap-2">
        <p>
          {{ item.label }}: <span class="font-bold">{{ item.value }}</span>
        </p>
      </div>
      <USeparator v-if="index !== data.length - 1" />
    </div>
  </div>
</template>

<script setup lang="ts">
type DetailsRow = Array<{
  label: string;
  value: string | null | undefined;
}>;
defineProps<{
  data: DetailsRow[];
}>();
</script>
