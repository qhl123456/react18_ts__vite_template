const BASE_URL = import.meta.env.VITE_BASE_URL
const TIME_OUT = 10000



const AXIOS_BASE_CONFIG = {
  baseURL: BASE_URL,
  timeOut: TIME_OUT,
  heard: {
    'Content-Type': 'application/json; charset=utf-8',
  },
}

export { BASE_URL, AXIOS_BASE_CONFIG }