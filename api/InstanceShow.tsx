import axios from 'axios';

const InstanceShow = axios.create({
  baseURL: 'http://192.168.100.47:8000/api/students',
  timeout: 30000,
});

export default InstanceShow;
