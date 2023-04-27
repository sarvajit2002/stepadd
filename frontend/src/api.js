import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

export const generateSteps = (number1, number2) => {
  return instance.post('/step', { number1, number2 });
};
