import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import CourseReducer from '../src/components/Courses/reducer/course';
const initialState={}
const MiddleWare=[thunk];
 const Store=createStore(
    CourseReducer,initialState,composeWithDevTools(applyMiddleware(...MiddleWare)))
export default Store;