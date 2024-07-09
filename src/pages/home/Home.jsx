import React from "react";
import Features from "../../components/Features";
import Chart from "../../components/common/Chart";
import WidgetSm from "../../components/WidgetSm";
import WidgetLg from "../../components/WidgetLg";
import { userAnalyticsData } from "./../../datas";
import { newJoinMembers } from "./../../datas";
import { transactions } from "./../../datas";

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
      <div className="flex flex-row space-x-2">
        <WidgetSm members={newJoinMembers} />
        <WidgetLg transactions={transactions} />
      </div>
    </div>
  );
};

export default Home;
