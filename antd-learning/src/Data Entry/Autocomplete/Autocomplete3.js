import React, { useState } from 'react';
import { AutoComplete, Space } from 'antd';
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
const App = () => {
  const [options, setOptions] = useState([]);
  const [anotherOptions, setAnotherOptions] = useState([]);
  const getPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      <AutoComplete
        options={options}
        onSearch={(text) => setOptions(getPanelValue(text))}
        status="error"
        style={{
          width: 200,
        }}
      />
      <AutoComplete
        options={anotherOptions}
        onSearch={(text) => setAnotherOptions(getPanelValue(text))}
        status="warning"
        style={{
          width: 200,
        }}
      />
    </Space>
  );
};
export default App;
