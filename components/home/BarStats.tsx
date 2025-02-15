"use client"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", Men: 186, Women: 80 },
  { month: "February", Men: 305, Women: 200 },
  { month: "March", Men: 237, Women: 120 },
  { month: "April", Men: 73, Women: 190 },
  { month: "May", Men: 209, Women: 130 },
  { month: "June", Men: 214, Women: 140 },
]
const chartConfig = {
  Men: {
    label: "Men",
    color: "hsl(var(--chart-1))",
  },
  Women: {
    label: "Women",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig
export default function BarStats() {
  return (
    <div className="p-8 h-full">

        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="Men" fill="var(--color-Men)" radius={4} />
            <Bar dataKey="Women" fill="var(--color-Women)" radius={4} />
          </BarChart>
        </ChartContainer>
        </div>

  )
}
