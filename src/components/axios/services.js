import instance from '../axios/baseInstanse'

  export const getUsersData =  () => {
  return instance.get("users", {params: { paginationNumber:14 }});
 
}
export const getOrganisationsData =  () => {
  return instance.get("organizations");
}
export const getSchoolsData =  () => {
  return instance.get("schools");
}
export const getTasks =  () => {
  return instance.get("tasks");
}

const updateOrg = (id, data) => {
  return instance.put(`organizations/${id}`, data);
};
const updateGroups = (id, data) => {
  return instance.put(`difficulty_groups/${id}`, data);
};
const updateDomain = (id, data) => {
  return instance.put(`domains/${id}`, data);
};
const updateParticipants = (id, data) => {
  return instance.put(`participants/${id}`, data);
};
const changePassword = ( data) => {
  return instance.put("profile", data);
};
const updateTask = (id, data) => {
  return instance.put(`tasks/updateTask/${id}`, data);
};
const createTask = (data) => {
  return instance.post(`tasks`, data);
};
const AddSchool = (data) => {
  return instance.post(`schools`, data);
};
const AddOrganization = (data) => {
  return instance.post(`organizations`, data);
};
export const getRoles =  () => {
  return instance.get("roles");
}
export const getDomainsandTag =  () => {
  return instance.get("domains");
}

export const getParticipantData=  () => {
  return instance.get("participants");
}
export const getCompetitionsData=  () => {
  return instance.get("competitions");
}
export const getDifficultyGroups=  () => {
  return instance.get("difficulty_groups",
);
}
export const  updateSchool = (id, data) => {
  return instance.put(`schools/${id}`, data);
};
export const  deletData = (endPoint,id) => {
  return instance.delete(`/${endPoint}/${id}`);
};
const Service = {
  deletData,
  getUsersData,
  getOrganisationsData,
  getSchoolsData,
  getTasks,
  createTask,
  updateTask,
  updateOrg,
  getRoles,
  getDomainsandTag,
  getDifficultyGroups,
  getParticipantData,
  getCompetitionsData,
  updateSchool,
  updateGroups,
  updateDomain,
  updateParticipants,
  AddSchool,
  AddOrganization,
  changePassword
};
export default Service;