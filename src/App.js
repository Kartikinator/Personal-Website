import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import ImageCard from './components/ImageCard';

// Images
import vitalityLogo from './logos/images/vitality.png';
import lyncLogo from './logos/images/lync.png';
import KG from './logos/images/KG.png';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
            <header className="App-header">
                <div className="name">
                    <h1>Kartikeya<br/> Gullapalli</h1>
                </div>
            </header>

            <div className="about">
            <h1 id="about-header">About Me</h1>
            
            <div class="grid-container">
                <div class="grid-item">
                    <img class="image-circle" src="https://media.licdn.com/dms/image/C4E03AQGSYz8lPhs_kw/profile-displayphoto-shrink_800_800/0/1626285694603?e=2147483647&v=beta&t=VkCt0f8CcFFapc-W7EmALMjybzBnOhRqoIpDayxIg50" alt="Kartikeya Gullapalli"/>
                </div>
                <div class="grid-item about-description">
                    <p>
                    Hello! I'm [Your Name], a passionate individual who believes in the power of dreams and dedication. From a young age, I've been drawn to [a specific hobby or interest, e.g., "the intricate world of digital design"]. Over the years, I've immersed myself in [relevant activity or field, e.g., "creating digital art and understanding the nuances of user experience design"].

                    I hail from [Your City/State/Country], a place known for its [specific feature or quality, e.g., "breathtaking landscapes and vibrant culture"]. My upbringing there has immensely influenced my perspective and approach towards life. In my free time, I love [hobbies, e.g., "hiking, reading science fiction novels, and experimenting with new recipes"].

                    Professionally, I've been fortunate to collaborate with some incredible minds and have worked on [type of projects, e.g., "diverse design projects, ranging from mobile applications to comprehensive web solutions"]. The journey so far has been enriching, and I'm excited about the challenges and opportunities that lie ahead.

                    When I'm not working, you'll find me [personal activity, e.g., "exploring the local coffee scene or capturing the world through my camera lens"]. I'm a firm believer in lifelong learning and always eager to connect with like-minded individuals. So, if you share a passion for [a shared interest, e.g., "innovative design solutions"] or simply want to chat about [another topic of interest, e.g., "the latest book you've read"], feel free to reach out!
                    </p>
                </div>
            </div>

            </div>


            <div className="skills">
            <h1 id="skills-title">Skills</h1>
            <div class="carousel">
                    <div class="moving-logos">

                        <img src="logos/python.svg" alt="Python"/>
                        <img src="http://www.w3.org/2000/svg" alt="JS"/>
                        <img src="https://assets.stickpng.com/images/5847f981cef1014c0b5e48be.png" alt="Git"/>
                        <img src="path_to_tensorflow_logo.png" alt="Tensorflow"/>
                        <img src="path_to_html_logo.png" alt="HTML"/>
                        <img src="path_to_css_logo.png" alt="CSS"/>
                        <img src="path_to_flutter_logo.png" alt="Flutter"/>
                        <img src="path_to_firebase_logo.png" alt="Firebase"/>
                        <img src="path_to_c_logo.png" alt="C"/>
                        <img src="path_to_assembly_logo.png" alt="Assembly"/>
                        <img src="path_to_c++_logo.png" alt="C++"/>
                        <img src="logos/java-smol.png" alt="Java"/>
                        <img src="path_to_linux_logo.png" alt="Linux"/>

                        <img src="logos/python.svg" alt="Python"/>
                        <img src="http://www.w3.org/2000/svg" alt="JS"/>
                        <img src="https://assets.stickpng.com/images/5847f981cef1014c0b5e48be.png" alt="Git"/>
                        <img src="path_to_tensorflow_logo.png" alt="Tensorflow"/>
                        <img src="path_to_html_logo.png" alt="HTML"/>
                        <img src="path_to_css_logo.png" alt="CSS"/>
                        <img src="path_to_flutter_logo.png" alt="Flutter"/>
                        <img src="path_to_firebase_logo.png" alt="Firebase"/>
                        <img src="path_to_c_logo.png" alt="C"/>
                        <img src="path_to_assembly_logo.png" alt="Assembly"/>
                        <img src="path_to_c++_logo.png" alt="C++"/>
                        <img src="logos/java-smol.png" alt="Java"/>
                        <img src="path_to_linux_logo.png" alt="Linux"/>
                    </div>
                </div>
               
            </div>

            <div className="projects">
            <h1>Projects</h1>
            <div class="project-cards">
                <ImageCard 
                    imageUrl={vitalityLogo}
                    title="Vitality"
                    description="This is a short description for the card."
                    class="project-card project-1"
                />
                <ImageCard 
                    imageUrl={lyncLogo}
                    title="lync"
                    description="This is a short description for the card."
                    class="project-card project-2"
                />
                <ImageCard 
                    imageUrl={KG}
                    title="Personal Website"
                    description="This is a short description for the card."
                    class="project-card project-3"
                />
            </div>
           
            </div>

            <footer>
                <div class="footer-content">
                    <h2>Contact Me</h2>
                    <form action="/submit-contact" method="post" class="contact-form">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required/>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required/>
                        </div>
                        
                        <div class="form-group">
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>
                        
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </footer>
        </div>
    );
    
}

export default App;
