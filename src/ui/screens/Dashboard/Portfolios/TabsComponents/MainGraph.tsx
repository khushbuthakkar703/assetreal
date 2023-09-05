import { ResponsiveLine } from "@nivo/line";
import React from "react";
// import {
//   Onehour,
//   Oneday,
//   Oneweek,
//   Onemonth,
//   Threemonth,
//   Oneyear,
// } from "./Graphdata";

interface Maingraph {
  Graph: any;
}

export default function MainGraph({ Graph }: Maingraph) {
  return (
    <ResponsiveLine
      curve="natural"
      data={Graph}
      margin={{ top: 10, right: 0, bottom: 160, left: 0 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        // orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: 50,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      colors={{ scheme: "greens" }}
      pointSize={8}
      pointColor={{ from: "color", modifiers: [] }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-10}
      enableArea={true}
      enablePoints={false}
      areaOpacity={1}
      enableCrosshair={false}
      useMesh={false}
      legends={[]}
      motionConfig="default"
      areaBaselineValue={60}
    />
  );
}
