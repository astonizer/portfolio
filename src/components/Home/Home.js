import React from 'react'
import '../../styles/Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home_intro">
                <div className="intro_greet">Hello, I'm</div>
                <div className="intro_greet">Astel Thottankara</div>
                <div className="intro_work">
                    <p className="work-1">Full Stack Developer</p>
                    <p className="work-2">Specialing in MERN Stack</p>
                    <p className="work-3">Open Source Contributor</p>
                    <p className="work-4">Competitive Programmer</p>
                </div>
            </div>
        </div>
    )
}

export default Home
