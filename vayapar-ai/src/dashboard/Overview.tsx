import React from "react";
import Card from "../components/Card";

const Overview: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card title="Total Reviews" value="120" />
      <Card title="Leads" value="80" />
      <Card title="Rating" value="4.5 ⭐" />
    </div>
  );
};

export default Overview;