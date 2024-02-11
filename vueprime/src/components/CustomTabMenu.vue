<template>
  <TabMenu :model="model" :activeIndex="activeIndex">
    <template #item="{ item, props }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a :href="href" v-bind="props.action" @click="navigate">
          <span v-bind="props.label">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else :href="item.url" :target="item.target" v-bind="props.action">
        <span v-bind="props.label">{{ item.label }}</span>
      </a>
    </template>
  </TabMenu>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { MenuItem } from 'primevue/menuitem'

const props = defineProps({
  model: {
    type: Array<MenuItem>,
    required: true
  }
})

const route = useRoute()
const activeIndex = ref(0)

onMounted(() => {
  const activeItem = props.model.findIndex((item) => route.path === item.route)
  if (activeItem !== -1) {
    activeIndex.value = activeItem
  }
})
</script>
