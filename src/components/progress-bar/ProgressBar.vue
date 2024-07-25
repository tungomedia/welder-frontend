<template>
  <div class="flex-auto items-center pl-5">
    <div class="relative mb-2 pt-1">
      <div class="mb-1 flex h-2 overflow-hidden rounded bg-gray-200 text-xs">
        <div class="bar transition-all ease-out duration-1000" :class="color"></div>
      </div>
      <div class="mb-2 flex items-center justify-between text-xs">
        <div class="text-gray-500">Voortgang</div>
        <div class="text-gray-500">{{ Math.ceil(fill) }}%</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
interface Props {
  fill?: number
}

const props = withDefaults(defineProps<Props>(), {
  fill: 0
})

const percentage = computed(() => {
  return `${props.fill}%`
})

const color = computed(() => {
  if (props.fill <= 33) return 'bg-red-500'
  if (props.fill > 33 && props.fill < 100) return 'bg-orange-500'

  return 'bg-green-500'
})
</script>

<style lang="scss" scoped>
.bar {
  width: v-bind(percentage);
  font-size: 6px;
}
</style>
