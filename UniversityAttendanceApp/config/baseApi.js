import axios from "axios";

export const baseURL = axios.create({
    baseURL:'http://10.8.0.6:6000/',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
})

