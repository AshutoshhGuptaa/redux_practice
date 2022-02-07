import axios from "axios";

export async function GetAll(){
    return await axios.get();
}
export async function Create(e){
    return await axios.post('http://localhost:8080/posts',e)
}
