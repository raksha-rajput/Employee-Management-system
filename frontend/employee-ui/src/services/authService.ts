import axios from "../utils/axiosInstance";

export const login = async (data: {
  username: string;
  password: string;
}) => {
  const response = await axios.post("/auth/login", data);
  return response.data;
};

