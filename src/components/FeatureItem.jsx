import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const FeatureItem = ({ item }) => {
  return (
    <div className="w-full shadow-xl shadow-primary-light  p-5 rounded-md flex flex-col ">
      <h2 className="mb-3 text-lg">{item.title}</h2>
      <span className="flex flex-row justify-between">
        <h1 className="font-bold text-3xl antialiased">{item.body}</h1>{" "}
        <span className="mb-6">
          {item.rate}
          {"  "}
          {item.positive ? (
            <ArrowUpwardIcon style={{ color: "green" }} />
          ) : (
            <ArrowDownwardIcon style={{ color: "red" }} />
          )}
        </span>
      </span>
      <div className="text-sm text-gray-400">{item.description}</div>
    </div>
  );
};

export default FeatureItem;
