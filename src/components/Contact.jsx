import Information from './Information'
import SocMedia from './SocMedia'
import GoogleMapReact from 'google-map-react';


export default function Contact() {
  const contact = ["357 Travis Ave Staten Island, NY 10314, USA", "Mobile: 800.1556.78.18", "Hotline: 800.5567.99.21",
    "info@demolink.org"];

  const socMedia = [<i class="fa-brands fa-facebook"></i>, <i class="fa-brands fa-instagram"></i>, <i class="fa-brands fa-youtube"></i>]

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };


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

      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </div>

  )
}