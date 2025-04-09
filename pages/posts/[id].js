import PostsAPI from "@/lib/api/Posts";
import Link from "next/link";
import styles from "./DetailPost.module.css"
import {router} from "next/client";
import {useGlobalContext} from "@/store";

export default function DetailPost({ post }) {

    const { session } = useGlobalContext()

    const handleDelete = async () => {
        await PostsAPI.delete(post, session.accessToken)
        router.push(`/`)
    }

    return !post ? null : (
        <div className={styles.detailContainer}>
            <div>
                <h1>{post.title}</h1>
                <p>{post.text}</p>
                <p><i>Erstellt am {post.createdAt}</i></p>
            </div>

            <div className={styles.detailButtonContainer}>
                <Link href={`/`} className={styles.link}>Back</Link>
                <div className={styles.detailButtonContainer}></div>
                <Link href={`/posts/edit/${post.id}`} className={styles.link}>Edit</Link>
                <div className={styles.detailButtonContainer}></div>
                <Link className={styles.link} onClick={handleDelete} href={`/`}>Delete</Link>
            </div>

        </div>
    )
}

export async function getStaticPaths() {
    const posts = await PostsAPI.readAll()
    const paths = posts.map(post => (
        {
            params: {id: post.id.toString()}
        })
    )
    return {
        paths, fallback: true
    }
}

export async function getStaticProps(context) {
    const id = context.params.id
    const post = await PostsAPI.readId(id)
    return {
        props: { post }, revalidate: 10
    }
}