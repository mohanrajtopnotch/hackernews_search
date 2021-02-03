import React from "react";
import { Link } from "react-router-dom";
export default function SettingsScreen() {
  return (
    <div style={{ backgroundColor: "#f6f6f0", flex: 1 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#ff742b",
          padding: "10px",
        }}
      >
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "15px", fontWeight: 500 }}>
            Search <br /> Hacker News
          </p>
        </div>
        <div style={{ flex: 3 }}></div>
        <div style={{ flex: 1 }}>
          <Link to="/">
            <button
              style={{
                fontSize: "15px",
                fontWeight: 500,
                textDecoration: "none",
                margin: "10px",
                backgroundColor: "white",
                border: "solid 2px white",
                borderRadius: "3px",
                outline: "none",
              }}
            >
              {" "}
              Back
            </button>
          </Link>{" "}
        </div>
      </div>
      <div>
        <p style={{ marginTop: 0, padding: 2, fontWeight: 400 }}>
          <strong>Settings</strong>
        </p>
        <div>
          <p style={{ paddingRight: 2, paddingLeft: 2 }}>
            <strong>Display options</strong>
            <hr />
          </p>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1 }}>
              <p style={{ float: "right" }}>Style</p>
            </div>
            <div style={{ flex: 1, float: "left" }}>
              <select style={{ padding: 5, margin: 13 }}>
                <option>Default</option>
                <option>Experimental</option>
              </select>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1 }}>
              <p style={{ float: "right" }}>Hits per page</p>
            </div>
            <div style={{ flex: 1, float: "left" }}>
              <select style={{ padding: 5, margin: 13 }}>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>50</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <p style={{ paddingRight: 2, paddingLeft: 2 }}>
            <strong>Ranking options</strong>
            <hr />
          </p>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1 }}>
              <p style={{ float: "right" }}>Default type</p>
            </div>
            <div style={{ flex: 1, float: "left" }}>
              <select style={{ padding: 5, margin: 13 }}>
                <option>All</option>
                <option>Stories</option>
                <option>Comments</option>
              </select>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1 }}>
              <p style={{ float: "right" }}>Default type</p>
            </div>
            <div style={{ flex: 1, float: "left" }}>
              <select style={{ padding: 5, margin: 13 }}>
                <option>Most Popular First</option>
                <option>Most Recent First</option>
              </select>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1 }}>
              <p style={{ float: "right" }}>Default date range</p>
            </div>
            <div style={{ flex: 1, float: "left" }}>
              <select style={{ padding: 5, margin: 13 }}>
                <option>Last 24h</option>
                <option>Last Week</option>
                <option>Last Month</option>
                <option>Last Year</option>
                <option>Forever</option>
              </select>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1 }}>
              <p style={{ float: "right" }}>Use the story text for search</p>
            </div>
            <div style={{ flex: 1, float: "left" }}>
              <input
                style={{ padding: 5, margin: 13, marginTop: 23 }}
                type="checkbox"
              ></input>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1 }}>
              <p style={{ float: "right" }}>
                Use the author's username for search
              </p>
            </div>
            <div style={{ flex: 1, float: "left" }}>
              <input
                style={{ padding: 5, margin: 13, marginTop: 23 }}
                type="checkbox"
              ></input>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1 }}>
              <p style={{ float: "right" }}>Typo-tolerance</p>
            </div>
            <div style={{ flex: 1, float: "left" }}>
              <input
                style={{ padding: 5, margin: 13, marginTop: 23 }}
                type="checkbox"
              ></input>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 9 }}></div>
            <div
              style={{
                backgroundColor: "#f6f6f",
                height: 60,
                marginBottom: 0,
                display: "block",
                right: 0,
                flex: 1,
                flexFlow: "row-reverse",
                padding: "10px",
              }}
            >
              <botton
                style={{
                  padding: "1% 3% 1% 3%",
                  backgroundColor: "orange",
                  borderRadius: 10,
                  margin: 10,
                  right: 0,
                }}
              >
                Apply
              </botton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
