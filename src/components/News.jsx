import React from 'react';
import { useState , useEffect} from 'react';
import NewsList from './NewsList';

export default function News() {
    const [NewsBlogs, setNewBlogs] = useState(null);
 
    useEffect(() =>{
        fetch('http://localhost:8000/NewsBlogs')
            .then(res =>{
                return res.json();
            })
            .then( data => {
                setNewBlogs(data);
            });
    }, []);
    return (
    <div className="App">
        <div className="mainContainer">
            <div className="news_container">
                <h2>Latest news of our company</h2>
                {NewsBlogs &&  <NewsList  NewsBlogs={ NewsBlogs }/>}
            </div>
        </div>
    </div>
    )
}