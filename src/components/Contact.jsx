import Information from './Information';
import SocMedia from './SocMedia';
import Map from './Map';


export default function Contact() {

  const contact = [
    "357 Travis Ave Staten Island, NY 10314, USA",
    "Mobile: 800.1556.78.18",
    "Hotline: 800.5567.99.21",
    "info@demolink.org"
  ];

  const socMedia = [
    <i class="fa-brands fa-facebook"></i>,
    <i class="fa-brands fa-instagram"></i>,
    <i class="fa-brands fa-youtube"></i>,
    <i class="fa-brands fa-linkedin"></i>
  ];




  return (
    <div className="contact_container">
      <div className="content">
        <h2>Contact Information</h2>

        <ul>
          {
            contact.map((e) => {
              return <Information infoTitle={e} />
            })
          }
        </ul>
        <ul className='socMedia'>
          {
            socMedia.map((e) => {
              return <SocMedia socTitle={e} />
            })
          }
        </ul>
      </div>

      <Map />
    </div>
  )
}