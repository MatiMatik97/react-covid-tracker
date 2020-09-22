import React from "react";
import "./Stats.scss";
import InfoBox from "../../components/InfoBox/InfoBox";

const Stats: React.FC = () => {
  return (
    <div className="stats">
      <InfoBox title="Coronavirus Cases" total={2000} cases={3000} />
      <InfoBox title="Recovered" total={1000} cases={3000} />
      <InfoBox title="Deaths" total={1000} cases={3000} />
    </div>
  );
};

export default Stats;
