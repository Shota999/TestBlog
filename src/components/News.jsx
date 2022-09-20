import React from 'react'

export default function News() {
return (
<div className="App">
    <div className="mainContainer">
        <div className="news_container">
            <h2>Latest news of our company</h2>
            <div className="news_content">
                <div className="block">
                    <img src="/images/news_images/news.jpg" alt="img" />
                    <h3>WordPress Business Themes to Give Your Company A Boost</h3>
                    <span>January 8, 2019 </span>
                    <a href="#">learn more </a>
                </div>
                <div className="block">
                    <img src="/images/news_images/news.jpg" alt="img" />
                    <h3>15 Pro Industrial WordPress Themes Designed in 2018</h3>
                    <span>January 8, 2019 </span>
                    <a href="#">learn more </a>
                </div>
                <div className="block">
                    <img src="/images/news_images/news.jpg" alt="img" />
                    <h3>Project Presentation</h3>
                    <span>January 8, 2019 </span>
                    <a href="#">learn more </a>
                </div>
            </div>
        </div>
    </div>
</div>
)
}