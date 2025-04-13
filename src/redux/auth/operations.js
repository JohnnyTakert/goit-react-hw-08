import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { name, email, password } = credentials;
      if (!name || !email || !password) {
        throw new Error('The fields name, email and password are required');
      }
      const payload = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
      };
      const { data } = await axios.post('/users/signup', payload);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || 'Registration error';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { email, password } = credentials;
      if (!email || !password) {
        throw new Error('The email and password fields are required.');
      }
      const payload = {
        email: email.trim().toLowerCase(),
        password,
      };
      const { data } = await axios.post('/users/login', payload);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || 'Login error';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || 'Login error';
    return thunkAPI.rejectWithValue(message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue('No token');
    }
    setAuthHeader(token);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || 'User update error';
      return thunkAPI.rejectWithValue(message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const { auth } = thunkAPI.getState();
      return auth.token !== null;
    },
  }
);
