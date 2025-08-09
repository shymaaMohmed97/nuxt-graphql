<template>
  <div class="w-1/2 space-y-2">
    <h2 class="text-2xl font-bold">Reviews</h2>
    <p v-if="!props.reviews?.length">No reviews yet</p>
    <div v-for="review in props.reviews" :key="review.id">
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-full bg-gray-200" />
          <span class="font-bold">{{ review.user.name }}</span>
        </div>
        <p class="text-sm">{{ review.comment }}</p>
      </div>
    </div>
    <USeparator />
    <h4 class="text-xl font-bold">Write a review</h4>
    <UForm :state="formState" class="flex gap-2" @submit="handleSubmit">
      <UInput
        v-model="formState.review"
        size="xl"
        placeholder="Write a review"
      />
      <UButton size="xl" label="Submit" type="submit" />
    </UForm>
  </div>
</template>

<script setup lang="ts">
import type { ProductQuery, CreateReviewMutation, CreateReviewInput } from "~~/generated/graphql";
import type { FormSubmitEvent } from "@nuxt/ui";
import CreateReview from "~~/graphql/mutations/createReview.graphql";
const props = defineProps<{
  reviews: NonNullable<ProductQuery['product']>['reviews']
  id: string | string[] | undefined;
}>();

const emit = defineEmits<{
  (e: "refetch"): void;
}>();

const formState = ref<{ review: string }>({
  review: "",
});
const { mutate: createReview } =
  useMutation<CreateReviewMutation>(CreateReview);

const handleSubmit = (e: FormSubmitEvent<{ review: string }>) => {
  if (e.data.review.trim() === "") return;
  createReview({
    input: {
      user_id: 1,
      product_id: Number(props.id),
      comment: e.data.review,
    } as CreateReviewInput,
    
  }).then(async (res) => {
    console.log(res);
    formState.value.review = "";
    await emit("refetch");
  });
};
</script>
