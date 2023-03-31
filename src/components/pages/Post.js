
import like from '../../assets/like.png'
import share from '../../assets/share.png'
import more from '../../assets/more.png'
export default function Post({ post }) {
    const { author, location, description, PostImage } = post;
    return <>
        <div id="main-container">
            <div id="name-container">
                <div id='name'>
                {author}
                </div>
                <div id='more'>
                    <img src={more} />
                </div>
            </div>
            <div id="location-container">
                {location}
            </div>
            <div id="img-container">
                <img src={PostImage} alt = "Posted"/>
            </div>
            <div id="options-container">
                <img src={like} />
                <img src={share} />
            </div>
            <p>
                {description}
            </p>
        </div>
    </>
}