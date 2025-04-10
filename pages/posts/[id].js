import PostsAPI from "@/lib/api/Posts";
import Link from "next/link";
import styles from "./DetailPost.module.css"
import {router} from "next/client";
import {useGlobalContext} from "@/store";
import CommentAPI from "@/lib/api/Comments";
import Post from "@/components/Post";

export default function DetailPost({ post, filteredComment }) {

    const { session } = useGlobalContext()

    const handleDelete = async () => {
        await PostsAPI.delete(post, session.accessToken)
        router.push(`/`)
    }

    return !post ? null : (
        <div>
            <div>
                <h1>{post.title}</h1>
                <p className={styles.para}>{post.text}</p>
                <p className={styles.para}><i>Erstellt am {post.createdAt}</i></p>
            </div>

            <div className={styles.detailButtonContainer}>
                <Link href={`/`} className={styles.link}>Back</Link>
                <div className={styles.detailContainer}></div>
                <Link href={`/posts/edit/${post.id}`} className={styles.link}>Edit</Link>

                {session &&
                    <>
                        <div className={styles.detailContainer}></div>
                        <Link className={styles.link} onClick={handleDelete} href={`/`}>Delete</Link>
                    </>
                }

            </div>

            <div>
                {!filteredComment && <h3>No comments yet</h3>}
                {
                    filteredComment.map(comment => {
                        return (
                            <div key={`post-${comment.id}`}>
                                <h2>{comment.id}. Comment</h2>
                                <p>{comment.text}</p>
                                <br/>
                            </div>
                        )
                    })
                }
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
    const comments = await CommentAPI.readAll()
    const filteredComment = comments.filter((comment) => {
        return comment.postId == id;
    })
    return {
        props: { post, filteredComment }, revalidate: 10
    }
}