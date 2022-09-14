import axios from 'axios';
const token="110|mG14raTla198boK0ofk9blEn4kokAtEvq6CNgUM7"
const instance = axios.create({
    
baseURL: 'https://api.adstarks.com/public/api/',

headers: {
    'Content-Type': 'application/json',
    'Accept':' application/json',
     "AUTHORIZATION" : `Bearer ${token}`
  },
});
instance.interceptors.request.use((request) => {
    request.headers['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
     return request;
  });
export default instance

