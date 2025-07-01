import axios from 'axios';
import { useAuth } from '@/store/auth';

export const useApi = () => {
  const token = useAuth.getState().token;

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
