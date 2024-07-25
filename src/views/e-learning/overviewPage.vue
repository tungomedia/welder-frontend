<template>
  <main>
    <h2
      class="mb-8 text-3xl font-300 leading-none tracking-tight text-gray-900 md:text-5xl font-nunito"
    >
      E-learning
    </h2>
    <course-container v-for="course in courseStore.getCourses" :course="course" :key="course.id" />
  </main>
</template>

<script setup lang="ts">
import CourseContainer from '../../components/course-container/CourseContainer.vue'
import { useCoursesStore } from '../../stores/courses'

const courseStore = useCoursesStore()
</script>
