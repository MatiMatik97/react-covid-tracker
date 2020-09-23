import React from "react";
import "./InfoBox.scss";
import { Card, CardContent, Typography } from "@material-ui/core";
import { formatLargeNumber, CASES_TYPE_PROPS } from "../../utils";

interface InfoBoxProps {
  title: string;
  today: number;
  total: number;
  casesType: TCasesType;
  active: boolean;
  onClickInfoBox:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  title,
  today,
  total,
  active,
  casesType,
  onClickInfoBox,
}) => {
  return (
    <Card
      className="infoBox"
      onClick={onClickInfoBox}
      style={{
        borderTop: `${
          active ? `10px solid ${CASES_TYPE_PROPS[casesType].rgb}` : "none"
        }`,
      }}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        <h2
          className="infoBox__today"
          style={{ color: CASES_TYPE_PROPS[casesType].rgb }}
        >
          {formatLargeNumber(today)}
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          {formatLargeNumber(total)} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
