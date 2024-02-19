import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

export default function Rating() {
  const [rateValue, setRateValue] = useState(0);

  const handleSubmit = (value: number) => {
    setRateValue(value);
  };

  return (
    <div className="flex flex-row-reverse justify-end gap-4">
      {[5, 4, 3, 2, 1].map((value) => {
        return (
          <div
            key={value}
            onClick={() => handleSubmit(value)}
            className={`peer cursor-pointer transition-all ${
              value <= rateValue
                ? "text-amber-500"
                : "text-amber-300 hover:text-amber-500 peer-hover:text-amber-500"
            }`}
          >
            <FaStar size={24} className="h-12 w-12" />
          </div>
        );
      })}
    </div>
  );
}
