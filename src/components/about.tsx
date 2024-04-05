interface aboutInterface {
    name: string;
    logo: string;
}

interface AboutProps {
    skillsList: aboutInterface[];
    toolsList: aboutInterface[];
}

export default function About(props: AboutProps) {

    return (
        <section id="aboutSection" className="about-section">

            <div className="about-me-intro-container">
                <div className="about-me--intro">
                    <h1>ABOUT <span>ME</span></h1>
                    <p>
                        Hello there! 👋 I'm Kenneth, a passionate first-year college student with a love for web
                        design and coding. I've embarked on a self-tought journey into web development,
                        where I've delved into the fundamentals of HTML, CSS, and JavaScript. My excitement
                        for creating seamless and visually appealing websites led me to explore the world of
                        React.js. 
                    </p>
                </div>
                <div className="about-me--current-edeavors">
                    <h1>CURRENT <span>ENDEAVORS</span></h1>
                    <p>
                        Studying Bachelor of Science in Information Technology at my local college and expanding
                        my knowledge on building a full stack web application.
                    </p>
                </div>
            </div>

            <div className="my-skills-container">
                <div className="my-skills--language">
                    <h1 className="list-title">MY <span>SKILLS</span></h1>
                    {props.skillsList.map((s, index) => (
                        <div key={index} className="my-skills--language-card">
                            <img className="logo" alt="language logo" src={s.logo} />
                            <p>{s.name}</p>
                        </div>
                    ))}
                </div>

                <div className="my-skills--tools">
                    <h1 className="list-title"><span>TOOLS </span>I USE</h1>
                    {props.toolsList.map((l, index) => (
                        <div key={index} className="my-skills--tools-card">
                            <img className="logo" alt="tools logo" src={l.logo} />
                            <p>{l.name}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}