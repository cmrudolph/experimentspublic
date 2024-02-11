<template>
  <h1>Tab Menu Page</h1>
  <CustomTabMenu :model="items" />
  <router-view />
</template>

<script setup lang="ts">
import CustomTabMenu from '@/components/CustomTabMenu.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeIndex = ref(0)

const items = [
  {
    label: 'Tab 1',
    route: '/components/tabmenu/child1'
  },
  {
    label: 'Tab 2',
    route: '/components/tabmenu/child2'
  }
]

onMounted(() => {
  const activeItem = items.findIndex((item) => route.path === item.route)
  if (activeItem !== -1) {
    activeIndex.value = activeItem
  }
})
</script>
