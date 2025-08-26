"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../lib/store/hooks";
import { fetchPortfolio } from "../features/portfolioSlice";

// ✅ Fix for Next.js SSR (ApexCharts must be loaded dynamically)
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function PortfolioChart() {
  const dispatch = useAppDispatch();
  const { stocks } = useAppSelector((state) => state.portfolio);

  useEffect(() => {
    dispatch(fetchPortfolio(["AAPL", "MSFT", "TSLA"]));
  }, [dispatch]);

  // Prepare data for chart
  const symbols = stocks.map((s: any) => s.symbol);
  const cmpValues = stocks.map((s: any) => s.cmp);

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    title: {
      text: "Stock CMP Comparison",
      align: "center",
    },
    xaxis: {
      categories: symbols,
    },
    dataLabels: {
      enabled: true,
    },
  };

  const series = [
    {
      name: "CMP (Current Market Price)",
      data: cmpValues,
    },
  ];

  return (
    <div className="mt-8 p-4 bg-white rounded-lg shadow">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
}
