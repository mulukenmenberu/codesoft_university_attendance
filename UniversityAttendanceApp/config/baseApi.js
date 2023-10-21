import axios from "axios";

export const baseURL = axios.create({
    baseURL:'http://192.168.192.144:6000/',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
})

