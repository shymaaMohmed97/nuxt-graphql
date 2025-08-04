<template>
  <div>
    <AppNavbar title="Products" />
    <UContainer class="my-4">
      <div class="grid grid-cols-4 gap-4">
        <div
          v-for="product in result?.products"
          :key="product.id"
          class="flex flex-col gap-2 border border-gray-200 rounded-md p-2"
        >
          <NuxtLink :to="`/products/${product.id}`">
            <img
              :src="product.images[0]"
              :alt="product.title"
              class="aspect-[1/1] object-cover"
            />
            <div class="flex flex-col">
              <h2 class="text-sm">{{ product.title }}</h2>
            </div>
            <div class="flex flex-col">
              <h2 class="text-sm">{{ product.price }}</h2>
            </div>
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import Products from "../../../queries/products.graphql";
import type { ProductsQuery } from "../../../generated/graphql";

const { result } = useQuery<ProductsQuery>(Products);
</script>
