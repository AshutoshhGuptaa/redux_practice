import { AddCourse, GetCourse } from "./type";
import { Create, GetAll } from "../services";
export const CreateCourse=(data)=> async (dispatch)=>{
    const result= await Create(data)
    dispatch({type:AddCourse,payload:result.data})
    return result.data
}

export const GetCourses=()=> async(dispatch)=>{
    const result= await GetAll()
    dispatch({type:GetCourse,payload:result.data})
}
