import '../App.scss'

export default function Advantage() {
return (
<div className="App background_container">
    <div className="mainContainer advantages">
        <div className="advantage">
            <div className="advantage_left">
                <img src="/images/advantage_images/home-img-2-1.jpg" alt="img" />
            </div>
            <div className="advantage_right">
                <h2>The advantages of our company</h2>
                <div className="blocks">
                    <div className="block">
                        <img src="/images/advantage_images/icon-4.webp" alt="icon" />
                        <h3>We work fast</h3>
                        <p>Find a better way to break through. Innovate boldly, and intelligently.</p>
                    </div>
                    <div className="block">
                        <img src="/images/advantage_images/icon-5.webp" alt="icon" />
                        <h3>We work fast</h3>
                        <p>Find a better way to break through. Innovate boldly, and intelligently.</p>
                    </div>
                    <div className="block">
                        <img src="/images/advantage_images/icon-6.webp" alt="icon" />
                        <h3>We work fast</h3>
                        <p>Find a better way to break through. Innovate boldly, and intelligently.</p>
                    </div>
                    <div className="block">
                        <img src="/images/advantage_images/icon-7.webp" alt="icon" />
                        <h3>We work fast</h3>
                        <p>Find a better way to break through. Innovate boldly, and intelligently.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="advantage">
            <div className="advantage_left">
                <h2>We stand for fair play and unique ideas!</h2>
                <p>During our work we developed our approach to providing <span>products and services</span>, and the
                    strategy of working with our clients.</p>
                    <button className="get_button">get in touch</button>
            </div>
            <div className="advantage_right">
                <img className="advantage_image" src="/images/advantage_images/home-img-3.webp" alt="img" />
            </div>
        </div>
    </div>
</div>
)
}