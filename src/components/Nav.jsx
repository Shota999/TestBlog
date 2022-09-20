import React from 'react'

export default function Nav(props) {

    const title = props.title;

    return (
        <li><a href="#">{title}</a></li>
    )
}