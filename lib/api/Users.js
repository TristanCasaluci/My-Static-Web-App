import {BASE_URL, postJSON} from "@/lib/api/index";

const URL = BASE_URL
//Can't be a function and has to be an "Object" that has multiple functions defined inside it
const AuthenticationAPI = {
    login(user){
        const data = postJSON(`${URL}/login`, {body:user})
        return data
    }
}
export default AuthenticationAPI