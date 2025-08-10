<template>
  <div>
    <UContainer class="my-4 space-y-8">
      <div class="grid grid-cols-8 gap-8">
        <div class="col-span-2">
          <img
            :src="result?.product?.image"
            :alt="result?.product?.alt_image"
            class="rounded-lg w-full"
          />
        </div>
        <div class="col-span-3 flex flex-col gap-4">
          <NuxtLink
            :to="`/categories/${result?.product?.category?.id}`"
            class="text-sm text-gray-500 font-bold"
          >
            {{ result?.product?.category?.title_en }}
          </NuxtLink>
          <h1 class="font-bold text-2xl">{{ result?.product?.title }}</h1>
          <p>
            Price:
            <span class="text-xl font-bold"
              >{{ result?.product?.price }} EGP</span
            >
          </p>
          <Label
            v-if="result?.product?.need_prescription"
            message="The pharmacy can request a copy of the prescription"
            bg-color="bg-[#e9f2fe]"
            color="black"
            icon-color="text-secondary"
          />
          <Label
            v-if="result?.product?.low_stock"
            message="We may not be able to fulfil it, due to a shortage in pharmacies"
            bg-color="bg-[#ffecea]"
            color="text-red-500"
            icon-color="text-red-500"
          />
        </div>
        <div class="col-span-3 flex flex-col gap-4">
          <DeliveryDetails
            :seller-name="result?.product?.seller_name ?? 'Nearby Pharmacy'"
            :not-return="result?.product?.not_return"
          />
          <AddToCart />
        </div>
      </div>

      <div class="border border-gray-200 p-4 rounded-lg space-y-8">
        <div class="w-1/2 space-y-2">
          <h2 class="text-2xl font-bold">Product Details</h2>
          <p>{{ result?.product?.description }}</p>
        </div>
        <USeparator v-if="result?.product?.highlights_ar" />
        <div v-if="result?.product?.highlights_ar" class="w-1/2 space-y-2">
          <h2 class="text-2xl font-bold">Product Highlights</h2>
          <p v-html="result?.product?.highlights_ar"></p>
        </div>
      </div>

      <div class="border border-gray-200 p-4 rounded-lg space-y-8">
        <Reviews
          :id
          :reviews="result?.product?.reviews ?? []"
          @refetch="refetch"
        />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import Product from "~~/graphql/queries/product.graphql";
import type { ProductQuery } from "~~/generated/graphql";
definePageMeta({
  layout: "plain",
});
const { id } = useRoute().params;
const { result, refetch } = useQuery<ProductQuery>(Product, {
  id,
});
</script>
