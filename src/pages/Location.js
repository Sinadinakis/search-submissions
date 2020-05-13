import React, { useState } from "react";

// Components
import MapContainer from "../components/oragnisms/MapContainer";
import SearchInput from "../components/molecules/SearchInput";

const Location = () => {
  let [latitude, setLatitude] = useState(52.379189);
  let [longitude, setLongitude] = useState(4.899431);
  let [address, setAddress] = useState("");

  const updateCoordinates = (e) => {
    e.preventDefault();
    const encodedAddress = encodeURI(address);

    // fetches data from our api
    fetch(
      `https://google-maps-geocoding.p.rapidapi.com/geocode/json?language=en&address=${encodedAddress}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
          "x-rapidapi-key":
            "e4b8f8d1afmsh9e01aabf6a7d83bp1a3b93jsnf67dab795226",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        response &&
          response.results &&
          // eslint-disable-next-line
          response.results.map((item) => {
            setLatitude(item.geometry.location.lat);
            setLongitude(item.geometry.location.lng);
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form
        onSubmit={(e) => updateCoordinates(e)}
        className="form form--container"
      >
        <SearchInput
          name="location"
          label="Search Location"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <p>
          The latitude is {latitude} <br />
          The longitude is {longitude}
        </p>
      </form>
      <MapContainer
        latitude={latitude}
        longitude={longitude}
        address={address}
      />
    </>
  );
};

export default Location;
