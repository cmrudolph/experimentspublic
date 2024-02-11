<template>
  <nav>
    <CustomMenubar :model="items" />
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomMenubar from '@/components/CustomMenubar.vue'
import type { MenuItem } from 'primevue/menuitem'

const items = ref<Array<MenuItem>>([
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'Components',
    hasSubmenu: true,
    items: [
      {
        label: 'TabMenu',
        route: '/components/tabmenu'
      }
    ]
  }
])
</script>
