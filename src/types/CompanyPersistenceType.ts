export type CompanyPersistenceType = {
    user_id: string;
    legal_name: string;
    fantasy_name: string;
    document_type: "cnpj" | 'cpf';
    document_number: string;
    phone: string;
    email: string;
    average_ticket?: number;
    logo?: string;
    monthly_billing?: number;
    is_physical_products?: boolean;
    products_description?: string;
    store_url?: string;
    invoice_description?: string;
}

export type UpdateCompanyPersistenceType = {
    user_id: string;
    id: string;
    legal_name: string;
    fantasy_name: string;
    document_type: "cnpj" | 'cpf';
    document_number: string;
    phone: string;
    email: string;
    average_ticket?: number;
    logo?: string;
    monthly_billing?: number;
    is_physical_products?: boolean;
    products_description?: string;
    store_url?: string;
    invoice_description?: string;
}