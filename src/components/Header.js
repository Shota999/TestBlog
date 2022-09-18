import './Header.css'

export default function header() {
  return (
    <div className="mainHeader">
        <div className="headerContainer">
            <div className="logo">
                <img src="https://ld-wp.template-help.com/wordpress_free/23137/wp-content/themes/newgroup/assets/images/logo.png" alt="logo" />
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#">Home</a> </li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
