<template>
  <div class="course-container mb-16">
    <div class="flex justify-between">
      <h3 class="mb-4 text-xl font-300 leading-none tracking-tight text-gray-900 font-nunito">
        {{ course.t_title.nl_NL }}
      </h3>
      <div class="self-end w-1/3 hidden lg:block">
        <progress-bar :fill="averageProgress" />
      </div>
    </div>

    <div class="inline-block min-w-full overflow-hidden align-middle shadow sm:rounded-lg bg-white">
      <table class="min-w-full">
        <thead>
          <tr>
            <th
              class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
            >
              Medewerker
            </th>
            <th
              class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
            >
              Voortgang
            </th>
            <th
              class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50 hidden lg:table-cell"
            >
              Status
            </th>
          </tr>
        </thead>

        <tbody class="bg-white">
          <tr v-for="{ id, name, custom_label, progress, avatar } in course.users" :key="id">
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <user-avatar :name="name" :role="custom_label" :avatar="avatar.url" />
            </td>

            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <progress-bar :fill="progress" />
            </td>

            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 hidden lg:table-cell">
              <status-badge :variant="progress === 100 ? 'success' : 'info'">
                {{ progress === 100 ? 'behaald' : 'bezig' }}
              </status-badge>
            </td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation example" class="my-4 flex justify-center">
        <pagination-container />
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import ProgressBar from '../../components/progress-bar/ProgressBar.vue'
import UserAvatar from '../../components/user-avatar/UserAvatar.vue'
import StatusBadge from '../../components/status-badge/StatusBadge.vue'
import PaginationContainer from '../../components/pagination-container/PaginationContainer.vue'
// @ts-ignore
import type { Course, User } from '/types/index'

interface Props {
  course: Course
}

const props = defineProps<Props>()

const averageProgress = computed(() => {
  return Math.ceil(
    props.course.users.reduce((n: number, current: User) => n + current.progress, 0) /
      props.course.users.length
  )
})
</script>

<style lang="scss" scoped></style>
