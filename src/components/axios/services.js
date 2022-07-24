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
  update
 
};
export default Service;