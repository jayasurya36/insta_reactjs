

export default function Post({ post }) {
    const { author, location, description, PostImage } = post;
    return <>
        <div id="main-container">
            <div id="name-container">
                {author}
            </div>
            <div id="location-container">
                {location}
            </div>
            <div id="img-container">
                <img src={PostImage} alt = "Posted"/>
            </div>
            <p>
                {description}
            </p>
        </div>
    </>
}