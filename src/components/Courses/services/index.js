import axios from "axios";

export async function GetAll(){
    return await axios.get('http://localhost:8081/posts');
}
export async function Create(e){
    return await axios.post('http://localhost:8081/posts',e)
}
