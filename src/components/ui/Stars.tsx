import React from "react";
import { FaStar } from "react-icons/fa";

const Stars = () => {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((item) => (
        <FaStar color="#FFFF00" />
      ))}
    </div>
  );
};

export default Stars;
