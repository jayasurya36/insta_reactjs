
import icon from '../../assets/icon.png';
import newImg from '../../assets/camera.png';
import { Link, Outlet } from 'react-router-dom';
export default function InstapostPage() {
    return <>
        <div id='postPage'>
            <div id='topnav'>
                <div id='iconContainer'>
                        <img src={icon} alt="icon" />
                        <h3>InstaClone</h3>
                </div>
                <div id='newPost'>
                    <Link to='new'>
                        <img src={newImg} alt="New Post" />
                    </Link>
                </div>
            </div>
            <div id='outletContainer'>
                <Outlet />
            </div>
        </div>
    </>

}