"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../lib/store/hooks";
import { fetchPortfolio } from "../features/portfolioSlice";

export default function PortfolioTable() {
  const dispatch = useAppDispatch();
  const { stocks, loading, error } = useAppSelector((state) => state.portfolio);

  useEffect(() => {
    // Example: assume user bought 10 shares each at some price
    dispatch(fetchPortfolio(["AAPL", "MSFT", "TSLA"]));
  }, [dispatch]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  // Example purchase data (in real case, you’ll pull from DB/Excel)
  const purchases: Record<string, { qty: number; buyPrice: number }> = {
    AAPL: { qty: 10, buyPrice: 200 },
    MSFT: { qty: 5, buyPrice: 300 },
    TSLA: { qty: 8, buyPrice: 400 },
  };

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-200 text-sm">
            <th className="p-2 text-left">Stock</th>
            <th className="p-2 text-right">CMP</th>
            <th className="p-2 text-right">Buy Price</th>
            <th className="p-2 text-right">Qty</th>
            <th className="p-2 text-right">Investment</th>
            <th className="p-2 text-right">Present Value</th>
            <th className="p-2 text-right">% Profit</th>
            <th className="p-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((s: any, idx: number) => {
            const qty = purchases[s.symbol]?.qty || 0;
            const buyPrice = purchases[s.symbol]?.buyPrice || 0;
            const investment = qty * buyPrice;
            const presentValue = qty * s.cmp;
            const profitPct = investment
              ? ((presentValue - investment) / investment) * 100
              : 0;

            let action = "HOLD";
            let actionColor = "text-yellow-600 font-semibold";
            if (profitPct > 20) {
              action = "SELL";
              actionColor = "text-green-600 font-bold";
            } else if (profitPct < -5) {
              action = "BUY MORE";
              actionColor = "text-red-600 font-bold";
            }

            return (
              <tr key={idx} className="border-t text-sm">
                <td className="p-2">{s.symbol}</td>
                <td className="p-2 text-right">{s.cmp.toFixed(2)}</td>
                <td className="p-2 text-right">{buyPrice}</td>
                <td className="p-2 text-right">{qty}</td>
                <td className="p-2 text-right">{investment.toFixed(2)}</td>
                <td className="p-2 text-right">{presentValue.toFixed(2)}</td>
                <td
                  className={`p-2 text-right ${
                    profitPct >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {profitPct.toFixed(2)}%
                </td>
                <td className={`p-2 text-center ${actionColor}`}>{action}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
