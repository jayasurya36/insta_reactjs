import Post from "./Post";
import { usePostContext } from "../../context/ContextProvider";


export default function Allposts(){
    const {posts} = usePostContext();
    return <div id="outletDiv">
        {
            posts.map(post => (
                <Post post={post} key = {post.cloudinary_id} />
            ))
        }
    </div>    
}