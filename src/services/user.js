import api from "./api";

export async function getUser() {
  // return false
  return api.get('user/');
}

export async function createUser(body) {
  return api.post('user/',body);
}
