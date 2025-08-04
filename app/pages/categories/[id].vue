<template>
  <div>
    <AppNavbar :title="result?.category.title" />
    <UContainer class="my-4">
      <h1>Category: {{ result?.category.title }}</h1>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import Category from "../../../queries/category.graphql";
import type { CategoryQuery } from "../../../generated/graphql";
const { id } = useRoute().params;
const { result } = useQuery<CategoryQuery>(Category, { id: id as string });
</script>
