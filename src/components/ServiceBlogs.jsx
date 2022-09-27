const ServiceBlogs = ( {blogs} ) => {

return (
    <div className="service_content">
        {blogs.map((blog) => (
        <div className="block" key={blog.id}>
            <img src={ blog.img } />
            <h3>{ blog.title }</h3>
            <p>{ blog.body }</p>
        </div>
        ))}
    </div>
);
}

export default ServiceBlogs;