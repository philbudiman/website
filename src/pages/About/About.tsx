import './About.css';
import headshot from '../../assets/headshot.jpg';

const About = () => {
    const textContent = "Hey 👋 I'm [Your Name], a software engineer based in [Location]. I love building things that make people's lives easier and more efficient. If you're interested in working together or learning more about my work, feel free to reach out!";
    return (
        <div className="about-base">
            <h1>about</h1>
            <div className="content-wrapper">
                <img
                    src={headshot}
                    alt="headshot"
                />
                <p>{textContent}</p>
            </div>
        </div>
    );
};

export default About;