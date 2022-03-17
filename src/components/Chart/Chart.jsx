import styles from "./Chart.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "January",
      total: 1800,
    },
    {
      name: "February",
      total: 900,
    },
    {
      name: "March",
      total: 1300,
    },
    {
      name: "April",
      total: 1150,
    },
    {
      name: "May",
      total: 1000,
    },
    {
      name: "July",
      total: 1300,
    },
  ];
  return (
    <div className={styles.chart}>
      <div className={styles.title}>Last 6 Months (Revenue)</div>
      <AreaChart
        width={730}
        height={350}
        data={data}
        margin={{ top: 30, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient> */}
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        {/* <Area
        type="monotone"
        dataKey="pv"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      /> */}
      </AreaChart>
    </div>
  );
};

export default Chart;
