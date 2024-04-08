export const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const nameComplete = /^([A-Za-zÀ-ÿ]+[\s-])+[A-Za-zÀ-ÿ]+$/;

export const document = /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/;

export const phone = /^\(\d{2}\) \d{5}-\d{4}$/;

export const cep = /^\d{5}-\d{3}$/;

export const card = /^(\d{4}\s\d{4}\s\d{4}\s\d{4})$/;

export const maturity = /^(0[1-9]|1[0-2])\/\d{2}$/;

export const cvv = /^\d{3}$/;

export const birthdate = /^\d{2}\/\d{2}\/\d{4}$/