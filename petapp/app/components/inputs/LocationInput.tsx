import React, { useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { Combobox } from "@headlessui/react";

export type LocationValue = {
  address: string;
  lat: number;
  lng: number;
};

interface LocationInputProps {
  locationValue?: LocationValue;
  onChange: (locationValue: LocationValue) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({
  locationValue,
  onChange,
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCPASOspif-cElvaiBWxsuLwAHKq9YyKbs",
    libraries: ["places"],
  });

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "bg" },
    },
  });

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    console.log(address);

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    onChange({ address, lat, lng });

    console.log(locationValue);
  };

  return isLoaded ? (
    <Combobox value={value} onChange={handleSelect} disabled={!ready}>
      <Combobox.Input
        className={"border-2 border-neutral-500 py-3 px-3 rounded-lg"}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Въведи адрес..."
      />
      <Combobox.Options
        className={"border-2 border-neutral-800 py-3 px-3 rounded-lg"}
      >
        {status === "OK" &&
          data.map(({ place_id, description }) => (
            <Combobox.Option
              className={
                "hover:bg-neutral-100 cursor-pointer py-1 px-1 rounded-lg"
              }
              key={place_id}
              value={description}
            >
              {description}
            </Combobox.Option>
          ))}
      </Combobox.Options>
    </Combobox>
  ) : (
    <></>
  );
};

export default LocationInput;
