import React from "react";
import Features from "../../components/Features";
import { userAnalyticsData } from "./../../datas";
import Chart from "../../components/common/Chart";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Features />
      <Chart
        title="User Analytics"
        data={userAnalyticsData}
        dataKey={"value"}
        xAxisDataKey={"month"}
        grid={true}
      />
    </div>
  );
};

export default Home;
