"use client";

import Container from "@/app/components/Container";
import ListView from "./ListView";
import MapView from "./MapView";
import { FaMapLocationDot, FaListUl } from "react-icons/fa6";
import { useState } from "react";
import { SafeListing, SafeUser } from "../types";

interface PetSittingClientProps {
  listings?: Array<SafeListing> | null | undefined;
  currentUser?: SafeUser | null | undefined;
}

const PetSittingClient: React.FC<PetSittingClientProps> = ({
  listings,
  currentUser,
}) => {
  const [mapView, setMapView] = useState(false);

  const toggleView = () => {
    setMapView(!mapView);
  };

  return (
    <Container>
      <div className="right-20 fixed z-10 bottom-20 justify-center items-center">
        <div
          onClick={toggleView}
          className="cursor-pointer flex flex-row gap-1 justify-center items-center rounded-full hover:opacity-100 opacity-50 transition w-full bg-rose-500 font-light text-md p-4 text-white"
        >
          {!mapView ? (
            <div className="flex flex-row justify-center items-center gap-2">
              <FaMapLocationDot size={32} className="fill-white" />
              Смени изглед към карта
            </div>
          ) : (
            <div className="flex flex-row justify-center items-center gap-2">
              <FaListUl size={32} className="fill-white" />
              Смени изглед към списък
            </div>
          )}
        </div>
      </div>

      {!mapView && <ListView listings={listings} currentUser={currentUser} />}
      {mapView && <MapView listings={listings} currentUser={currentUser} />}
    </Container>
  );
};

export default PetSittingClient;
