import Post from '@/components/Post'
import PostsAPI from "@/lib/api/Posts";

export default function Home({posts}) {
    return (
        <div>
            <h1>Home Seite</h1>
            {
                posts.map(post => {
                    return (
                        <div key={`post-${post.id}`}>
                            <Post post={post}/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export async function getStaticProps() {
    const posts = await PostsAPI.readAll()
    return {
        props: {posts}, revalidate: 1
    }
}
