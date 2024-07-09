import React from "react";
import TransTable from "./TransTable";

const WidgetLg = ({ transactions }) => {
  return (
    <div className="shadow-lg shadow-primary-light mt-7 rounded-lg p-2 basis-1/2">
      <h2 className="text-xl font-bold ml-4 my-6">Latest Transactions</h2>
      <div className="ml-4">
        <TransTable transactions={transactions} />
      </div>
    </div>
  );
};

export default WidgetLg;
