import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Experience from './components/Experience';
import Services from './components/Services';
import Company from './components/Company';
import Advantage from './components/Advantage';
import News from './components/News';
import Contact from './components/Contact';

function App() {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>

  <Header />

  <div className="App">
    <div className="mainContainer">
      <div className="left">
        <h1>We SEO Company That Will Help Your Business Become <span>Successful</span></h1>
        <p>Our professional support team try to do their best to provide you with <span>high-quality</span>
          consultations concerning any question about our services.</p>
        <button className="get_button">get in touch</button>
      </div>
      <div className="right">
        <img src="https://ld-wp.template-help.com/wordpress_free/23137/wp-content/uploads/2019/03/home-img-1.png"
          alt="img" />
      </div>
    </div>
  </div>

  <Experience />
  <Services />
  <Company />
  <Advantage />
  <News />
  <Contact />
</>
);
}

export default App;