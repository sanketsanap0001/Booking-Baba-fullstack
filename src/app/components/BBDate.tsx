"use client";
import { useState } from "react";
import React from "react";
import moment from "moment";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

export default function BBDate() {
  const [dates, setDates] = useState([]);
  console.log(dates);


  return (
    <div className="h-16">
      <RangePicker
        onChange={(values: any) => {
          setDates(
            values.map((item: any) => {
              return moment(item).format("DD-MM-YYYY");
            })
          );
        }}
      />
    </div>
  );
}
