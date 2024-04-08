import { Address, defaultAddress } from './address.dto';
import { BankAccount, defaultBankAccount } from './bank-account.dto';

export type Business = {
  legal_name: string
  id?: string
  document_number: string
  sell_page_url: string
  type_of_business: string
  recommended_by: string
  comming_from: string
  address: Address
  bank_account: BankAccount
  average_revenue: string
  average_ticket: string
  invoice_description: string
  products_description: string
  fantasy_name: string
  email_company: string
  phone_contact: string
}

export const defaultBusiness = {
  legal_name: '',
  document_number: '',
  sell_page_url: '',
  type_of_business: '',
  recommended_by: '',
  comming_from: '',
  address: defaultAddress,
  bank_account: defaultBankAccount,
  average_revenue: '',
  average_ticket: '',
  invoice_description: '',
  products_description: '',
  fantasy_name: '',
  email_company: '',
  phone_contact: ''
}