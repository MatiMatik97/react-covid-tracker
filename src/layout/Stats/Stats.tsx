import React from "react";
import "./Stats.scss";
import InfoBox from "../../components/InfoBox/InfoBox";

interface StatsProps {
  countryInfo: ICountryInfo;
}

const Stats: React.FC<StatsProps> = ({ countryInfo }) => {
  return (
    <div className="stats">
      <InfoBox
        title="Coronavirus Cases"
        cases={countryInfo.cases}
        total={countryInfo.todayCases}
      />
      <InfoBox
        title="Recovered"
        cases={countryInfo.recovered}
        total={countryInfo.todayRecovered}
      />
      <InfoBox
        title="Deaths"
        cases={countryInfo.deaths}
        total={countryInfo.todayDeaths}
      />
    </div>
  );
};

export default Stats;
