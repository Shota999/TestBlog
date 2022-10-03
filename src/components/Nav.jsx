import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav(props) {

    const title = props.title;

    return (
        <li>
            <Link to="/">
                {title}
            </Link>
        </li>
    )
}