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
const create = (data) => {
  return instance.post(`https://route-egypt-api.herokuapp.com/signin`, data);
};
const Service = {
  getUsersData,
  getOrganisationsData,
  getSchoolsData,
  getTasks,
  update
 
};
export default Service;