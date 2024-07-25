export interface Translation {
  en_GB: string
  nl_NL: string
  __auto_translate: object
}

export interface User {
  id: number
  name: string
  custom_label: string
  avatar: {}
}

export interface Course {
  deleted_at: null | string
  t_title: Translation
  t_description: Translation
  type: string
  position: number
  auto_invite: string
  image_file_id: number
  schedule_id: null | number
  company_id: number
  id: number
  created_at: string
  updated_at: string
  start: null | string
  end: null | string
  users?: User[]
}
