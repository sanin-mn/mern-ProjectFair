import { BASEURL } from "./baseUrl";
import { commonAPI } from "./commonApi";

//register API
export const registerAPI = async (user) => {
  return await commonAPI("POST", `${BASEURL}/user/register`, user, "")
}

// login API
export const loginAPI = async (user) => {
  return await commonAPI("POST", `${BASEURL}/user/login`, user, "")
}

// add project API
export const AddProjectAPI = async (project, header) => {
  return await commonAPI("POST", `${BASEURL}/projects/add`, project, header)
}

// user/all projects
export const userProjectAPI = async (header) => {
  return await commonAPI("GET", `${BASEURL}/user/all-projects`, "", header)
}

// homeprojects
export const homeProjectsAPI = async () => {
  return await commonAPI("GET", `${BASEURL}/home/projects`, "", "")
}

// all projects
export const allProjectsAPI = async (searchKey,header) => {
  return await commonAPI("GET", `${BASEURL}/projects/all?search=${searchKey}`, "", header)
}

// edit projects
export const editProjectAPI = async (projectId, reqBody, reqHeader) => {
  return await commonAPI("PUT", `${BASEURL}/project/edit/${projectId}`, reqBody, reqHeader)
}

// delete projects
export const deleteProjectAPI = async (prjectId,reqHeader) => {
  return await commonAPI("DELETE", `${BASEURL}/project/remove/${prjectId}`,{},reqHeader)
}

// update profile
export const updateProfileAPI = async (user,reqHeader) =>{
  return await commonAPI("PUT",`${BASEURL}/user/update`,user,reqHeader)
}