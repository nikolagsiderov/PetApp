"use client";

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

interface LeftProps {
  listings?: any;
}

const Left: React.FC<LeftProps> = ({ listings }) => {
  const [userLocation, setUserLocation] = useState<any>(null);
  const router = useRouter();

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

  const handleMapSelect = (listingId: string) => {
    router.push(`/listings/${listingId}`);
  };

  const centerCoords = { lat: 42.7587, lng: 25.2058 };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCPASOspif-cElvaiBWxsuLwAHKq9YyKbs",
    libraries: ["places"],
  });

  return isLoaded ? (
    <div className="lg:col-span-2 lg:relative mb-12 lg:mb-0">
      <div className="lg:sticky lg:top-[16rem]">
        <GoogleMap
          mapContainerClassName="w-full h-[36rem] rounded-2xl"
          center={userLocation || centerCoords}
          zoom={userLocation ? 13 : 7.2}
          options={{
            streetViewControl: false,
            gestureHandling: "cooperative",
            minZoom: 7.2,
          }}
        >
          <MarkerF
            icon={{
              url: "/images/logo.png",
              scaledSize: new google.maps.Size(60, 60),
            }}
            position={userLocation}
          />
          {listings?.map((listing: any) => {
            return (
              <div key={listing.id}>
                <MarkerF
                  icon={{
                    url: "/images/white box.png",
                    scaledSize: new google.maps.Size(60, 45),
                  }}
                  position={{
                    lat: listing.lat + 0.001,
                    lng: listing.lng - 0.001,
                  }}
                  label={{
                    text: listing.price.toFixed(2),
                    color: "black",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  onClick={() => handleMapSelect(listing.id)}
                ></MarkerF>
              </div>
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
