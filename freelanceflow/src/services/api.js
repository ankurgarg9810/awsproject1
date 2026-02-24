import axios from "axios";

const API_BASE = "https://your-api-id.execute-api.ap-south-1.amazonaws.com/dev";

export const createTask = (data) =>
  axios.post(`${API_BASE}/task`, data);

export const getTasks = () =>
  axios.get(`${API_BASE}/tasks`);