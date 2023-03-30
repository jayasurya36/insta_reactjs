import { BrowserRouter, Routes , Route} from "react-router-dom";
import Allposts from "../components/pages/Allposts";
import InstapostPage from "../components/pages/InstaPostPage";
import LandingPage from "../components/pages/LandingPage";
import NewPost from "../components/pages/NewPost";


export default function AppRouter(){
    return <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<LandingPage/>}/>
            <Route path="/posts" element = {<InstapostPage />}>
                <Route path="all" element = {<Allposts/>}/>
                <Route path="new"  element ={<NewPost />} />
            </Route>
        </Routes>
    </BrowserRouter>
}