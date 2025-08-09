<template>
    <div class="flex h-dvh flex-col overflow-hidden md:flex-row">
        <aside class="hidden w-64 h-full flex-col gap-6 overflow-y-auto border-e border-gray-200 p-4 md:flex relative">
            <UNavigationMenu orientation="vertical" :items="items" />
        </aside>
        <div class="flex-1 overflow-auto bg-[#F3F6F9]">
          <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Links',
      type: 'label'
    },
    {
      label: 'Users',
      icon: 'i-lucide-users',
      to: '/dashboard/users',
    },
  ],
])

</script>