// import Nav from './Nav';
import '../App.scss';
import { Link } from 'react-router-dom';

function Nav( {title , path} ) {

    return (
        <li>
            <Link to={path}>
                {title}
            </Link>
        </li>
    )
}

export default function header() {
    const menuItems = [
        {title: "home", path: "/"},
        {title: "about", path: "/about"},
        {title: "contact", path: "/ContactPage"},
    ];


    return (
        <div className="mainHeader">
            <div className="headerContainer">
                <div className="logo">
                    <Link to="/">
                        <img src="https://ld-wp.template-help.com/wordpress_free/23137/wp-content/themes/newgroup/assets/images/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="menu">
                    <ul>
                        {
                            menuItems.map((e , index) => {
                                return <Nav key={index} title={e.title} path={e.path}/>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}