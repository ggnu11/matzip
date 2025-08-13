import {Profile} from '@/types/domain';
import {getEncryptedStorage} from '@/utils/encryptStorage';
import axios from 'axios';
import {axiosInstance} from './axios';

type RequestUser = {
  email: string;
  password: string;
};

async function postSignup({email, password}: RequestUser): Promise<void> {
  await axios.post('http://localhost:3030/auth/signup', {email, password});
}

type ResponseToken = {
  accessToken: string;
  refreshToken: string;
};

async function postLogin({
  email,
  password,
}: RequestUser): Promise<ResponseToken> {
  const {data} = await axiosInstance.post('/auth/signin', {
    email,
    password,
  });

  return data;
}

async function getProfile(): Promise<Profile> {
  const {data} = await axiosInstance.get('/auth/me');

  return data;
}

async function getAccessToken(): Promise<ResponseToken> {
  const refreshToken = getEncryptedStorage('refreshToken');

  const {data} = await axiosInstance.post('/auth/refresh', {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  return data;
}

async function logout(): Promise<void> {
  await axiosInstance.post('/auth/logout');
}

export {getAccessToken, getProfile, logout, postLogin, postSignup};
