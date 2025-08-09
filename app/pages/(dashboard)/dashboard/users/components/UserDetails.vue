<template>
  <div>
    <UTabs :items="items">
        <template #content="{ item }">
            <div v-if="item.label === 'Details'">
              <DetailsRow :data="details"/>
            </div>
            <div v-if="item.label === 'Wallets'">
              <DetailsRow :data="wallets"/>
            </div>
            <div v-if="item.label === 'Addresses'">
              <DetailsRow :data="addresses"/>
            </div>
        </template>
    </UTabs>
  </div>
</template>

<script setup lang="ts">
import type { UserQuery } from "~~/generated/graphql";

const { selectedUser } = defineProps<{
  selectedUser: UserQuery["user"]["id"];
}>();

const { items, details, wallets, addresses } = useUser(selectedUser);

</script>