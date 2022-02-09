import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { AddCourse, GetCourse } from "../actions/type";
const initialState=[{}]
export default function CourseReducer(courses=initialState, actions){
const {type,payload}=actions
switch(type){
    case AddCourse:
        return [...courses, payload];

    case GetCourse:
        return payload;
        
}

}
