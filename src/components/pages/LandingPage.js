import { Link } from 'react-router-dom'
import home from '../../assets/lens-1418954.png'
export default function LandingPage(){
    return <div className='homePage'>
        <div id='imgContainer'>
            <img src={home} alt="Home Page"/>
        </div>
        <div id='rightBar'>
            <h3>InstaClone</h3>
            <Link to='/posts/all'>
            <button>Enter</button>
            </Link>
        </div>
    </div>
}