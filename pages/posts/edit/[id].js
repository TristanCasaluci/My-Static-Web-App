import PostForm from "@/components/PostForm";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import PostsAPI from "@/lib/api/Posts";
import {useGlobalContext} from "@/store";

const EditPostPage = () => {

    const { session, loading } = useGlobalContext()

    const router = useRouter()
    const [post, setPost] = useState(null)

    const urlID = router.query.id

    useEffect(() => {
        if (!session && !loading && router.isReady){
            router.push('/login')
        }
    }, )

    useEffect(() => {
        let isMounted = true

        if(!router.isReady) {return}

        const loadPost = async () => {
            const newPost = await PostsAPI.readId(urlID)
            if(isMounted) {setPost(newPost)}
        }
        loadPost()
    }, [router])

    return !post ? null : (
        <div>
            <h2>Edit Post</h2>
            <PostForm postToEdit={post}></PostForm>
        </div>
    )
}
export default EditPostPage;