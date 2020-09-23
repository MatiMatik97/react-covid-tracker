import React from "react";
import "./Stats.scss";
import InfoBox from "../../components/InfoBox/InfoBox";

interface StatsProps {
  countryInfo: ICountryInfo;
  casesType: TCasesType;
  setCasesType: React.Dispatch<React.SetStateAction<TCasesType>>;
}

const Stats: React.FC<StatsProps> = ({
  countryInfo,
  casesType,
  setCasesType,
}) => {
  return (
    <div className="stats">
      <InfoBox
        title="Cases"
        today={countryInfo.todayCases}
        total={countryInfo.cases}
        casesType={"cases"}
        active={casesType === "cases"}
        onClickInfoBox={(e) => setCasesType("cases")}
      />
      <InfoBox
        title="Recovered"
        today={countryInfo.todayRecovered}
        total={countryInfo.recovered}
        casesType={"recovered"}
        active={casesType === "recovered"}
        onClickInfoBox={(e) => setCasesType("recovered")}
      />
      <InfoBox
        title="Deaths"
        today={countryInfo.todayDeaths}
        total={countryInfo.deaths}
        casesType={"deaths"}
        active={casesType === "deaths"}
        onClickInfoBox={(e) => setCasesType("deaths")}
      />
    </div>
  );
};

export default Stats;
