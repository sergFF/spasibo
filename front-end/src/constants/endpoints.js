const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3300' : ''
export const GET_USER_URL = `${url}/api/login`;
