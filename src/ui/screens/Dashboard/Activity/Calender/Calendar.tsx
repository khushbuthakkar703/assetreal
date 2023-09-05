import React, { useEffect, useState } from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
import { useDispatch, useSelector } from "react-redux";
import { calenderdata } from "../../../../redux/actions/activityAction";
import { ChartNavigatorCategoryAxisCrosshairTooltip } from "@progress/kendo-react-charts";
import useWindowDimensions from "./useWindowDimensions";


export default function Calendar() {
  const { width } :any = useWindowDimensions();
  let [dataValue, setdataValue]: any = useState([]);
  let [dataFiled, setdataFiled]: any = useState([]);

  const theme = {
    fontSize: 22,
  };
  const dispatch = useDispatch();
  const datalist = useSelector((state: any) => state.activity.operations);

  useEffect(() => {
    totaldata();
  }, [datalist]);
  const graph_data: any = [];
  var groupArrays: any = [];
  const totaldata: any = () => {
    const groups = datalist.reduce((groups: any, data: any) => {
      const date = data.when.split("T")[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(data);
      return groups;
    }, {});

    groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        data: groups[date],
      };
    });

    setdataFiled(groupArrays);
    for (let i = 0; i < groupArrays.length; i++) {
      graph_data.push({
        day: groupArrays[i].date,
        value: groupArrays[i].data.length,
      });
    }
    setdataValue(graph_data);
  };

  var gr_data: any = [];
  const handleCalenderData = (dataofgraph: any) => {
    if (dataofgraph.data) {
      gr_data = dataFiled.filter((data: any) => {
        return data.date == dataofgraph.data.day;
      });
    }
    dispatch(calenderdata(gr_data));
  };
  return (
    <>     
      <ResponsiveCalendar
        data={dataValue}
        from="2022-01-01"
        to="2022-12-31"
        emptyColor="#eeeeee"
        colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
        minValue="auto"
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={60}
        yearLegendOffset={11}
        monthSpacing={width < 950 ? 15 : 50}
        // monthSpacing={15}
        monthBorderWidth={0}
        monthBorderColor="#ffffff"
        monthLegendOffset={15}
        dayBorderColor="#ffffff"
        onClick={(day, event) => handleCalenderData(day)}
        legends={[
          {
            anchor: "bottom-right",
            direction: "row",
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: "right-to-left",
          },
        ]}
      />
    </>
  );
}
