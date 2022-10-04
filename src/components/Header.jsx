import Nav from './Nav';
import '../App.scss';
import { Link } from 'react-router-dom';

export default function header() {
    const menuItems = [
        'Home',
        'About us',
        'Contact',
        'Blog'
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
                            menuItems.map((e) => {
                                return <Nav title={e} />
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}