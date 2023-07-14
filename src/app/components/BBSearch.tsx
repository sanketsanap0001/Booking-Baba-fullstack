"use client";

import React, { useState } from "react";
import { Row } from "react-bootstrap";

export default function BBSearch({ onClick }: any) {
  const [searchKey, setSearchKey] = useState("");
  return (
    <div>
      <Row>
        <div style={{ width: "70%", color: "purple" }}>
          <input
            type="search"
            placeholder="Type here"
            id="form1"
            value={searchKey}
            className="form-control"
            onChange={(e) => {
              setSearchKey(e.target.value);
              if (!e.target.value) {
                onClick(null);
              }
            }}
          />
        </div>
        <button
          onClick={() => onClick(searchKey)}
          style={{ width: 100, backgroundColor: "lightblue", margin: 10 }}
          type="button"
          className="btn-secondary"
        >
          Serach
        </button>
      </Row>
    </div>
  );
}
