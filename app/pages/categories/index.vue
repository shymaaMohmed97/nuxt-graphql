<template>
  <div>
    <AppNavbar title="Categories" />
    <UContainer class="my-4">
      <div class="flex gap-4">
        <div v-for="category in result?.categories" :key="category.id">
          <div class="flex flex-col items-center gap-2">
            <NuxtLink :to="`/categories/${category.id}`">
              <img
                :src="category.image"
                :alt="category.title"
                class="w-20 h-20 rounded-full"
              />
              <div class="flex flex-col">
                <h2 class="text-sm">{{ category.title }}</h2>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import GetCategories from "../../../queries/categories.graphql";
import type { GetCategoriesQuery } from "../../../generated/graphql";

const { result } = useQuery<GetCategoriesQuery>(GetCategories);
</script>
