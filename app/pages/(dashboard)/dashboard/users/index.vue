<template>
  <div>
    <AppNavbar title="Users" />
    <div class="p-8">
      <UTable
        :data="result?.users"
        :columns="columns"
        :ui="{
          base: 'bg-white border border-gray-200 rounded-lg',
        }"
      />
    </div>
    <USlideover v-model:open="isSlideoverOpen" title="User Details">
      <template #body>
        <UserDetails :selected-user="selectedUser ?? ''" />
      </template>
    </USlideover>
  </div>
</template>

<script setup lang="ts">
import Users from "~~/graphql/queries/users.graphql";
import type { UsersQuery } from "~~/generated/graphql";
import type { TableColumn } from "@nuxt/ui";
import { h, resolveComponent } from "vue";
definePageMeta({
  layout: "default",
});
const { result } = useQuery<UsersQuery>(Users);

const UButton = resolveComponent("UButton");
const isSlideoverOpen = ref(false);
const selectedUser = ref<UsersQuery["users"][number]["id"]>();

const columns: TableColumn<UsersQuery["users"][number]>[] = [
  {
    accessorKey: "id",
    header: "#",
    cell: ({ row }) => `#${row.original.id}`,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => row.original.name,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => row.original.email,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) =>  row.original.phone,
  },
  {
    accessorKey: "is_active",
    header: "Active",
    cell: ({ row }) => row.original.is_active ? 'Active' : 'Inactive',
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: ({ row }) => row.original.created_at,
  },
  {
    accessorKey: "show",
    header: "Show",
    cell: ({ row }) =>
      h(UButton, {
        icon: "i-heroicons-eye",
        color: "neutral",
        variant: "ghost",
        "aria-label": "Show user",
        onClick: () => {
          selectedUser.value = row.original.id;
          isSlideoverOpen.value = true;
        }
      }),
  },
];
</script>
