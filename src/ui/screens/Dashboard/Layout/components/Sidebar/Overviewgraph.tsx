import React from "react";
import { ResponsivePie } from "@nivo/pie";

import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";

type Props = {};

export const Overviewgraph: React.VFC<Props> = ({}) => {
  const data = [
    { foodType: "Bebidas", percentSold: 36.5 ,color: "#3E7EFF"},
    { foodType: "Condimentos", percentSold: 24, color: "#B52DFC", style: {margin : '10px'} },
    { foodType: "Frutas", percentSold: 13, color:"#FBB0BF" },
    { foodType: "Carnes/Aves", percentSold: 16.5, color: "#5FDCB3"  },
  ];

  const donutCenterRenderer = () => (
    <div className="centerText">
      <div className="centerTitle">£85k</div>
      <div className="centerDes">85% Active Operations</div> 
    </div>
  );

  return (
    <Chart donutCenterRender={donutCenterRenderer}>
      <ChartSeries>
        <ChartSeriesItem
          type="donut"
          data={data}
          categoryField="foodType"
          field="percentSold"
          holeSize={60}
        >
        </ChartSeriesItem>
      </ChartSeries>
      <ChartLegend visible={false} />
  </Chart>
  );
}
