import instance from '../axios/baseInstanse'

  export const getUsersData =  () => {
  return instance.get("/api/users");
 
}
export const getOrganisationsData =  () => {
  return instance.get("/api/organizations");
}
export const getSchoolsData =  () => {
  return instance.get("/api/schools");
}
export const getTasks =  () => {
  return instance.get("http://34.231.234.91/api/tasks");
}

const update = (id, data) => {
  return instance.put(`/api/organizations/${id}`, data);
};
const updateTask = (id, data) => {
  return instance.put(`http://34.231.234.91/api/tasks/${id}`, data);
};
const createTask = (data) => {
  return instance.post(`http://34.231.234.91/api/tasks`, data);
};
const Service = {
  getUsersData,
  getOrganisationsData,
  getSchoolsData,
  getTasks,
  createTask,
  updateTask,
  update,

 
};
export default Service;