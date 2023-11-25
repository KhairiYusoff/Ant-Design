import React, { useState } from "react";
import { AutoComplete } from "antd";

const Autocomplete1 = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    // Simulated filtering from the local data
    if (value) {
      setOptions(
        new Array(5).fill(null).map((_, idx) => ({
          value: `${value}-${idx}`,
          label: `${value}-${idx}`,
        }))
      );
    } else {
      setOptions([]);
    }
  };

  const onSelect = (value) => {
    console.log("onSelect", value);
  };

  return (
    <AutoComplete
      options={options}
      style={{ width: 200 }}
      onSelect={onSelect}
      onSearch={handleSearch}
      placeholder="input here"
    />
  );
};

export default Autocomplete1;
