import axios from 'axios'
import { useCoursesStore } from '@/stores/courses'

export const fetchData = async () => {
  const courseStore = useCoursesStore()
  const response = await axios.get('data.json')
  courseStore.rawData = response.data
}
