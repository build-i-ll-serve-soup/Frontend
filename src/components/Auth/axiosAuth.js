import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("JWT");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${token}`
    }
  });
};
