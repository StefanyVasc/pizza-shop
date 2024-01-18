import axios from 'axios'

import { env } from '@/env'

// api client -> client de API no front para se conectar com o backend

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
})
