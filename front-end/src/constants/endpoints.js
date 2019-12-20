const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3300' : ''
export const GET_USER_URL = `${url}/api/login`;
export const LOGOUT_URL = `${url}/api/logout`;
export const CURRENT_USER_URL = `${url}/api/user/current_user`;
export const UPDATE_CURRENT_USER_PASSWORD_URL = `${url}/api/user/current_user/changepassword`;
export const USER_URL = `${url}/api/user`;
export const ADD_HERO_URL = `${url}/api/hero`;
export const TEST_URL = `${url}/test`;
