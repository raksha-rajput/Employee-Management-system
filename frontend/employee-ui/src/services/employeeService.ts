import axiosInstance from "../utils/axiosInstance";

export const getEmployees = async () => {
  const res = await axiosInstance.get("/employees");
  return res.data;
};

export const addEmployee = async (data: any) => {
  return await axiosInstance.post("/employees", data);
};

export const updateEmployee = async (id: number, data: any) => {
  return await axiosInstance.put(`/employees/${id}`, data);
};

export const deleteEmployee = async (id: number) => {
  return await axiosInstance.delete(`/employees/${id}`);
};
