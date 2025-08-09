<template>
  <div :class="gridClass">
    <div v-for="product in products" :key="product.id">
      <NuxtLink :to="`/products/${product.id}`">
        <div
          class="flex flex-col gap-2 rounded-lg overflow-hidden bg-[#F5F5F5]"
        >
        <div class="relative p-2">
            <img
                :src="product.image"
                :alt="product.alt_image"
                class="aspect-[1/1.2] object-cover rounded-lg"
            />
            <span class="absolute bottom-2 right-2 text-white rounded-lg bg-primary w-8 h-8 flex items-center justify-center">
            <UIcon
                name="i-heroicons-shopping-cart"
                class="text-white w-6 h-6 text-center"
            />
            </span>
        </div>
          
          <h2 class="font-bold text-sm line-clamp-2 px-2 h-10">
            {{ product.title }}
          </h2>
          <p class="p-2 mt-auto">{{ product.price }} EGP</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductsQuery, CategoryQuery } from '~~/generated/graphql';
const props = defineProps<{
  products: ProductsQuery["products"] | CategoryQuery["category"]["products"];
  gridCols?: string;
}>();

const gridClass = computed(() => {
  return {
    'grid grid-cols-3 gap-4': true,
    'md:grid-cols-6': props.gridCols === '6',
    'md:grid-cols-5': props.gridCols === '5'
  };
});
</script>
