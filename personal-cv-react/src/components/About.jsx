import profileImg from '../assets/images/Self_Photo.jpg';
import Card from "./Card";

function About() {
    return (
        <Card title="About Me">
            <img src={profileImg} alt="Profile Photo" width="170"></img>
            <p>Email:
                <a href="mailto:archelleaparici@gmail.com" target="_blank">archelleaparici@gmail.com</a>
            </p>
            <p>
                <a href="https://github.com/BellaDeens" target="_blank">Github</a>
            </p>
            <p>
                I am an Information Technology student that is willing to learn. I enjoy learning new technologies and applying them in practical projects. I also enjoy drawing and sketching.
            </p>

            <p>
                View my art here:
                <a href="https://www.instagram.com/belladeens/" target="_blank">Instagram</a>
            </p>
        </Card>
    );
}

export default About;
