import { Link } from "react-router-dom";

const NewsList = ( { NewsBlogs } ) => {

    return ( 
        <div className="news_content">
            {NewsBlogs.map((newsList) => (
                <Link  to={`/NewsBlogs/${newsList.id}`} className="block" key={ newsList.id }>
                        <img src={ newsList.img } alt="img" />
                        <h3>{ newsList.title }</h3>
                        <span>{ newsList.body }</span>
                        { newsList.more } <i className="fa-sharp fa-solid fa-arrow-right"></i>
                </Link>
            ))}
        </div>
     );
}
 
export default NewsList;