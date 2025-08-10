<template>
  <div>
    <UContainer class="my-4">
      <div class="grid grid-cols-4 gap-8">
        <div class="col-span-1">
          <AppSkeleton />
        </div>
        <div class="col-span-3 flex flex-col gap-4">
          <h1 class="font-bold text-2xl">{{ result?.category.title_en }}</h1>
          <NuxtLink v-if="result?.category.banner_img_en" :to="result?.category.banner_link_en ?? ''">
            <img
              class="w-full rounded-lg object-cover"
              :src="result?.category.banner_img_en"
              :alt="result?.category.title_en"
            />
          </NuxtLink>
          <ProductsList :products="result?.category.products" grid-cols="5" />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import Category from "~~/graphql/queries/category.graphql";
import type { CategoryQuery } from "~~/generated/graphql";
definePageMeta({
  layout: "plain",
});
const { id } = useRoute().params;
const { result } = useQuery<CategoryQuery>(Category, { id });
</script>
