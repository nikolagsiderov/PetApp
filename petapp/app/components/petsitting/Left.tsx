"use client";

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useState, useEffect } from "react";

interface LeftProps {
  listings?: any;
}

const Left: React.FC<LeftProps> = ({ listings }) => {
  const [userLocation, setUserLocation] = useState<any>(null);

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

  const centerCoords = { lat: 42.7587, lng: 25.2058 };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCPASOspif-cElvaiBWxsuLwAHKq9YyKbs",
    libraries: ["places"],
  });

  return isLoaded ? (
    <div className="lg:col-span-2 lg:z-10 lg:relative mb-12 lg:mb-0">
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
          <MarkerF position={userLocation} />
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
                  onClick={() => alert("test")}
                ></MarkerF>
                {/* <Circle
                  center={{
                    lat: listing.lat + 0.001,
                    lng: listing.lng - 0.001,
                  }}
                  radius={200}
                  options={{
                    strokeColor: "#fff",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#fff",
                    fillOpacity: 0.6,
                  }}
                /> */}
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
