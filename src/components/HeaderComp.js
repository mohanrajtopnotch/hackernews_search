import React from "react";
import { Link } from "react-router-dom";
import { PageHeader, Button, Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
const { Search } = Input;
export default function HeaderComp() {
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        width: "100px",
        color: "#1890ff",
      }}
    />
  );
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        style={{ backgroundColor: "#ff742b", color: "white" }}
        ghost={false}
        color="black"
      >
        <Search
          key="2"
          placeholder="Search Storie by title , url or author"
          enterButton="Search"
          size="large"
          suffix={suffix}
          style={{ margin: "3px 0px", width: "100%" }}
        />
        <Link to="/settings">
          <Button
            style={{
              margin: "10px 1px",
              backgroundColor: "white",
              border: "1px solid white",
              borderRadius: "2px",
              width: "30%",
            }}
          >
            Settings
          </Button>
        </Link>
      </PageHeader>
    </div>
  );
}
