import React, { useState } from "react";
import { Input, Table } from "antd";

const Input1 = () => {
  // Dummy data for table
  const [data, setData] = useState([
    {
      key: "1",
      name: "John Doe",
      email: "johndoe@gmail.com",
      status: "Active",
      role: "Developer",
      created: "19 Aug 2023",
      lastModified: "25 Aug 2023",
    },
    {
      key: "2",
      name: "Jane Smith",
      email: "janesmith@gmail.com",
      status: "Pending Activation",
      role: "Manager",
      created: "15 Aug 2023",
      lastModified: "24 Aug 2023",
    },
    {
      key: "3",
      name: "Jim Green",
      email: "jimgreen@gmail.com",
      status: "Inactive",
      role: "Support",
      created: "12 Aug 2023",
      lastModified: "20 Aug 2023",
    },
    {
      key: "4",
      name: "Jessica Yellow",
      email: "jessicayellow@gmail.com",
      status: "Active",
      role: "Designer",
      created: "22 Aug 2023",
      lastModified: "27 Aug 2023",
    },
  ]);

  // Search function
  const handleSearch = (value) => {
    // Implement your search logic here and update the state
    console.log(value);
    // For example, to filter the data by name:
    const filteredData = data.filter((entry) =>
      entry.name.toLowerCase().includes(value.toLowerCase())
    );
    setData(filteredData);
  };

  // Table columns
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Created",
      dataIndex: "created",
      key: "created",
    },
    {
      title: "Last Modified",
      dataIndex: "lastModified",
      key: "lastModified",
    },
    // ... more columns if needed
  ];

  return (
    <div>
      <Input.Search
        placeholder="Search..."
        onSearch={handleSearch}
        style={{ marginBottom: 16 }}
      />
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Input1;
