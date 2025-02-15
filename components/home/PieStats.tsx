"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { OpenStatsData } from "@/lib/MyTypes";
import axios from "axios";

const chartData = [
  { gender: "male", visitors: 275, fill: "var(--color-male)" },
  { gender: "female", visitors: 200, fill: "var(--color-female)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  male: {
    label: "Male",
    color: "hsl(var(--chart-1))",
  },
  female: {
    label: "Female",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function PieStats() {
  const [data, setData] = React.useState<OpenStatsData>()
  
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get("/api/file")
      setData(response.data)
      console.log(response.data)
    }

    getData()
  }, [])

  return (
    <div className="p-8 h-full">
      <h1 className="font-medium text-xl">Labour Force</h1>
      <div className="mx-auto w-full flex justify-center 2xl:scale-150 2xl:my-16">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[270px]"
        >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="gender"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-white text-3xl font-bold"
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-white"
                          >
                            Individuals
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>

              <ChartLegend className="w-fit mx-auto" content={<ChartLegendContent />} />

            </PieChart>
        </ChartContainer>
      </div>
      
      <div className="justify-center text-center text-[12px] opacity-70 italic mt-2">
        The current strength of the Maldivian workforce.
      </div>
    </div>
  );
}
