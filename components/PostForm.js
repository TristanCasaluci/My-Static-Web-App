import styles from './PostForm.module.css'
import {useEffect, useState} from "react";
import PostsAPI from "@/lib/api/Posts";
import {useRouter} from "next/router";
import {useGlobalContext} from "@/store";

const defaultPost = {
    title: "",
    text: ""
}

const PostForm = ({postToEdit = null}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState(defaultPost);
    const router = useRouter()

    const {session} = useGlobalContext()

    useEffect(() => {
        if (postToEdit !== null) {
            setPost(postToEdit)
        }
    }, [postToEdit]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPost({
            ...post,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (post.title === null || post.title === '' || post.text === null || post.text === '') {
            return
        }

        setIsLoading(true)

        if (post.id) {
            // Edit case
            post.updatedAt = new Date().toISOString()
            const updatePost = await PostsAPI.update(post, session.accessToken)
            setPost(updatePost)
            router.push(`/posts/${post.id}`)
        } else {
            //Create case
            post.createdAt = new Date().toISOString()
            post.updatedAt = new Date().toISOString()
            post.userId = session.user.id
            const newPost = await PostsAPI.create(post, session.accessToken)
            router.push(`/posts/${newPost.id}`)
        }
        setIsLoading(false)
    }

    return (
        <div className={styles['form-container-styling']}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <div>
                        <input value={post.title} onChange={handleChange}
                               type="text" name="title" id="title" placeholder="Title"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="text">Text</label>
                    <div>
                        <textarea value={post.text} onChange={handleChange}
                                  type="text" name="text" id="text" placeholder="Text" rows="10"/>
                    </div>
                </div>

                <button className={"button"}>
                    {isLoading ? 'loading...' : 'Submit'}
                </button>
            </form>
        </div>
    )

}
export default PostForm;