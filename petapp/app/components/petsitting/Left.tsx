"use client";

import { SafeUser } from "@/app/types";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useState, useEffect } from "react";

interface LeftProps {
  listings?: any;
  currentUser?: SafeUser | null;
}

const Left: React.FC<LeftProps> = ({ listings, currentUser }) => {
  const [userLocation, setUserLocation] = useState<any>();

  const currentUserImageSrc: string =
    currentUser && currentUser.image
      ? currentUser.image!
      : "/images/user-location.png";

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
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
              url: currentUserImageSrc,
              scaledSize: new google.maps.Size(50, 50),
            }}
          />
          {listings?.map((listing: any) => {
            const listingCoords = { lat: 42.696829, lng: 23.320866 };
            return (
              <MarkerF
                icon={{
                  url: "/images/white box.png",
                  scaledSize: new google.maps.Size(60, 45),
                }}
                key={listing.id}
                position={listingCoords}
                label={listing.price.toFixed(2)}
                onClick={() => alert("test")}
              ></MarkerF>
            );
          })}
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Left;
