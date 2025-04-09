import styles from './Post.module.css'

const Post = ({post}) => {

    return (

        <div className={styles.post}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p>{post.text}</p>
            <a href={`posts/${post.id}`} className={styles.postLink}>Read More</a>
        </div>
    );

}
export default Post;