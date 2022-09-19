import React from 'react'
import '../App.scss'

export default function Experience() {
    return (
        <div className="App">
            <div className="mainContainer">
                <div className="experience">
                    <div className="videoContainer">
                        <div className="expLeft">
                            <img src="https://ld-wp.template-help.com/wordpress_free/23137/wp-content/uploads/2019/03/home-video-bg.jpg" alt="img" />
                        </div>
                        <div className="expRight">
                            <h2>Our company has many years of experience!</h2>
                            <p>During our work we developed our approach to providing products and services, and the strategy of working with our clients.</p>
                            <ul>
                                <li>Content Optimization;</li>
                                <li>Branding Strategy;</li>
                                <li>Better ROI than normal ads.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
