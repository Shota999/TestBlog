import SocMedia from './SocMedia';
import Map from './Map';


export default function Contact() {

  const contactInformation = {
    AddRess : '357 Travis Ave Staten Island, NY 10314, USA',
    Mobile : "800.1556.78.18",
    Hotline : "800.5567.99.21",
    Info : "info@demolink.org"
    };

const socMedia = [
<i className="fa-brands fa-facebook"></i>,
<i className="fa-brands fa-instagram"></i>,
<i className="fa-brands fa-youtube"></i>,
<i className="fa-brands fa-linkedin"></i>
];

return (
<div className="contact_container">
  <div className="content">
    <div className="information">


      <h2>Contact Information</h2>

      <ul>
        <h3>Address</h3>
        <li>{contactInformation.AddRess}</li>

        <h3>Phones</h3>
        <li>Mobile: {contactInformation.Mobile}</li>
        <li>Hotline: {contactInformation.Hotline}</li>

        <h3>Mail</h3>
        <li>Mail: {contactInformation.Info}</li>
      </ul>

      <ul className='socMedia'>
        {
          socMedia.map((e) => {
            return <SocMedia socTitle={e} />
          })
        }
      </ul>

      <div>
      </div>
    </div>
  </div>

  <Map />
</div>
)
}