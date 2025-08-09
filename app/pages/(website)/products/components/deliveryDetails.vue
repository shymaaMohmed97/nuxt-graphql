<template>
  <div class="space-y-4">
    <h4 class="text-lg font-bold">Delivery Details</h4>
    <div class="flex flex-col border border-gray-200 p-4 rounded-lg">
      <div v-for="(item, index) in renderedItems" :key="item.icon">
        <div class="flex items-center gap-2">
          <UIcon :name="item.icon" class="text-primary size-5" />
          <p class="mb-0 flex items-center gap-2">
            <span v-if="item.label">{{ item.label }}: </span>
            <span
              class="font-bold"
              :class="{ 'font-light': item.label === null }"
              >{{ item.value }}
              <NuxtLink
                v-if="item.link"
                :to="item.link"
                class="text-primary font-bold"
                >Learn more</NuxtLink
              >
            </span>
          </p>
        </div>
        <USeparator v-if="index < renderedItems.length - 1" class="my-4" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  sellerName: string;
  notReturn: number | undefined;
}>();

const items: {
  icon: string;
  label: string | null;
  value: string;
  link?: string;
}[] = [
  {
    icon: "i-heroicons-clock",
    label: "Delivery time",
    value: "Within 30-60 Minutes",
  },
  {
    icon: "i-heroicons-building-storefront",
    label: "Sold by",
    value: props.sellerName,
  },
  {
    icon: "i-heroicons-check-circle",
    label: null,
    value: props.notReturn ? "This item is eligible for free returns" : "",
    link: "https://www.google.com",
  },
];
const renderedItems = computed(() => items.filter((item) => !!item.value));
</script>
