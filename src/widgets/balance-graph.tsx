import {
  ComposedChart,
  Area,
  Bar,
  CartesianGrid
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 0,
    amt: 1400,
    cnt: 490
  },
  {
    name: "Page B",
    uv: 868,
    pv: 0,
    amt: 1506,
    cnt: 590
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 0,
    amt: 989,
    cnt: 350
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 0,
    amt: 1100,
    cnt: 460
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 0,
    amt: 1700,
    cnt: 380
  }
];

const BalanceGraph = () => {
  return (
    <ComposedChart
      width={200}
      height={100}
      data={data}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <Area type="monotone" dataKey="amt" fill="rgba(0, 0, 0, 0)" stroke="#8884d8" />
      <Bar dataKey="pv" barSize={20} fill="rgb(81, 12, 243, .2)" />
      <Area type="monotone" dataKey="uv" fill="rgba(0, 0, 0, 0)" stroke="rgb(81, 12, 243, .2)" />
    </ComposedChart>
  );
};

export default BalanceGraph;