<template>
  <UContainer class="my-4 space-y-6">
    <div class="flex flex-col gap-4">
      <h2 class="text-2xl font-bold">Categories</h2>
      <CategoriesList />
    </div>

    <div class="flex flex-col gap-4">
      <h2 class="text-2xl font-bold">Products</h2>
      <ProductsList :products="result?.products" grid-cols="6" />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type { ProductsQuery } from '~~/generated/graphql';
import GetProducts from '~~/graphql/queries/products.graphql';

const { result } = useQuery<ProductsQuery>(GetProducts);

definePageMeta({
  layout: "plain",
});

</script>
