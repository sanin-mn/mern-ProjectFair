import { BASEURL } from "./baseUrl";
import { commonAPI } from "./commonApi";

//register API
export const registerAPI = async (user)=>{
  return await commonAPI("POST",`${BASEURL}/user/register`,user,"")
}

// login API
export const loginAPI = async (user)=>{
  return await commonAPI("POST",`${BASEURL}/user/login`,user,"")
}

// add project API
export const AddProjectAPI = async (project,header)=>{
  return await commonAPI("POST",`${BASEURL}/projects/add`,project,header)
}

// user/all projects
export const userProjectAPI = async (header)=>{
  return await commonAPI("GET",`${BASEURL}/user/all-projects`,"",header)
}

// homeprojects
export const homeProjectsAPI = async ()=>{
  return await commonAPI("GET",`${BASEURL}/home/projects`,"","")
}

// all projects
export const allProjectsAPI = async (header)=>{
  return await commonAPI("GET",`${BASEURL}/projects/all`,"",header)
}