import PostForm from "@/components/PostForm";
import {useGlobalContext} from "@/store";
import {useRouter} from "next/router";
import {useEffect} from "react";

const CreatePostPage = () => {

    const { session, loading } = useGlobalContext()
    const router = useRouter()

    useEffect(() => {
        if(!session && !loading && router.isReady){
            router.push('/login')
        }
    }, )


    return (
        <div>
            <h2>Create Post</h2>
            <PostForm></PostForm>
        </div>
    )
}
export default CreatePostPage;