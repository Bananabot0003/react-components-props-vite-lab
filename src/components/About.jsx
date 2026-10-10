// Displays the blog logo and description using props.
// Uses a default image if no image is provided.

function About({ image = 'https://via.placeholder.com/215', about }) {
    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    );
}

export default About;