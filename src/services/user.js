import { config, backApi } from './api';

export async function getUser() {
  return true
  // return backApi.get('user/', config());
}

export async function createUser(body) {
  return backApi.post('user/',body, config());
}
