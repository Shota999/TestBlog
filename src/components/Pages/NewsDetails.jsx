import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../Header';


const NewsDetails = () => {
    const { id } = useParams();

    return (
        <>
            <Header />
            <div className="news_content">
                <h2>News Details - { id }</h2>
                <p>sadasdsa</p>
            </div>
        </>
     );
}
 
export default NewsDetails;