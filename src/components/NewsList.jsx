import { Link } from "react-router-dom";

const NewsList = ( { NewsBlogs } ) => {

    return ( 
        <div className="news_content">
            {NewsBlogs.map((newsList) => (
                <div className="block" key={ newsList.id }>
                    
                        <img src={ newsList.img } alt="img" />
                        <h3>{ newsList.title }</h3>
                        <span>{ newsList.body }</span>
                        <Link to={`/NewsBlogs/${newsList.id}`}>
                            { newsList.more } <i className="fa-sharp fa-solid fa-arrow-right"></i>
                        </Link>
                </div>
            ))}
        </div>
     );
}
 
export default NewsList;