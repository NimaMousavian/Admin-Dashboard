import React from "react";
import FeatureItem from "./FeatureItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Features = () => {
  const featureItems = [
    {
      title: "Revanue",
      body: "$2,415",
      rate: "-11.4",
      positive: false,
      description: "Compared to last month",
    },
    {
      title: "Sales",
      body: "$4,724",
      rate: "-1.4",
      positive: false,
      description: "Compared to last month",
    },
    {
      title: "Const",
      body: "$1,512",
      rate: "+2.4",
      positive: true,
      description: "Compared to last month",
    },
  ];

  return (
    <div className="flex flex-row space-x-3">
      {featureItems.map((item) => (
        <FeatureItem item={item} />
      ))}
    </div>
  );
};

export default Features;
