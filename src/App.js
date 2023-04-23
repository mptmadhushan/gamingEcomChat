import { BrowserRouter as Router, Switch } from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react'

import GoogleMap from 'google-maps-react-markers'

import HomeOne from "./pages/homes/HomeOne";
import Contact from "./pages/contact/Contact";
import ScrollToTopRoute from "./components/scrolltotop/ScrollToTopRoute";
import axios from 'axios';
import { Widget,addResponseMessage } from "react-chat-widget-2";
import "react-chat-widget-2/lib/styles.css";
import Modal from 'react-modal';
import mapOptions from './map-options.json'
import Geocode from "react-geocode";
import Marker from './marker'

Geocode.setApiKey("AIzaSyCwwyOJUiBpHmDwJRrtNh53fpRfaJnHVKQ");
Geocode.setLanguage("en");
Geocode.setRegion("lk");
Geocode.setLocationType("ROOFTOP");

const baseUrl = 'https://reqres.in';
const coordinates = [
	[
		{
			lat:6.112594,
			lng: 80.149251,
			name: 'gamagedara',
		},
		{
			lat: 6.110503,
			lng: 80.146325,
			name: 'hajara',
		},
		{
			lat:6.093002,
			lng: 80.143485,
			name: 'sanjula',
		},
	],
	[
		{
			lat: 6.855471,
			lng: 80.064498,
			name: 'luke',
		},
		{
			lat: 6.850655,
			lng: 80.065469,
			name: 'nomal',
		},
		{
			lat: 6.849836,
			lng: 80.065268,
			name: 'dineesha',
		},
	],
]
const customStyles = {
  content: {
    zIndex:1,
    // top: '50%',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
  },
};

function App() {
  const mapRef = useRef(null)

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [resp, setResponse] = React.useState(false);
	const [currCoordinates, setCurrCoordinates] = useState({
    lat:6.112594,
    lng: 80.149251,
  },)
	const [mapReady, setMapReady] = useState(false)

  useEffect(() => {
		axios.get(`http://api.positionstack.com/v1/forward?access_key=57be5b31d7081a49d1546fe1e046521d&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC`)
		.then(res => {
		  const data = res.data;
		  console.log("🚀 ~ file: App.js:78 ~ useEffect ~ data:", res)
		})
	},
		[]);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleNewUserMessage = (newMessage) => {
    onSubmitFormHandler(newMessage)
    console.log(`New message incoming! ${newMessage}`);
    

  };
  const onSubmitFormHandler = async (newMessage) => {
     const respo={
      Image: "https://i.ikman-st.com/hithachi-lumen-4000-for-sale-kalutara/e00c626c-fa91-4fe9-bfe6-8ba79f52305a/142/107/cropped.jpg",
        Link: "https://ikman.lk//si/ad/bradnew-mouse-for-sale-gampaha",
        MoreDetails: "ගම්පහ, පරිගණක උපාංග",
        Price: "රු 500",
        Product: "Brand New Mouse",
        UpdatedDate: "දින  1"
    }
    setResponse(respo)
    const city = respo.Link.split("-")
    console.log("🚀 ~ file: App.js:111 ~ onSubmitFormHandler ~ city:", city.at(-1))
   await Geocode.fromAddress(city).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setCurrCoordinates({
          lat:lat,
          lng: lng,
        })
        console.log(lat, lng);
      },
      (error) => {
        console.error(error);
      }
    );
    addResponseMessage(`Product : ${resp.Product}`);
    addResponseMessage(`Link : ${resp.Link}`);
    addResponseMessage(`MoreDetails : ${resp.MoreDetails}`);
    addResponseMessage(`Price : ${resp.Price}`);
    openModal()
    try {
      const response = await axios.post(`${baseUrl}/api/users`, {
        newMessage,
        
      });
      if (response.status === 201) {
        // alert(` You have created: ${JSON.stringify(response.data)}`);
     
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      // alert("An error has occurred");
    }
  };

  const onGoogleApiLoaded = ({ map, maps }) => {
		mapRef.current = map
		setMapReady(true)
	}
  
  return (
    <div className="App">
      <Widget handleNewUserMessage={handleNewUserMessage} title="Gamer's Choice Chat" subtitle="Start convasation" />
      <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="map-container">
				<GoogleMap
					apiKey="AIzaSyCwwyOJUiBpHmDwJRrtNh53fpRfaJnHVKQ"
					defaultCenter={{ lat: currCoordinates.lat, lng:currCoordinates.lng }}
					defaultZoom={15}
					options={mapOptions}
					mapMinHeight="600px"
					onGoogleApiLoaded={onGoogleApiLoaded}
					// onChange={onMapChange}
				>
						<Marker lat={currCoordinates.lat} lng={currCoordinates.lng} markerId={'name'}  className="marker" />
				</GoogleMap>
			
			</div>
      {resp&&<div>
        <div className="col-xl">
              <div className="shop-item">
                <div className="product-thumb">
                  <a href="/#">
                    <img src={resp?.Image} alt="" />
                  </a>
                </div>
                <div className="product-content">
                  <div className="product-tag">
                    <a href="/#">{resp?.Link?.split("-").at(-1)}</a>
                  </div>
                  <h4>
                    <a href="/#">{resp?.MoreDetails}</a>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">
                      <h5>{resp?.Price}</h5>
                    </div>
                    <div className="product-cart-action">
                      <a href={resp?.Link} target="_blank">
                        <i className="fas fa-shopping-basket" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>}
      </Modal>
    </div>
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path="/">
          <HomeOne />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path="/contact">
            <Contact />
          </ScrollToTopRoute>
   
        </Switch>
      </Router>
    </div>
  );
}

export default App;
