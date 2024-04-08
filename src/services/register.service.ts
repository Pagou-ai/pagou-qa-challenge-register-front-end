import axios from 'axios';
import config from '../config';
import { BackAccountPersistenceType } from '../types/BackAccountPersistenceType';
import { AddressPersistenceType } from '../types/AddressPersistenceType';
import { CompanyPersistenceType, UpdateCompanyPersistenceType } from '../types/CompanyPersistenceType';
import { User } from '../views/register/dto/user.dto';

const api_url = config.api_url;

export const RegisterService = () => {
  const createAccount = async (user: any) => {
    const response = await axios.post(`${api_url}/register`, user, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  };

  const loginAccount = async (email: string, password: string) => {
    const response = await axios.post(`${api_url}/user/auth`, {
      email,
      password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  };

  const sendLinkForgotPassword = async (email: string) => {
    const response = await axios.post(`${api_url}/forgotPassword`, {
      email,
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  }

  const updateUser = async (user: any) => {
    const response = await axios.put(`${api_url}/user`, user, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  }

  const createUser = async (user: any) => {
    const response = await axios.post(`${api_url}/user`, user, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  }

  const createAddress = async (address: AddressPersistenceType) => {
    const response = await axios.post(`${api_url}/address`, address, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  }

  const createBankAccount = async (backAccount: BackAccountPersistenceType) => {
    const response = await axios.post(`${api_url}/bank-account`, backAccount, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  }

  const updateCompany = async (company: UpdateCompanyPersistenceType) => {
    const response = await axios.put(`${api_url}/company`, company, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  }

  const createCompany = async (company: CompanyPersistenceType) => {
    const response = await axios.post(`${api_url}/company`, company, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  }

  const createValidation = async (validation: any) => {
    const response = await axios.post(`${api_url}/validation`, validation, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  }

  const createValidationCompany = async (validation: { user_id: string }) => {
    const response = await axios.post(`${api_url}/validation/company`, validation, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  }

  const searchByZipCode = async (zip_code: string) => {
    const response = await axios.get(`${api_url}/zipcode/${zip_code}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  };

  return {
    createAccount,
    searchByZipCode,
    createValidationCompany,
    createUser,
    createCompany,
    createValidation,
    loginAccount,
    sendLinkForgotPassword,
    createAddress,
    createBankAccount,
    updateCompany,
    updateUser
  };
}