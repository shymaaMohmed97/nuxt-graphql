<template>
  <div class="grid grid-cols-3 md:grid-cols-9 gap-4">
    <div v-for="category in result?.categories" :key="category?.id">
      <NuxtLink :to="`/categories/${category.id}`">
        <div class="flex flex-col items-center gap-2 justify-center">
          <img
            :src="category.now_image"
            :alt="category.title_en"
            class="w-25 h-25"
          />
          <h5 class="text-sm text-center font-bold">
            {{ category.title_en }}
          </h5>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GetCategoriesQuery } from "~~/generated/graphql";
import GetCategories from "~~/graphql/queries/categories.graphql";
const { result } = useQuery<GetCategoriesQuery>(GetCategories);
</script>
