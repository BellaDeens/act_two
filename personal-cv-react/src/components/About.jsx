import profileImg from '../assets/images/Self_Photo.jpg';

function About() {
    return (
        <section id="about" class="card">
            <h2>About Me</h2>
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
        </section>
    );
}

export default About;
