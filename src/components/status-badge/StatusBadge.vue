<template>
  <span class="inline-flex px-2 text-xs font-semibold leading-5 rounded-full" :class="variantClass">
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  variant?: 'danger' | 'success' | 'error' | 'info'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'success'
})

const variantClass = computed(() => {
  switch (props.variant) {
    case 'danger':
      return 'text-orange-800 bg-orange-100'
    case 'info':
      return 'text-sky-800 bg-sky-100'
    case 'error':
      return 'text-red-800 bg-red-100'
    default:
      return 'text-green-800 bg-green-100'
  }
})
</script>
