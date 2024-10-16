import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCoursesStore = defineStore('courses', () => {
  const rawData = ref<any[]>([])

  const getCourses = computed(() => {
    return rawData.value.map((course: any) => {
      return { ...course.course, users: getUsersByCourse(course.course_id) }
    })
  })

  const getUsersByCourse = (id: number) => {
    const course = rawData.value.filter((course) => course.course_id === id)

    const users = course.map((course) => {
      return { ...course.user, progress: course.progress }
    })

    return users
  }

  return { rawData, getCourses, getUsersByCourse }
})
