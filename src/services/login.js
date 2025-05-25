import { config, backApi } from './api';

export async function postLogin(email, password) {
  // Simulate backend return
  if (email === "som3@cin.ufpe.br") {
    return {
      access_token: "1231231231312312312",
    }
  } else {
    return {
      access_token: "3231231231312312312",
    }
  }
}

export async function getRefresh() {
    return backApi.get('login/refresh/',config({}, true));
  } 