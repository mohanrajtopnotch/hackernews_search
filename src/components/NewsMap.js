import React, { useState, useEffect } from "react";
import { Row, Col, Typography } from "antd";
import "antd/dist/antd.css";
export default function NewsMap() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
      .then((res) => res.json())
      .then(
        (res) => {
          console.log(res.hits);
          setData(res.hits);
        },
        (err) => {
          console.log(err);
        }
      );
  }, []);
  return (
    <>
      {data.map((item) => {
        return (
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid grey",
              padding: "20px",
            }}
          >
            <Row>
              <Col xs={24} sm={12} md={12} lg={8} xl={12}>
                <Typography style={{ width: "50%" }}>{item.title}</Typography>
              </Col>
              <Col xs={24} sm={12} md={12} lg={8} xl={12}>
                <a style={{ width: "50%" }}>{item.url}</a>
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={12} md={6} lg={8} xl={4}>
                <Typography style={{ width: "50%" }}>
                  {item.points} points
                </Typography>
              </Col>
              <Col xs={24} sm={12} md={6} lg={8} xl={4}>
                <Typography style={{ width: "50%" }}>{item.author}</Typography>
              </Col>
              <Col xs={24} sm={12} md={6} lg={8} xl={4}>
                <Typography style={{ width: "50%" }}>
                  {item.num_comments} Comments
                </Typography>
              </Col>
            </Row>
          </div>
        );
      })}
    </>
  );
}
