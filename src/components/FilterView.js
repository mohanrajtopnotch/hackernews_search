import React from "react";
import { Link } from "react-router-dom";
import { PageHeader, Select, Typography } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
const { Option } = Select;

export default function FilterView() {
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        width: "100px",
        color: "#1890ff",
      }}
    />
  );
  const SearchData = ["All", "Stories", "Comments"];
  const ByData = ["Popularity", "Date"];
  const ForData = [
    "All time",
    "Last 24th",
    "Past Week",
    "Past Month",
    "Past Year",
  ];
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        style={{ backgroundColor: "#ff742b", color: "white" }}
        ghost={false}
      >
        <label style={{ margin: "10px" }}>Search</label>
        <Select
          defaultValue={SearchData[0]}
          style={{ width: 120, width: "100%" }}
        >
          {SearchData.map((item) => (
            <Option key={item}>{item}</Option>
          ))}
        </Select>
        <label style={{ margin: "10px" }}>by</label>
        <Select defaultValue={ByData[1]} style={{ width: 120, width: "100%" }}>
          {ByData.map((item) => (
            <Option key={item}>{item}</Option>
          ))}
        </Select>
        <label style={{ margin: "10px" }}>for</label>
        <Select defaultValue={ForData[3]} style={{ width: 120, width: "100%" }}>
          {ForData.map((item) => (
            <Option key={item}>{item}</Option>
          ))}
        </Select>
        <Typography
          style={{ color: "white", fontSize: "15px", padding: "10px" }}
        >
          122,23,24,44,35,2 results (0.001 seconds)
        </Typography>
      </PageHeader>
    </div>
  );
}
