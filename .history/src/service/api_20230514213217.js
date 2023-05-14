import axios from "axios";
import { ACCESS_TOKEN } from "../constants";

const API = {
  call() {
    return axios.create({
      baseURL: 'http://blogpony.azdigi.blog/'
    });
  },
  callWithToken(token) {
    if(!token) token = localStorage.getItem(ACCESS_TOKEN);
    
    return axios.create({
      baseURL: 'http://blogpony.azdigi.blog/',
      headers: { Authorization: 'Bearer ' + token},
    });
  }
}

export default API;
