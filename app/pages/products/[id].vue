<template>
  <div>
    <AppNavbar :title="result?.product?.title" />

    <UContainer class="my-4">
      <img :src="result?.product?.images[0]" :alt="result?.product?.title" />
      <p>{{ result?.product?.description }}</p>
      <p>{{ result?.product?.price }} EGP</p>
      <p>{{ result?.product?.category?.title }}</p>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import Product from "../../../queries/product.graphql";
import type { ProductQuery } from "../../../generated/graphql";

const { id } = useRoute().params;
const { result } = useQuery<ProductQuery>(Product, { id: id as string });
</script>
