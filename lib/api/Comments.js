import {BASE_URL, postJSON, getJSON} from "@/lib/api/index";

const URL = BASE_URL
//Can't be a function and has to be an "Object" that has multiple functions defined inside it
const CommentAPI = {
    readAll() {
        const data = getJSON(`${URL}/comments`)
        return data
    }
}
export default CommentAPI;