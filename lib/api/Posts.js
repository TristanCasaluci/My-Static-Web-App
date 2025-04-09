import { getJSON, postJSON, putJSON, deleteSON, BASE_URL } from "."

const URL = `${BASE_URL}/posts`

const PostsAPI = {
    readAll() {
        return getJSON(`${URL}?_sort=-createdAt`)
    },
    readId(id) {
        return getJSON(`${URL}/${id}`)
    },
    create(post, token) {
        const data = postJSON(URL, {body: post, token })
        return data;
    },
    update(post, token) {
        try {
            const data = putJSON(`${URL}/${post.id}`, { body:post, token })
            return data;
        } catch (error) {
            throw new Error ('Could not update post')
        }

    },
    delete(post, token){
        try {
            const data = deleteSON(`${URL}/${post.id}`, {token})
        } catch (error) {
            throw new Error ('Could not delete post');
        }

    }
}

export default PostsAPI
