"use client";

import useTowns from "@/app/hooks/useTowns";
import Select from "react-select";

export type TownSelectValue = {
  value: string;
  label: string;
  region: string;
  latlng?: number[];
};

interface TownSelectProps {
  value?: TownSelectValue;
  onChange: (value: TownSelectValue) => void;
}

const TownSelect: React.FC<TownSelectProps> = ({ value, onChange }) => {
  const { getAll } = useTowns();

  return (
    <div>
      <Select
        placeholder="Къде..."
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as TownSelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-1">
            <div>{option.label},</div>
            <span className="text-neutral-500 ml-1">{option.region}</span>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
};

export default TownSelect;
