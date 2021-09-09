import "../src/Body.css"

function Body() {
    return (
        <div className="main">
            <section id="about" className="content">
                <h2 className="leftbar">About Me</h2>
                <div className="para">
                    <p> I'm a 22 year old Jr developer that graduated from the University of Central Florida. </p>
                </div>
            </section>

            <section id="work" className="content">
                <h2 className="leftbar">Work</h2>
                <div className="workcontainer">


                    <a href="https://cristianc707.github.io/On-The-Go-Adventures/" rel="noreferrer" target="_blank">
                        <div className="tagm">
                            <h1>On The Go Adventures</h1>
                            <figure className="cardm img1"
                                width="1500" height="500px" />
                        </div>
                    </a>


                    <a href="https://cristianc707.github.io/daily-planner/" rel="noreferrer" target="_blank">
                        <div className="tag">
                            <h1>Daily Planner</h1>
                            <figure className="card img2" />
                        </div>
                    </a>
                    
                    <a href="https://cristianc707.github.io/passwordGenerator/" rel="noreferrer" target="_blank">
                        <div className="tag">
                            <h1>Password Generator</h1>
                            <figure className="card img3" />
                        </div>
                    </a>


                    <figure className="card img4">

                    </figure>
                    <figure className="card img5">

                    </figure>


                </div>
            </section>

            <section id="contact" className="content">
                <h2 className="leftbar">Contact Me</h2>
                <div className="para">
                    <a className='section' href="mailto:cristian.e.cuevas707@gmail.com">Email</a>
                    <a className='section' href="https://github.com/CristianC707">Gitub</a>
                    <a className='section' href="https://www.instagram.com/cristiancuevas707/">Instagram</a>
                    <a className='section' href="https://www.linkedin.com/in/cristian-cuevas-1147a1189/">LinkedIn</a>
                </div>
            </section>
        </div>
    );
}

export default Body;