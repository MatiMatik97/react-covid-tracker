import React from "react";
import "./InfoBox.scss";
import { Card, CardContent, Typography } from "@material-ui/core";

interface InfoBoxProps {
  title: string;
  today: number;
  total: number;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, today, total }) => {
  return (
    <Card className="infoBox">
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        <h2 className="infoBox__today">{today}</h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
