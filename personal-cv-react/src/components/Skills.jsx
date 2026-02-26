import { useState } from "react";

function Skills() {
    const [visible, setVisible] = useState(true);
    
    return (
        <section class="card" id="skillsSection">
            <button onClick={() => setVisible(!visible)}>
                Show/Hide Skills
            </button>

            {visible && (
                <div>
                <h2>Skills attained</h2>
                    <ul>
                        <li>Java</li>
                        <li>SQL</li>
                        <li>Linux Basics</li>
                    </ul>
                </div>
            )}
        </section>
    );
}

export default Skills;