import axios from 'axios';
import { BREEDS_ENDPOINT } from '../common/constants/endpoints';
import { DOGS_API_BASE_URL } from '../common/constants/urls';

const axiosInstance = axios.create({
  baseURL: DOGS_API_BASE_URL,
  timeout: 60000,
});

const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  headers.Authorization = `X-API-Key ${process.env.REACT_APP_DOGS_API_KEY}`;
  return { headers };
};

const handleError = ({ response, request: { status } }) => {
  if (!response || !response.data || !response.data.error) {
    throw new Error('Something went wrong. Please try again.');
  }
  throw new Error(response.data.error.message);
};

const getDogBreeds = (params) =>
  axiosInstance
    .get(BREEDS_ENDPOINT, Object.assign({}, { params }, getHeaders()))
    .then((response) => response.data)
    .catch(handleError);

const breedsService = {
  getDogBreeds,
};

export default breedsService;
