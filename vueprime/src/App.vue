<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheNavigation from '@/components/TheNavigation.vue'
</script>

<template>
  <header>
    <TheNavigation />
  </header>

  <RouterView />
</template>
