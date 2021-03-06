import axios from "axios";
import env from '../config/env.json';

export const dataFetcher = (url, data, isHeaderRequired = true, bearer, isMethodPatch, isCancel) => {
  // for cancelling the api start
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();

  const headers = {
    'Origin': env.ORIGIN_KEY,
    'Ocp-Apim-Subscription-Key': env.HEADER_KEY,
    ...(bearer && { 'Authorization': `Bearer ${bearer}` }),
  }

  return axios({
    url,
    method: isMethodPatch ? 'PATCH' : data ? 'POST' : 'GET',
    ...(data && { data }),
    ...(isHeaderRequired && { headers: { ...headers } }),
    ...(isCancel && { cancelToken: source.token }),
    withCredentials: true,
  });
};