<template>
  <div>
    <AppNavbar title="Home" />
    <UContainer class="my-4">
      <div v-for="category in categories?.categories" :key="category?.id">
        {{ category?.title }}
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type { GetCategoriesQuery } from "../../generated/graphql";
import GetCategories from "../../queries/categories.graphql";

const { result: categories } = useQuery<GetCategoriesQuery>(GetCategories);
</script>
