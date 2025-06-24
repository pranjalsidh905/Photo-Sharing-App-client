import axios from "axios";

// Direct base URL — replace this with your actual backend URL
const BASE_URL = "https://photo-sharing-app-server-f4ph.onrender.com"; // 👈 Replace this

export const Signup = async (email, username, password) => {
  return await axios.post(`${BASE_URL}/users/register`, {
    email,
    username,
    password,
  });
};

export const Login = async (email, password) => {
  return await axios.post(`${BASE_URL}/users/login`, {
    email,
    password,
  });
};
