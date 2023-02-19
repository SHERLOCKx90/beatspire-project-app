import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className="about-us" id='About'>
            <div className="about-text">

                <div className="para-title">

                    <div className="abt-tit">About</div>
                    <div className="us-div">Us</div>
                </div>

                <div className="para-con">
                    <p className="para">
                        Phoenix is a dynamic team of student developers passionate about building innovative
                        technology solutions. As participants in the web 3.0 hackathon, Phoenix is focused on
                        developing a mood-based music recommendation system website that delivers personalized
                        music recommendations to users based on their current mood.The team is excited about the opportunity to showcase their skills and contribute to the development of the
                        web 3.0 ecosystem, and they are confident that their project will be a game-changer in the
                        world of music recommendation systems.</p>
                </div>
            </div>
            <div className="about-image">
                <img src="./about-us.svg" alt="" className='abt-img' />
            </div>
        </div>
    )
}
