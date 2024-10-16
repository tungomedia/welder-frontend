<template>
  <div class="flex items-center">
    <div class="flex-shrink-0 w-10 h-10">
      <img class="w-10 h-10 rounded-full" :src="getAvatar()" alt="" />
    </div>

    <div class="ml-4">
      <div class="text-sm font-medium leading-5 text-gray-900">{{ name }}</div>
      <div class="text-sm leading-5 text-gray-500">{{ role }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
export interface Props {
  name?: string
  role?: string
  avatar?: string
}

withDefaults(defineProps<Props>(), {
  name: 'John Doe',
  role: ''
})

// Normally we would use the avatar prop, since there aren't valid image urls in the data, let's render a random one here.

const getAvatar = () => {
  const genders = ['male', 'female']

  const gender = genders[Math.floor(Math.random() * genders.length)]

  return `https://xsgames.co/randomusers/avatar.php?g=${gender}&random=${Math.floor(Math.random() * 5000)}`
}
</script>
