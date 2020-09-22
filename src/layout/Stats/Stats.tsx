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
        today={countryInfo.todayCases}
        total={countryInfo.cases}
      />
      <InfoBox
        title="Recovered"
        today={countryInfo.todayRecovered}
        total={countryInfo.recovered}
      />
      <InfoBox
        title="Deaths"
        today={countryInfo.todayDeaths}
        total={countryInfo.deaths}
      />
    </div>
  );
};

export default Stats;
