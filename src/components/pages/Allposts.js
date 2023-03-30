import { useEffect, useState } from "react"
import { getPosts } from "../utils/ServerApis";
import Post from "./Post";


export default function Allposts(){
    const[posts , setPosts] = useState([]);
    useEffect(() =>{
        getPosts()
        .then(data =>{
            setPosts(data.reverse())
        })
    } , [])
    console.log(posts);
    return <div id="outletDiv">
        {
            posts.map(post => (
                <Post post={post} key = {post.cloudinary_id} />
            ))
        }
    </div>    
}