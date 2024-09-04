import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

interface Project {
    title: string;
    des: string;
    thumbNail: string[];
    link: string | undefined;
    icon: string[];
}

interface ProjectsProps {
    data: Project[];
}

export default function Projects(props: ProjectsProps) {
    return (
        <section id="projectsSection" className="projects-section">
            <div className="projects-intro-container">
                <h1 className="projects-title">MY <span>PROJECTS</span></h1>
                <p className="projects-para">
                    Welcome to my portfolio! I'm a front-end web developer, and here are some of the web design and development
                    projects I've crafted to showcase my skills. Take a look around and explore the world of my creations.
                </p>
            </div>
            <div className="projects-list-container">
                {props.data.map((proj, index) => (
                    <div key={index} className="projects-card">
                        <div className="projects-card-img-container">
                            <Carousel dynamicHeight={true} axis="horizontal" autoPlay infiniteLoop={true} showThumbs={false} showArrows={false}>
                                {proj.thumbNail.map((image, index) => (
                                    <img key={index} src={image} className="card-img" />
                                ))}
                            </Carousel>
                        </div>
                        <div className="projects-card-des">
                            <div className="projects-card-des-text-container">
                                <h1>{proj.title}</h1>
                                {proj.link === "" ? <p>{proj.des}</p> : <a href={proj.link}><p>{proj.des}</p></a>}
                            </div>
                            <div className="projects-card-des-icon-container">
                                {proj.icon.map((icon, index) => (
                                    <img key={index} src={icon} className="icon" />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}