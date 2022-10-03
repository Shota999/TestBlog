import '../App.scss'
import { useState , useEffect} from 'react';
import ServiceBlogs from './ServiceBlogs';


const Services = () => {
    const [blogs , setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
            });
    }, []); 

    return (
            <div className="App background_container">
                <div className="mainContainer services">
                    <div className="service_container">
                        <h2>Our services that you can use</h2>
                        <p className="service_p">We provide various business <span>services</span> to help our clients to handle different issues and
                            boost their business.</p>

                        {blogs && <ServiceBlogs blogs={ blogs } />}

                    </div>
                    <div className="images_container">
                        <img src="/images/service_images/brand-1.webp" alt="img" />
                        <img src="/images/service_images/brand-2.webp" alt="img" />
                        <img src="/images/service_images/brand-3.webp" alt="img" />
                        <img src="/images/service_images/brand-4.webp" alt="img" />
                        <img src="/images/service_images/brand-5.webp" alt="img" />
                        <img src="/images/service_images/brand-6.webp" alt="img" />
                    </div>
                </div>
            </div>
    )
}
export default Services;