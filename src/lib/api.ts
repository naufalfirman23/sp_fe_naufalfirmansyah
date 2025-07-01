import axios from 'axios';
import { useAuth } from '@/store/auth';

export const useApi = () => {
  const token = useAuth.getState().token;

  return axios.create({
    baseURL: 'https://spbenaufalfirmansyah-production.up.railway.app/api',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
