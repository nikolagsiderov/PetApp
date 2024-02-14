"use client";

import { SafeUser } from "../types";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useState, useEffect } from "react";
import ListingCard from "@/app/components/listings/ListingCard";

interface MapViewProps {
  listings?: any;
  currentUser?: SafeUser | null | undefined;
}

const MapView: React.FC<MapViewProps> = ({ listings, currentUser }) => {
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

  const coordinates = { lat: 42.5587, lng: 25.2058 };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCPASOspif-cElvaiBWxsuLwAHKq9YyKbs",
  });

  return isLoaded ? (
    <div className="pt-64 pb-20 gap-8 w-full h-[600px]">
      <GoogleMap
        mapContainerClassName="w-full h-[600px] rounded-2xl"
        center={coordinates}
        zoom={8}
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
          return (
            <MarkerF
              key={listing.id}
              position={listingCoords}
              icon={{
                url: "/images/dog.png",
                scaledSize: new google.maps.Size(50, 50),
              }}
            />
          );
        })}
      </GoogleMap>
      <div className="pt-8 pb-16 relative bottom-0">
        <div className="grid grid-cols-2 lg:grid-cols-8 gap-8">
          {listings?.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}  
              data={listing}
              listingUserName={listing.user.name}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default MapView;
