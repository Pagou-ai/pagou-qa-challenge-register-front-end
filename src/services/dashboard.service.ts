import axios from 'axios';
import config from '../config';

const api_url = config.api_url;

export const DashboardService = () => {
  const getCompanies = async () => {
    const response = await axios.get(`${api_url}/company`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  }

  const getUsers = async (utm_source?: string) => {
    const url = utm_source ? `${api_url}/user/${utm_source}` : `${api_url}/user`;

    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  }

  return {
    getCompanies,
    getUsers
  }
}
