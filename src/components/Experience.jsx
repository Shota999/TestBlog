import React from 'react'
import '../App.scss'

export default function Experience() {

    
return (
<div className="App">
    <div className="mainContainer">
        <div className="experience">
            <div className="videoContainer">
                <div className="expLeft">
                    <img src="https://ld-wp.template-help.com/wordpress_free/23137/wp-content/uploads/2019/03/home-video-bg.jpg"
                        alt="img" />
                    <div className="play_button">
                        <i className="fa-regular fa-circle-play"></i>
                    </div>
                </div>
                {/* <div className="popup">
                    <div className="video_popup">
                        <iframe 
                            width="1200" 
                            height="700" 
                            src="https://www.youtube.com/embed/XHOmBV4js_E"
                            title="YouTube video player" 
                            frameborder="0"    
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div> */}
                <div className="expRight">
                    <h2>Our company has many years of experience!</h2>
                    <p>During our work we developed our approach to providing products and services, and the strategy of
                        working with our clients.</p>
                    <ul>
                        <li><i className="fa fa-check"></i>Content Optimization;</li>
                        <li><i className="fa fa-check"></i>Branding Strategy;</li>
                        <li><i className="fa fa-check"></i>Better ROI than normal ads.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
)
}