export type Address = {
  zipcode: string
  city: string
  state: string
  country: string
  address_number: string
  neighborhood: string
  address_line_1: string
  address_line_2: string
}

export const defaultAddress = {
  zipcode: '',
  city: '',
  state: '',
  country: '',
  address_number: '',
  neighborhood: '',
  address_line_1: '',
  address_line_2: ''
}