import React from "react";
import PropTypes from "prop-types";
import GoogleMap from "google-map-react";

const Marker = ({ text }) => <div>{text}</div>;

const MapContainer = ({ latitude, longitude, address }) => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMap
        bootstrapURLKeys={{ key: "AIzaSyDtTpjjbkrCNIciCCmGXJc6vL_pmoe2k_0" }}
        defaultCenter={{
          lat: latitude,
          lng: longitude,
        }}
        defaultZoom={11}
      >
        <Marker lat={latitude} lng={longitude} text={address} name={address} />
      </GoogleMap>
    </div>
  );
};

MapContainer.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  address: PropTypes.string,
};

export default MapContainer;
