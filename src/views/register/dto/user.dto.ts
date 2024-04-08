export type User = {
  full_name: string
  email: string
  phone: string
  document_number: string
  password: string
  password_confirmation?: string
  terms_accepted: boolean
  birthdate: string
  mother_name: string
  utm_source?: string
}

export const defaultUser = {
  full_name: '',
  email: '',
  phone: '',
  document_number: '',
  password: '',
  password_confirmation: '',
  terms_accepted: false,
  birthdate: '',
  mother_name: '',
  utm_source: ''
}