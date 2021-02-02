import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import { useParams, Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";

const Marker = ({ text }) => {
  return (
    <div>
      <h3 style={{ color: "blue" }}>{text}</h3>
      <GrLocation size="40px" />
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: 700px;
`;

const MapPage = () => {
  let { lat, lng } = useParams();
  lat = Number(lat);
  lng = Number(lng);

  return (
    <>
      {!isNaN(lat) && !isNaN(lng) ? (
        <Container>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyASraEf9ApAZ1hUocsXK_aKUOJxUgi9BXk",
            }}
            defaultCenter={{
              lat,
              lng,
            }}
            defaultZoom={11}
          >
            <Marker lat={lat} lng={lng} text="My Location" />
          </GoogleMapReact>
          <Link to="/">Back To Home Page</Link>
        </Container>
      ) : (
        <h1>Wrong Latitude/Longitude Number</h1>
      )}
    </>
  );
};

export default MapPage;
