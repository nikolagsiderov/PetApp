"use client";

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useState, useEffect } from "react";

interface LeftProps {
  listings?: any;
}

const Left: React.FC<LeftProps> = ({ listings }) => {
  const [userLocation, setUserLocation] = useState<any>();

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  const coordinates = { lat: 42.7587, lng: 25.2058 };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCPASOspif-cElvaiBWxsuLwAHKq9YyKbs",
  });

  return isLoaded ? (
    <div className="lg:col-span-2 lg:z-10 lg:relative mb-12 lg:mb-0">
      <div className="lg:sticky lg:top-[16rem]">
        <GoogleMap
          mapContainerClassName="w-full h-[36rem] rounded-2xl"
          center={coordinates}
          zoom={7.2}
          options={{
            streetViewControl: false,
            gestureHandling: "cooperative",
            minZoom: 7.2,
          }}
        >
          <MarkerF
            position={userLocation}
            icon={{
              url: "/images/user-location.png",
              scaledSize: new google.maps.Size(50, 50),
            }}
          />
          {listings?.map((listing: any) => {
            const listingCoords = { lat: 42.696829, lng: 23.320866 };
            return <MarkerF key={listing.id} position={listingCoords} />;
          })}
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Left;
