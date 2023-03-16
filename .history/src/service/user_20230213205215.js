import API from './api';

const userService = {
  login({ username, password }) {
    return API.call().post('/jwt-auth/v1/token', {
      username,
      password
    });
  },
  register({ username, password, email, nickname }) {
    return API.call().post('/wp/v2/users/register', {
      username,
      password,
      email,
      nickname
    });
  },
  changePassword({ password, new_password, confirm_new_password }) {
    return API.callWithToken().put('/wp/v2/users/password', {
      password,
      new_password,
      confirm_new_password
    });
  },
  updateProfile({ description, simple_local_avatar }) {
    return API.callWithToken().put('/wp/v2/users/me', {
      description,
      simple_local_avatar,
    });
  },
  uploadMedia({ description, simple_local_avatar }) {
    return API.callWithToken().put('/wp/v2/users/me', {
      description,
      simple_local_avatar,
    });
  },
  fetchMe(token){
    return API.callWithToken(token).get('/wp/v2/users/me');
  },
};

export default userService;