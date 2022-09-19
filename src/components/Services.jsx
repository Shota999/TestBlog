import '../App.scss'

export default function services() {
    return (
        <>
            <div className="App background_container">
                <div className="mainContainer services">
                    <div className="service_container">
                        <h2>Our services that you can use</h2>
                        <p>We provide various business <span>services</span> to help our clients to handle different issues and
                            boost their business.</p>
                        <div className="service_content">
                            <div className="block">
                                <img src="https://ld-wp.template-help.com/wordpress_free/23137/wp-content/uploads/2019/03/icon-1-1.png"
                                    alt="img" />
                                <h3>Search engine optimization</h3>
                                <p>Social media plays an important role in driving traffic to your site, so we operate with most
                                    innovative SEO tools.</p>
                                <a href="#">learn more</a>
                            </div>
                            <div className="block">
                                <img src="https://ld-wp.template-help.com/wordpress_free/23137/wp-content/uploads/2019/03/icon-2-1.png"
                                    alt="img" />
                                <h3>Email marketing services</h3>
                                <p>With this service you will get professional help and guidance how to resolve and prevent more
                                    extra costs.</p>
                                <a href="#">learn more</a>
                            </div>
                            <div className="block">
                                <img src="https://ld-wp.template-help.com/wordpress_free/23137/wp-content/uploads/2019/03/icon-3-1.png"
                                    alt="img" />
                                <h3>Profitable AdWords campaigns</h3>
                                <p>Develop a deeper understanding of market trends, threats, opportunities, seo, competitors and
                                    customers.</p>
                                <a href="#">learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="images_container">
                        <img src="/images/brand-1.webp" alt="img" />
                        <img src="/images/brand-1.webp" alt="img" />
                        <img src="/images/brand-1.webp" alt="img" />
                        <img src="/images/brand-1.webp" alt="img" />
                        <img src="/images/brand-1.webp" alt="img" />
                        <img src="/images/brand-1.webp" alt="img" />
                    </div>
                </div>
            </div>
        </>
    )
}