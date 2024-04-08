export type BankAccount = {
  bank_code: string
  agency: string
  agency_digit: string
  account: string
  account_digit: string
  account_type: string
  legal_name: string
  document_number: string
}

export const defaultBankAccount = {
  bank_code: '',
  agency: '',
  agency_digit: '',
  account: '',
  account_digit: '',
  account_type: '',
  legal_name: '',
  document_number: ''
}