"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../lib/store/hooks";
import { fetchPortfolio } from "../features/portfolioSlice";

export default function PortfolioTable() {
  const dispatch = useAppDispatch();
  const { stocks, loading, error } = useAppSelector((state) => state.portfolio);

  useEffect(() => {
    dispatch(fetchPortfolio(["AAPL", "MSFT", "TSLA"]));
  }, [dispatch]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Stock</th>
            <th className="p-2 text-right">CMP</th>
            <th className="p-2 text-right">P/E</th>
            <th className="p-2 text-right">Earnings</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(
            (
              s: {
                symbol: string;
                cmp: number;
                pe: number;
                earnings: number | null;
              },
              idx: number
            ) => (
              <tr key={idx} className="border-t">
                <td className="p-2">{s.symbol}</td>
                <td className="p-2 text-right">{s.cmp}</td>
                <td className="p-2 text-right">{s.pe}</td>
                <td className="p-2 text-right">{s.earnings || "-"}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
