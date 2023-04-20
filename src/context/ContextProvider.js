import React, { useContext, useEffect, useState } from "react"
import {getPosts} from '../components/utils/ServerApis'
const PostContext = React.createContext();
export function ContextProvider({children}){
    const [posts , setPosts] = useState([]);
    const [updater , setUpdater] = useState(0);
    useEffect(()=>{
        getPosts().then((data) =>setPosts(data.reverse()))
    } , [updater])
    return<PostContext.Provider
        value={{
            posts,
            updatePosts : (data) => setUpdater(data)
        }}
    >
        {children}
    </PostContext.Provider>
}

export const usePostContext = () => useContext(PostContext);