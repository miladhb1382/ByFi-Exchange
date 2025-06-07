"use client";
import { Area, AreaChart } from "recharts";

const fakeChartData = [
  { price: 13 },
  { price: 17 },
  { price: 28 },
  { price: 9 },
  { price: 25 },
  { price: 33 },
  { price: 27 },
  { price: 46 },
  { price: 48 },
  { price: 49 },
  { price: 50 },
  { price: 48 },
  { price: 51 },
  { price: 53 },
  { price: 52 },
  { price: 55 },
  { price: 57 },
  { price: 54 },
  { price: 56 },
  { price: 58 },
];

export function PriceSparkline({ data = fakeChartData }) {
  return (
    <div className="w-[84px] h-[35px]">
      <AreaChart
        width={84}
        height={35}
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="sparkGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(64, 191, 106, 0.2)" />
            <stop offset="100%" stopColor="rgba(64, 191, 106, 0)" />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="price"
          stroke="#40BF6A"
          fill="url(#sparkGradient)"
          strokeWidth={2}
        />
      </AreaChart>
    </div>
  );
}
export default PriceSparkline;
