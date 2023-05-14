import axios from "axios";
import { ACCESS_TOKEN } from "../constants";

const API = {
  call() {
    return axios.create({
      baseURL: 'http://blogpony.azdigi.blog/wp-json'
    });
  },
  callWithToken(token) {
    if(!token) token = localStorage.getItem(ACCESS_TOKEN);
    
    return axios.create({
      baseURL: 'http://blogpony.azdigi.blog/wp-json',
      headers: { Authorization: 'Bearer ' + token},
    });
  }
}

export default API;